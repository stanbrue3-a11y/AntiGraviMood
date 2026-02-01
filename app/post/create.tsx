import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
    ActivityIndicator,
    Dimensions,
    Image as RNImage,
    Keyboard,
    TouchableWithoutFeedback,
    Linking
} from 'react-native';
import { useRouter } from 'expo-router';
import { CameraView, useCameraPermissions, CameraType, FlashMode } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
    FadeIn,
    FadeOut,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    interpolateColor,
    runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';

// Moments and Places decoupled micro-stores
import { usePlacesStore } from '../../src/stores/placesStore';
import { useMomentsStore } from '../../src/stores/momentsStore';
import { MOODS } from '../../src/design/tokens/moods';
import { useTheme } from '../../src/design';
import { useLocation } from '../../src/hooks/useLocation';
import { Place } from '../../src/types/model';
import { IconService } from '../../src/services/IconService';

const { width, height } = Dimensions.get('window');

// --- MOOD COLORS (Same as map pins) ---
const MOOD_COLORS = {
    chill: '#8ccaf7',
    festif: '#ffab60',
    culturel: '#c499ff',
};

// --- DISTANCE ---
const getDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const formatDistance = (km: number): string => km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`;

type CreateStep = 'search' | 'camera' | 'review';
const STEPS: CreateStep[] = ['search', 'camera', 'review'];

// --- ICON MAPPING (DELEGATED TO ICON SERVICE) ---
const getCategoryIcon = (place: Place): keyof typeof Ionicons.glyphMap => {
    // Adapter le retour de IconService (string) vers keyof Ionicons
    const cat = IconService.getIconCategory(place);
    switch (cat) {
        case 'beer': return 'wine'; // Fallback mapping if needed, or update IconService to return ionic names
        case 'wine': return 'wine';
        case 'cocktail': return 'wine'; // 'wine' is generic for drink
        case 'cafe': return 'cafe';
        case 'restaurant': return 'restaurant';
        case 'music': return 'musical-notes';
        case 'palette': return 'easel'; // easel vs color-palette
        case 'leaf': return 'leaf';
        case 'museum': return 'library';
        case 'lodging': return 'bed';
        default: return 'location';
    }
};

// --- GET MOOD COLOR BY CATEGORY ---
const getCategoryMoodColor = (category: string): string => {
    const cat = category.toLowerCase();
    if (cat === 'cafe' || cat === 'café' || cat === 'parc') return MOOD_COLORS.chill;
    if (cat === 'bar' || cat === 'club' || cat === 'restaurant') return MOOD_COLORS.festif;
    return MOOD_COLORS.culturel;
};

// --- PROGRESS INDICATOR ---
const ProgressIndicator = ({ step }: { step: number }) => {
    const colors = [MOOD_COLORS.chill, MOOD_COLORS.festif, MOOD_COLORS.culturel];
    return (
        <View style={styles.progressContainer}>
            {[0, 1, 2].map(i => (
                <View
                    key={i}
                    style={[
                        styles.progressDot,
                        { backgroundColor: i <= step ? colors[i] : 'rgba(255,255,255,0.2)' },
                        i === step && styles.progressDotActive
                    ]}
                />
            ))}
        </View>
    );
};

// --- TIMER OVERLAY ---
const TimerOverlay = ({ seconds, onComplete }: { seconds: number; onComplete: () => void }) => {
    const [count, setCount] = useState(seconds);
    useEffect(() => {
        if (count === 0) { onComplete(); return; }
        const t = setTimeout(() => setCount(c => c - 1), 1000);
        return () => clearTimeout(t);
    }, [count]);
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.timerOverlay}>
            <Text style={styles.timerText}>{count}</Text>
        </Animated.View>
    );
};

// --- GRID OVERLAY ---
const GridOverlay = () => (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={[styles.gridLine, { top: '33.33%', left: 0, right: 0, height: 1 }]} />
        <View style={[styles.gridLine, { top: '66.66%', left: 0, right: 0, height: 1 }]} />
        <View style={[styles.gridLine, { left: '33.33%', top: 0, bottom: 0, width: 1 }]} />
        <View style={[styles.gridLine, { left: '66.66%', top: 0, bottom: 0, width: 1 }]} />
    </View>
);

// --- DRAGGABLE CAPTION (Snapchat-style) ---
// --- DRAGGABLE CAPTION - SNAPCHAT STYLE ---
interface DraggableCaptionProps {
    text: string;
    onChangeText: (text: string) => void;
    bgMode: 'transparent' | 'black' | 'white';
    onToggleBg: () => void;
}

const DraggableCaption = ({ text, onChangeText, bgMode, onToggleBg }: DraggableCaptionProps) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const rotation = useSharedValue(0);
    const isActive = useSharedValue(false);

    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);
    const savedScale = useSharedValue(1);
    const savedRotation = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onStart(() => {
            isActive.value = true;
        })
        .onUpdate((e) => {
            translateX.value = savedTranslateX.value + e.translationX;
            translateY.value = savedTranslateY.value + e.translationY;
        })
        .onEnd(() => {
            savedTranslateX.value = translateX.value;
            savedTranslateY.value = translateY.value;
            isActive.value = false;
        });

    const pinchGesture = Gesture.Pinch()
        .onStart(() => {
            isActive.value = true;
        })
        .onUpdate((e) => {
            scale.value = Math.max(0.3, Math.min(4, savedScale.value * e.scale));
        })
        .onEnd(() => {
            savedScale.value = scale.value;
            isActive.value = false;
        });

    const rotationGesture = Gesture.Rotation()
        .onStart(() => {
            isActive.value = true;
        })
        .onUpdate((e) => {
            rotation.value = savedRotation.value + e.rotation;
        })
        .onEnd(() => {
            savedRotation.value = rotation.value;
            isActive.value = false;
        });

    // Tap to toggle background
    const tapGesture = Gesture.Tap()
        .onEnd(() => {
            runOnJS(onToggleBg)();
        });

    const gesture = Gesture.Simultaneous(panGesture, pinchGesture, rotationGesture, tapGesture);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
            { rotate: `${rotation.value}rad` },
        ],
        // Shadow for better visibility
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }));

    if (!text) return null;

    const getBgStyle = () => {
        if (bgMode === 'black') return { backgroundColor: 'rgba(0,0,0,0.6)' };
        if (bgMode === 'white') return { backgroundColor: 'rgba(255,255,255,0.85)' };
        return { backgroundColor: 'transparent' };
    };

    const getTextStyle = () => {
        if (bgMode === 'white') return { color: '#000' };
        return { color: '#fff', textShadowColor: 'rgba(0,0,0,0.7)', textShadowRadius: 3 };
    };

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.draggableText, animatedStyle, getBgStyle()]}>
                <Text style={[styles.draggableTextContent, getTextStyle()]}>{text}</Text>
            </Animated.View>
        </GestureDetector>
    );
};


// --- MAIN COMPONENT ---
export default function CreateMomentScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();

    const addMoment = useMomentsStore(state => state.addMoment);
    const places = usePlacesStore(state => state.places);
    const { location } = useLocation();

    const [permission, requestPermission] = useCameraPermissions();
    const [step, setStep] = useState<CreateStep>('search');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
    const [capturedMedia, setCapturedMedia] = useState<{ uri: string; type: 'image' | 'video' } | null>(null);
    const [caption, setCaption] = useState('');
    const [selectedMood, setSelectedMood] = useState<'chill' | 'festif' | 'culturel' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isEditingText, setIsEditingText] = useState(false);
    const [captionBgMode, setCaptionBgMode] = useState<'transparent' | 'black' | 'white'>('transparent');
    const textInputRef = useRef<TextInput>(null);

    const cameraRef = useRef<CameraView>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [flashMode, setFlashMode] = useState<FlashMode>('off');
    const [showGrid, setShowGrid] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const recordingProgress = useSharedValue(0);

    const stepIndex = STEPS.indexOf(step);

    // Navigation
    const goBack = useCallback(() => {
        if (step === 'search') router.back();
        else if (step === 'camera') { setStep('search'); setIsCameraReady(false); }
        else if (step === 'review') setStep('camera');
    }, [step, router]);

    useEffect(() => {
        if (step === 'camera' && !permission?.granted) requestPermission();
    }, [step, permission]);

    // Places with distance
    const placesWithDistance = useMemo(() => {
        if (!location) return places.map((p) => ({ ...p, distance: null }));
        return places.map((p) => ({
            ...p,
            distance: getDistanceKm(location.latitude, location.longitude, p.location.coordinates.lat, p.location.coordinates.lng)
        })).sort((a, b) => (a.distance ?? 999) - (b.distance ?? 999));
    }, [places, location]);

    const filteredPlaces = useMemo(() => {
        const list = searchQuery
            ? placesWithDistance.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
            : placesWithDistance;
        return list.slice(0, 20);
    }, [placesWithDistance, searchQuery]);

    const handleSelectPlace = (id: string) => {
        Haptics.selectionAsync();
        setSelectedPlaceId(id);
        setStep('camera');
    };

    // Camera controls
    const handleCameraReady = () => {
        console.log('[Camera] Ready!');
        setIsCameraReady(true);
    };

    const toggleFacing = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setFacing(f => f === 'back' ? 'front' : 'back'); };
    const cycleFlash = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setFlashMode(f => f === 'off' ? 'on' : f === 'on' ? 'auto' : 'off'); };
    const cycleTimer = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setTimerSeconds(t => t === 0 ? 3 : t === 3 ? 10 : 0); };
    const toggleGrid = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setShowGrid(g => !g); };

    const takePicture = async () => {
        if (!cameraRef.current || !isCameraReady) {
            console.warn('[Camera] Not ready for picture');
            return;
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        try {
            const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });
            if (photo) { setCapturedMedia({ uri: photo.uri, type: 'image' }); setStep('review'); }
        } catch (e) { console.error("Camera error", e); }
    };

    const handleShutter = () => {
        if (!isCameraReady) {
            console.warn('[Camera] Shutter pressed but camera not ready');
            return;
        }
        if (timerSeconds > 0) setIsTimerRunning(true);
        else takePicture();
    };

    const handleTimerComplete = () => { setIsTimerRunning(false); takePicture(); };

    const startRecording = async () => {
        if (!cameraRef.current || !isCameraReady) {
            console.warn('[Camera] Cannot record - camera not ready');
            return;
        }
        if (isRecording) return;

        setIsRecording(true);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        recordingProgress.value = withTiming(1, { duration: 15000 });

        try {
            const video = await cameraRef.current.recordAsync({ maxDuration: 15 });
            if (video) { setCapturedMedia({ uri: video.uri, type: 'video' }); setStep('review'); }
        } catch (e) {
            console.warn("[Camera] Recording failed:", e);
        } finally {
            setIsRecording(false);
            recordingProgress.value = 0;
        }
    };

    const stopRecording = () => {
        if (cameraRef.current && isRecording) {
            cameraRef.current.stopRecording();
            recordingProgress.value = withTiming(0, { duration: 200 });
        }
    };

    const recordingRingStyle = useAnimatedStyle(() => ({
        transform: [{ scale: 1 + recordingProgress.value * 0.15 }],
        borderColor: interpolateColor(recordingProgress.value, [0, 1], ['#ffffff', MOOD_COLORS.festif]),
    }));

    const pickFromGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 5],
            quality: 0.8,
        });
        if (!result.canceled) {
            setCapturedMedia({ uri: result.assets[0].uri, type: result.assets[0].type === 'video' ? 'video' : 'image' });
            setStep('review');
        }
    };

    const handleSubmit = async () => {
        if (!capturedMedia || !selectedMood || !selectedPlaceId) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            return;
        }

        setIsSubmitting(true);
        // Heavy success haptic
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        // Show success animation
        setShowSuccess(true);

        const place = places.find(p => p.id === selectedPlaceId);

        // Optimistic update
        addMoment({
            placeId: selectedPlaceId,
            placeName: place?.name || 'Unknown',
            imageUri: capturedMedia.uri,
            caption,
            mood: selectedMood,
            type: capturedMedia.type,
        });

        // Delay close for animation
        setTimeout(() => {
            setIsSubmitting(false);
            router.dismissAll();
            // Force feed refresh feel
            router.replace('/(tabs)/feed');
        }, 1200);
    };

    const selectedPlace = places.find(p => p.id === selectedPlaceId);
    const getFlashIcon = (): keyof typeof Ionicons.glyphMap => flashMode === 'on' ? 'flash' : flashMode === 'auto' ? 'flash-outline' : 'flash-off';

    // ========== STEP 1: SEARCH ==========
    if (step === 'search') {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container, { backgroundColor: theme.background }]}>
                    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
                        <View style={styles.headerRow}>
                            <Pressable onPress={goBack} style={styles.headerBtn}>
                                <Ionicons name="close" size={26} color={theme.text.primary} />
                            </Pressable>
                            <ProgressIndicator step={stepIndex} />
                            <View style={{ width: 44 }} />
                        </View>
                        <Text style={[styles.title, { color: theme.text.primary }]}>Où êtes-vous ?</Text>
                    </View>

                    <View style={styles.searchWrapper}>
                        <View style={[styles.searchBox, { backgroundColor: theme.surface, borderColor: MOOD_COLORS.chill }]}>
                            <Ionicons name="search" size={20} color={MOOD_COLORS.chill} />
                            <TextInput
                                style={[styles.searchInput, { color: theme.text.primary }]}
                                placeholder="Rechercher un lieu..."
                                placeholderTextColor={theme.text.placeholder}
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                returnKeyType="search"
                            />
                            {searchQuery.length > 0 && (
                                <Pressable onPress={() => setSearchQuery('')}>
                                    <Ionicons name="close-circle" size={20} color={theme.text.secondary} />
                                </Pressable>
                            )}
                        </View>
                    </View>

                    {!searchQuery && (
                        <View style={styles.section}>
                            <Ionicons name="navigate" size={14} color={MOOD_COLORS.chill} />
                            <Text style={[styles.sectionText, { color: theme.text.secondary }]}>À proximité</Text>
                        </View>
                    )}

                    <ScrollView contentContainerStyle={styles.list} keyboardShouldPersistTaps="handled">
                        {filteredPlaces.map(place => {
                            const moodColor = getCategoryMoodColor(place.category);
                            const icon = getCategoryIcon(place);

                            return (
                                <Pressable
                                    key={place.id}
                                    style={({ pressed }) => [styles.placeItem, pressed && { opacity: 0.7 }]}
                                    onPress={() => handleSelectPlace(place.id)}
                                >
                                    <View style={styles.placeIconOuter}>
                                        <View style={[styles.placeIconInner, { backgroundColor: moodColor }]}>
                                            <Ionicons name={icon} size={16} color="#fff" />
                                        </View>
                                    </View>
                                    <View style={styles.placeInfo}>
                                        <Text style={[styles.placeName, { color: theme.text.primary }]}>{place.name}</Text>
                                        <View style={styles.placeMeta}>
                                            <Text style={[styles.placeCategory, { color: moodColor }]}>{place.category.toUpperCase()}</Text>
                                            {place.distance !== null && (
                                                <Text style={[styles.placeDistance, { color: theme.text.secondary }]}>• {formatDistance(place.distance)}</Text>
                                            )}
                                        </View>
                                    </View>
                                    <Ionicons name="chevron-forward" size={18} color={theme.text.secondary} />
                                </Pressable>
                            );
                        })}
                        {filteredPlaces.length === 0 && (
                            <View style={styles.empty}>
                                <Ionicons name="search" size={48} color={theme.text.muted} />
                                <Text style={{ color: theme.text.secondary, marginTop: 12 }}>Aucun lieu trouvé</Text>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    // ========== STEP 2: CAMERA ==========
    if (step === 'camera') {
        if (!permission?.granted) {
            return (
                <View style={[styles.container, styles.centered, { backgroundColor: '#000' }]}>
                    <Ionicons name="camera" size={64} color={MOOD_COLORS.festif} />
                    <Text style={styles.permissionText}>Permission caméra requise</Text>
                    <Pressable onPress={() => {
                        if (!permission?.canAskAgain) {
                            Linking.openSettings();
                        } else {
                            requestPermission();
                        }
                    }}>
                        <LinearGradient colors={[MOOD_COLORS.chill, MOOD_COLORS.festif]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.permissionBtn}>
                            <Text style={styles.permissionBtnText}>
                                {!permission?.canAskAgain ? 'Ouvrir les réglages' : 'Autoriser'}
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            );
        }

        return (
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <CameraView
                    style={StyleSheet.absoluteFill}
                    facing={facing}
                    ref={cameraRef}
                    flash={flashMode}
                    onCameraReady={handleCameraReady}
                />
                {showGrid && <GridOverlay />}
                {isTimerRunning && <TimerOverlay seconds={timerSeconds} onComplete={handleTimerComplete} />}

                <View style={[styles.cameraOverlay, { paddingTop: insets.top, paddingBottom: insets.bottom + 20 }]} pointerEvents="box-none">
                    <View>
                        <ProgressIndicator step={stepIndex} />
                        <View style={styles.cameraHeader}>
                            <Pressable onPress={goBack} style={styles.cameraBtn}>
                                <Ionicons name="arrow-back" size={24} color="#fff" />
                            </Pressable>
                            <View style={styles.locationBadge}>
                                <Ionicons name="location-sharp" size={14} color={MOOD_COLORS.festif} />
                                <Text style={styles.locationText} numberOfLines={1}>{selectedPlace?.name}</Text>
                            </View>
                            <View style={{ width: 44 }} />
                        </View>
                    </View>

                    <View style={styles.sideControls}>
                        <Pressable onPress={cycleFlash} style={[styles.sideBtn, flashMode === 'on' && styles.sideBtnActive]}>
                            <Ionicons name={getFlashIcon()} size={22} color="#fff" />
                        </Pressable>
                        <Pressable onPress={cycleTimer} style={[styles.sideBtn, timerSeconds > 0 && styles.sideBtnActive]}>
                            <Ionicons name="timer-outline" size={22} color="#fff" />
                            {timerSeconds > 0 && <Text style={styles.sideBtnLabel}>{timerSeconds}s</Text>}
                        </Pressable>
                        <Pressable onPress={toggleGrid} style={[styles.sideBtn, showGrid && styles.sideBtnActive]}>
                            <Ionicons name="grid-outline" size={22} color="#fff" />
                        </Pressable>
                    </View>

                    <View>
                        <View style={styles.cameraControls}>
                            <Pressable onPress={pickFromGallery} style={styles.galleryBtn}>
                                <Ionicons name="images" size={26} color="#fff" />
                            </Pressable>
                            <Pressable
                                onPress={handleShutter}
                                onLongPress={startRecording}
                                onPressOut={isRecording ? stopRecording : undefined}
                                delayLongPress={400}
                                disabled={!isCameraReady}
                                style={{ opacity: isCameraReady ? 1 : 0.5 }}
                            >
                                <Animated.View style={[styles.shutterBtn, recordingRingStyle]}>
                                    <View style={[styles.shutterInner, isRecording && styles.shutterRecording]} />
                                </Animated.View>
                            </Pressable>
                            <Pressable onPress={toggleFacing} style={styles.cameraBtn}>
                                <Ionicons name="camera-reverse" size={26} color="#fff" />
                            </Pressable>
                        </View>
                        <Text style={styles.cameraHint}>
                            {!isCameraReady ? 'Chargement...' : isRecording ? '● Enregistrement...' : 'Appui long = vidéo'}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    // ========== STEP 3: REVIEW ==========
    if (step === 'review' && capturedMedia) {
        const openTextEditor = () => {
            setIsEditingText(true);
            setTimeout(() => textInputRef.current?.focus(), 100);
        };

        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); setIsEditingText(false); }}>
                    <View style={{ flex: 1, backgroundColor: '#000' }}>
                        <RNImage source={{ uri: capturedMedia.uri }} style={StyleSheet.absoluteFill} resizeMode="cover" />
                        <LinearGradient colors={['rgba(0,0,0,0.4)', 'transparent', 'transparent', 'rgba(0,0,0,0.85)']} locations={[0, 0.15, 0.55, 1]} style={StyleSheet.absoluteFill} />

                        <View style={[styles.reviewOverlay, { paddingTop: insets.top + 4, paddingBottom: insets.bottom }]}>
                            {/* Header with progress */}
                            <View style={styles.reviewTopSection}>
                                <ProgressIndicator step={stepIndex} />
                                <View style={styles.reviewHeaderRow}>
                                    <Pressable onPress={goBack} style={styles.cameraBtn}>
                                        <Ionicons name="arrow-back" size={24} color="#fff" />
                                    </Pressable>

                                    <View style={{ flex: 1 }} />

                                    {/* Visible Add Text button in top right */}
                                    {!caption && !isEditingText && (
                                        <Pressable onPress={openTextEditor} style={styles.addTextButton}>
                                            <Ionicons name="text" size={18} color="#fff" />
                                            <Text style={styles.addTextButtonLabel}>Ajouter du texte</Text>
                                        </Pressable>
                                    )}
                                </View>
                            </View>

                            {/* Caption area */}
                            <View style={styles.captionAreaFull}>
                                {isEditingText && !caption ? (
                                    <TextInput
                                        ref={textInputRef}
                                        style={styles.captionInputCenter}
                                        placeholder="Écrire ici..."
                                        placeholderTextColor="rgba(255,255,255,0.5)"
                                        value={caption}
                                        onChangeText={setCaption}
                                        multiline
                                        maxLength={140}
                                        textAlign="center"
                                        autoFocus
                                        onBlur={() => setIsEditingText(false)}
                                    />
                                ) : caption ? (
                                    <DraggableCaption
                                        text={caption}
                                        onChangeText={setCaption}
                                        bgMode={captionBgMode}
                                        onToggleBg={() => {
                                            Haptics.selectionAsync();
                                            setCaptionBgMode(prev => prev === 'transparent' ? 'black' : prev === 'black' ? 'white' : 'transparent');
                                        }}
                                    />
                                ) : null}
                            </View>



                            {/* Mood Selector */}
                            <View style={styles.moodContainer}>
                                <Text style={styles.moodTitle}>Quel est le mood ?</Text>
                                <View style={styles.moodRow}>
                                    {(['chill', 'festif', 'culturel'] as const).map(mood => {
                                        const isSelected = selectedMood === mood;
                                        const color = MOOD_COLORS[mood];
                                        const { label, icon } = MOODS[mood];
                                        return (
                                            <Pressable
                                                key={mood}
                                                onPress={() => { Haptics.selectionAsync(); setSelectedMood(mood); }}
                                                style={[
                                                    styles.moodBubble,
                                                    { borderColor: color },
                                                    isSelected && { backgroundColor: color }
                                                ]}
                                            >
                                                <Ionicons name={icon as any} size={18} color={isSelected ? '#fff' : color} />
                                                <Text style={[styles.moodText, { color: isSelected ? '#fff' : color }]}>{label}</Text>
                                            </Pressable>
                                        );
                                    })}
                                </View>

                                <Pressable onPress={handleSubmit} disabled={isSubmitting || !selectedMood} style={{ width: '100%' }}>
                                    <LinearGradient
                                        colors={selectedMood ? [MOOD_COLORS[selectedMood], `${MOOD_COLORS[selectedMood]}cc`] : ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.publishBtn}
                                    >
                                        {isSubmitting ? <ActivityIndicator color="#fff" /> : (
                                            <>
                                                <Text style={styles.publishText}>Publier</Text>
                                                <Ionicons name="send" size={18} color="#fff" style={{ marginLeft: 8 }} />
                                            </>
                                        )}
                                    </LinearGradient>
                                </Pressable>
                            </View>
                        </View>

                        {/* SUCCESS OVERLAY */}
                        {showSuccess && (
                            <Animated.View entering={FadeIn} style={styles.successOverlay}>
                                <Ionicons name="checkmark-circle" size={80} color={MOOD_COLORS[selectedMood!]} />
                                <Text style={styles.successText}>Moment Publié !</Text>
                            </Animated.View>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </GestureHandlerRootView>
        );
    }

    return null;
}

// ========== STYLES ==========
const styles = StyleSheet.create({
    container: { flex: 1 },
    centered: { alignItems: 'center', justifyContent: 'center' },

    progressContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, paddingVertical: 12 },
    progressDot: { height: 8, width: 8, borderRadius: 4 },
    progressDotActive: { width: 24 },

    timerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', zIndex: 100 },
    timerText: { fontSize: 100, fontWeight: '200', color: MOOD_COLORS.festif },

    gridLine: { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.25)' },

    header: { paddingHorizontal: 16, paddingBottom: 12 },
    headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    headerBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginTop: 4 },

    searchWrapper: { paddingHorizontal: 16, marginBottom: 12 },
    searchBox: { flexDirection: 'row', alignItems: 'center', height: 48, borderRadius: 24, paddingHorizontal: 16, gap: 10, borderWidth: 1.5 },
    searchInput: { flex: 1, fontSize: 16 },

    section: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 8, gap: 6 },
    sectionText: { fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },

    list: { paddingBottom: 40 },
    placeItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 20, gap: 12 },
    placeIconOuter: {
        width: 36, height: 36, borderRadius: 18,
        backgroundColor: '#fff',
        alignItems: 'center', justifyContent: 'center',
        shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.15, shadowRadius: 2, elevation: 2,
    },
    placeIconInner: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
    placeInfo: { flex: 1 },
    placeName: { fontSize: 15, fontWeight: '600', marginBottom: 2 },
    placeMeta: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    placeCategory: { fontSize: 11, fontWeight: '700' },
    placeDistance: { fontSize: 11 },
    empty: { alignItems: 'center', paddingTop: 60 },

    permissionText: { color: '#fff', fontSize: 18, marginTop: 16, marginBottom: 24 },
    permissionBtn: { paddingHorizontal: 32, paddingVertical: 14, borderRadius: 28 },
    permissionBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },

    cameraOverlay: { flex: 1, justifyContent: 'space-between' },
    cameraHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 },
    cameraBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 22 },
    locationBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, gap: 6, maxWidth: 200 },
    locationText: { color: '#fff', fontSize: 14, fontWeight: '600' },

    sideControls: { position: 'absolute', right: 16, top: '40%', gap: 12 },
    sideBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 22, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
    sideBtnActive: { backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.5)' },
    sideBtnLabel: { position: 'absolute', bottom: -4, right: -4, fontSize: 9, color: '#fff', fontWeight: 'bold', backgroundColor: MOOD_COLORS.festif, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 6, overflow: 'hidden' },

    cameraControls: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 20 },
    shutterBtn: { width: 72, height: 72, borderRadius: 36, borderWidth: 4, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    shutterInner: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#fff' },
    shutterRecording: { width: 26, height: 26, borderRadius: 6, backgroundColor: MOOD_COLORS.festif },
    galleryBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
    cameraHint: { textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 12 },

    reviewOverlay: { flex: 1, justifyContent: 'space-between' },
    reviewTopSection: {},
    reviewHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
    reviewHeaderRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },

    // Add Text Button
    addTextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(255,255,255,0.25)',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 22,
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.5)',
        alignSelf: 'flex-end',
    },
    addTextButtonLabel: { color: '#fff', fontSize: 14, fontWeight: '600' },

    // Caption Area
    captionAreaFull: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 },
    captionInputCenter: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 6,
        width: '100%',
    },

    // Draggable Text
    draggableText: {
        position: 'absolute',
        alignSelf: 'center',
        top: '50%',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    draggableTextContent: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.9)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
        maxWidth: width - 40,
    },

    // Mood Selector
    moodContainer: { paddingHorizontal: 20, paddingBottom: 20, alignItems: 'center', gap: 16, marginBottom: 10 },
    moodTitle: { color: '#fff', fontSize: 16, fontWeight: '600', marginBottom: 4 },
    moodRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
    moodBubble: {
        flexDirection: 'row', alignItems: 'center', gap: 8,
        paddingHorizontal: 16, paddingVertical: 10,
        borderRadius: 24, borderWidth: 1.5, backgroundColor: 'rgba(0,0,0,0.3)'
    },
    moodText: { fontSize: 14, fontWeight: '700' },

    // Publish Button
    publishBtn: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        height: 56, borderRadius: 28, width: '100%'
    },
    publishText: { color: '#fff', fontSize: 18, fontWeight: '700' },

    // Success Overlay
    successOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: 16,
    },
    successText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
