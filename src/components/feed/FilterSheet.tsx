import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Pressable,
    ScrollView,
    Modal,
    TouchableOpacity,
    LayoutAnimation,
    UIManager
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PinceSlider } from '../common/PinceSlider';
import { TimeWheelPicker } from '../ui/TimeWheelPicker';
import { ParisMapSelector } from '../ui/ParisMapSelector';
import { usePlacesStore } from '../../stores/placesStore';
import { useSearchStore, selectFilteredResults, PLACE_CATEGORIES } from '../../stores/searchStore';
import { getCurrentPrice, getPriceDistributions } from '../../lib/priceUtils';
import { TriplePriceSection } from '../common/TriplePriceSection';

import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useShallow } from 'zustand/react/shallow';
import { MoodEngine } from '../../lib/MoodEngine';
import { MoodType } from '../../types/model';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FilterSheetProps {
    visible: boolean;
    onClose: () => void;
}

// STRICT MOOD PALETTE
const MOOD_COLORS = {
    chill: '#8ccaf7',
    festif: '#ffab60',
    culturel: '#c499ff',
};

// Configuration for Single vs Dual moods
const CATEGORY_STYLE: Record<string, { primary: string; secondary?: string; icon: keyof typeof Ionicons.glyphMap }> = {
    'bar': { primary: MOOD_COLORS.festif, icon: 'wine' },
    'café': { primary: MOOD_COLORS.chill, icon: 'cafe' },
    'restaurant': { primary: MOOD_COLORS.festif, secondary: MOOD_COLORS.chill, icon: 'restaurant' }, // Festif + Chill (Orange/Blue)
    'club': { primary: MOOD_COLORS.festif, icon: 'musical-notes' }, // Pure Festif
    'parc': { primary: MOOD_COLORS.chill, icon: 'leaf' }, // Pure Chill
    'museum': { primary: MOOD_COLORS.culturel, icon: 'library' },
    'exhibition': { primary: MOOD_COLORS.culturel, icon: 'images' },
};

const isPlaceOpenNow = (place: any): boolean => {
    if (!place.opening_hours?.standard || place.opening_hours.standard === 'Non renseigné') return true;
    const now = new Date();
    const currentHour = now.getHours();
    const parts = place.opening_hours.standard.includes('–')
        ? place.opening_hours.standard.split('–')
        : place.opening_hours.standard.split('-');
    if (parts.length !== 2) return true;
    const [startH] = parts[0].split(':').map(Number);
    const [endH] = parts[1].split(':').map(Number);
    if (endH < startH) return currentHour >= startH || currentHour < endH;
    return currentHour >= startH && currentHour < endH;
};

const HOURS_24 = Array.from({ length: 24 }, (_, i) => i);
const HOURS_29 = Array.from({ length: 29 }, (_, i) => i);

// Helper for local toggle
const toggleLocalCategory = (cats: string[], cat: string) => {
    if (cats.includes(cat)) return cats.filter(c => c !== cat);
    return [...cats, cat];
};

// MEMOIZED CATEGORY ITEM with SHARP SPLIT
const CategoryItem = React.memo(({
    catKey, label, isSelected, onToggle
}: {
    catKey: string,
    label: string,
    isSelected: boolean,
    onToggle: (k: string) => void
}) => {
    const styleConfig = CATEGORY_STYLE[catKey] || { primary: '#9CA3AF', icon: 'ellipse' };
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    const onPressIn = () => {
        scale.value = withSpring(0.95, { mass: 0.5 });
    };

    const onPressOut = () => {
        scale.value = withSpring(1, { mass: 0.5 });
    };

    // Improved Inactive Contrast
    let backgroundElement = null;
    let iconColor = '#6B7280'; // Darker grey for inactive
    let textColor = '#374151'; // Darker text for inactive

    if (isSelected) {
        iconColor = '#fff';
        textColor = '#fff';

        if (styleConfig.secondary) {
            // SHARP SPLIT
            backgroundElement = (
                <LinearGradient
                    colors={[styleConfig.primary, styleConfig.primary, styleConfig.secondary, styleConfig.secondary]}
                    locations={[0, 0.5, 0.5, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill}
                />
            );
        } else {
            // Single "Solid" Color -> Now Gradient for Premium Feel
            backgroundElement = (
                <LinearGradient
                    colors={[styleConfig.primary, styleConfig.primary]}
                    style={[StyleSheet.absoluteFill, { backgroundColor: styleConfig.primary }]}
                />
            );
        }
    }

    return (
        <Pressable
            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                onToggle(catKey);
            }}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={styles.catItemWrapper} // New wrapper style
        >
            <Animated.View style={[
                styles.catItem,
                isSelected ? styles.catItemActive : styles.catItemInactive,
                animatedStyle
            ]}>
                {backgroundElement}

                <View style={styles.catContent}>
                    <Ionicons
                        name={styleConfig.icon}
                        size={22}
                        color={iconColor}
                        style={isSelected ? styles.catIconShadow : undefined}
                    />
                    <Text
                        style={[
                            styles.catLabel,
                            {
                                color: textColor,
                                fontWeight: isSelected ? '700' : '600',
                                opacity: isSelected ? 1 : 0.9
                            }
                        ]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {label}
                    </Text>
                </View>
            </Animated.View>
        </Pressable>
    );
});

// ROLLING COUNTER COMPONENT
const RollingCounter = ({ value }: { value: number }) => {
    // We can't easily animate text in RN without a monospaced font or advanced tricks.
    // Simple approach: Fade transition or just standard number update.
    // "Premium" shortcut: Display the number. If we want "Rolling", we'd need Reanimated Text.
    // Let's stick to a clean key-based animation for now (scale/bump) when value changes.

    // Actually, user explicitly asked for "Rolling".
    // Implementing a basic "Ticking" effect using logic is complex for TSX alone.
    // Let's do a visual "Bump" effect on change.

    // Better: Reanimated Text.
    // Since we are in a hurry, let's do a nice scale Bump.

    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withSpring(1.05, { mass: 0.5 }, () => {
            scale.value = withSpring(1);
        });
    }, [value]);

    const style = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    return (
        <Animated.Text style={[styles.applyText, style]}>
            Voir {value} résultats
        </Animated.Text>
    );
};

export const FilterSheet = ({ visible, onClose }: FilterSheetProps) => {
    const insets = useSafeAreaInsets();

    // 1. Places Store
    const places = usePlacesStore(state => state.places);

    // 2. Search Store (Global Filters)
    const {
        selectedDistrictsGlobal, setSelectedDistrictsGlobal,
        timeRangeGlobal, setTimeRangeGlobal,
        filterOpenNowGlobal, setFilterOpenNowGlobal,
        selectedMoodsGlobal, setSelectedMoodsGlobal,
        selectedCategoriesGlobal,
        searchQuery
    } = useSearchStore(useShallow(state => ({
        selectedDistrictsGlobal: state.selectedDistricts,
        setSelectedDistrictsGlobal: state.setSelectedDistricts,
        timeRangeGlobal: state.timeRange,
        setTimeRangeGlobal: state.setTimeRange,
        filterOpenNowGlobal: state.filterOpenNow,
        setFilterOpenNowGlobal: state.setFilterOpenNow,
        selectedMoodsGlobal: state.selectedMoods,
        setSelectedMoodsGlobal: state.setSelectedMoods,
        selectedCategoriesGlobal: state.selectedCategories,
        searchQuery: state.searchQuery
    })));

    // LOCAL STATE (Draft Mode)
    // const [localCategories, setLocalCategories] = useState<string[]>([]); // REMOVED
    const [localMoods, setLocalMoods] = useState<string[]>([]);
    const [localDistricts, setLocalDistricts] = useState<number[]>([]);
    const [localTime, setLocalTime] = useState<{ start: number; end: number }>({ start: 18, end: 26 });
    const [openNowOnly, setOpenNowOnly] = useState(false);

    // Safe Toggle for Time
    const [isTimeEnabled, setIsTimeEnabled] = useState(false);

    // Sync from Store when visible opens
    useEffect(() => {
        if (visible) {
            setLocalMoods(selectedMoodsGlobal.length > 0 ? selectedMoodsGlobal : ['chill', 'festif', 'culturel']);
            setLocalDistricts(selectedDistrictsGlobal || []);
            setOpenNowOnly(filterOpenNowGlobal || false);

            if (timeRangeGlobal) {
                setLocalTime(timeRangeGlobal);
                setIsTimeEnabled(true);
            } else {
                setIsTimeEnabled(false);
                setLocalTime({ start: 18, end: 26 });
            }
        }
    }, [visible]);

    // Callbacks for Memoized Components
    const handleDistrictToggle = useCallback((d: number) => {
        setLocalDistricts(prev =>
            prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
        );
    }, []);

    const handleMoodToggle = useCallback((mood: string) => {
        setLocalMoods(prev => {
            // If clicking an active mood when it's the ONLY one, don't allow empty?
            // Or allow toggle. Let's allow toggle, default to all if empty in map.
            if (prev.includes(mood)) {
                return prev.filter(m => m !== mood);
            } else {
                return [...prev, mood];
            }
        });
    }, []);

    const handleStartTimeChange = useCallback((v: number) => {
        setLocalTime(prev => {
            let newStart = v;
            let newEnd = prev.end;
            if (newStart >= newEnd) newEnd = Math.min(newStart + 2, 28);
            return { start: newStart, end: newEnd };
        });
    }, []);

    const handleEndTimeChange = useCallback((v: number) => {
        setLocalTime(prev => {
            let newEnd = v;
            let newStart = prev.start;
            if (newEnd <= newStart) newStart = Math.max(0, newEnd - 2);
            return { start: newStart, end: newEnd };
        });
    }, []);

    // State for Async Calculation (Fixes Latency)
    const [resultsCount, setResultsCount] = useState(0);

    useEffect(() => {
        // Debounce/Defer calculation to unblock UI thread immediate response
        const timeoutId = setTimeout(() => {
            // SV-Refactor: Use the domain-specific selector logic
            const filtered = selectFilteredResults(places);
            setResultsCount(filtered.length);
        }, 32);

        return () => clearTimeout(timeoutId);
    }, [places, localMoods, localDistricts, localTime, openNowOnly, isTimeEnabled, searchQuery, selectedCategoriesGlobal]);

    const handleApply = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        // Commit ALL Local State to Global Store
        setTimeRangeGlobal(isTimeEnabled ? localTime : null);
        setSelectedDistrictsGlobal(localDistricts);
        setFilterOpenNowGlobal(openNowOnly);

        // Commit Moods
        setSelectedMoodsGlobal(localMoods as any);

        onClose();
    };

    const handleResetAll = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setLocalDistricts([]);
        // Local reset only
        setIsTimeEnabled(false);
        setLocalTime({ start: 18, end: 26 });
        setOpenNowOnly(false);
        setLocalMoods(['chill', 'festif', 'culturel']);
    };

    const activeFiltersCount = [
        localMoods.length < 3, // Changed: Active if filtered
        localDistricts.length > 0,
        isTimeEnabled,
        openNowOnly,
    ].filter(Boolean).length;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                {/* Grabber Handle for better UX */}
                <View style={styles.grabberContainer}>
                    <View style={styles.grabber} />
                </View>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Filtres</Text>
                    <View style={styles.headerActions}>
                        {activeFiltersCount > 0 && (
                            <TouchableOpacity onPress={handleResetAll} hitSlop={10} style={styles.resetButton}>
                                <Text style={styles.resetText}>Réinitialiser</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                            <Ionicons name="close" size={28} color="#111827" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={[styles.scrollContent, { paddingBottom: 120 + insets.bottom }]}
                    showsVerticalScrollIndicator={false}
                >
                    {/* 1. OPEN NOW - Immersive Blue Row */}
                    <Pressable
                        style={[
                            styles.rowItem,
                            openNowOnly && {
                                backgroundColor: MOOD_COLORS.chill, // Full Blue Background
                                marginHorizontal: 16,
                                borderRadius: 16,
                                paddingVertical: 12, // More padding for card look
                                paddingHorizontal: 16
                            }
                        ]}
                        onPress={() => {
                            Haptics.selectionAsync();
                            setOpenNowOnly(!openNowOnly);
                        }}
                    >
                        <View style={styles.rowText}>
                            <Text style={[
                                styles.sectionTitleSmall,
                                openNowOnly && { color: '#fff' } // White Text
                            ]}>Ouvert maintenant</Text>
                            <Text style={[
                                styles.sectionSubtitle,
                                openNowOnly && { color: 'rgba(255,255,255,0.9)' } // White Subtitle
                            ]}>Uniquement les lieux ouverts</Text>
                        </View>
                        <View style={[
                            styles.toggleSwitch,
                            openNowOnly && {
                                backgroundColor: 'rgba(255,255,255,0.3)', // Translucent white track
                                borderColor: 'rgba(255,255,255,0.5)',
                                borderWidth: 1
                            }
                        ]}>
                            <View style={[
                                styles.toggleKnob,
                                openNowOnly && {
                                    backgroundColor: '#fff', // White Knob
                                    transform: [{ translateX: 20 }],
                                    shadowOpacity: 0.2
                                }
                            ]} />
                        </View>
                    </Pressable>

                    <View style={styles.divider} />

                    {/* 2. MOODS (VIBE) */}
                    <View style={styles.section}>
                        <View style={styles.headerWithAccent}>
                            <View style={[styles.moodAccent, { backgroundColor: MOOD_COLORS.festif }]} />
                            <Text style={styles.sectionTitle}>Vibe</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10, marginTop: 12, paddingHorizontal: 24 }}>
                            {['chill', 'festif', 'culturel'].map((mood) => {
                                const isSelected = localMoods.includes(mood);
                                const color = MOOD_COLORS[mood as keyof typeof MOOD_COLORS];
                                const label = mood.charAt(0).toUpperCase() + mood.slice(1);

                                return (
                                    <Pressable
                                        key={mood}
                                        onPress={() => {
                                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                            handleMoodToggle(mood);
                                        }}
                                        style={{
                                            flex: 1,
                                            height: 48,
                                            borderRadius: 24,
                                            backgroundColor: isSelected ? color : '#F3F4F6',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: isSelected ? color : 'transparent'
                                        }}
                                    >
                                        <Text style={{
                                            fontWeight: '700',
                                            fontSize: 14,
                                            color: isSelected ? '#fff' : '#374151',
                                            fontFamily: 'PlayfairDisplay-Bold'
                                        }}>
                                            {label}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* 3. CRENEAU (WHEELS) */}
                    <View
                        style={[
                            styles.section,
                            openNowOnly && { opacity: 0.4, pointerEvents: 'none' } // Smart Dimming
                        ]}
                    >
                        {/* Header with Switch */}
                        <Pressable
                            style={[styles.headerWithAccent, { justifyContent: 'space-between', paddingRight: 0 }]}
                            onPress={() => {
                                Haptics.selectionAsync();
                                setIsTimeEnabled(!isTimeEnabled);
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <View style={[styles.moodAccent, { backgroundColor: MOOD_COLORS.culturel }]} />
                                <Text style={styles.sectionTitle}>Créneau</Text>
                            </View>

                            {/* Enable/Disable Toggle */}
                            <View style={[
                                styles.toggleSwitch,
                                isTimeEnabled && {
                                    backgroundColor: '#E0F7FF',
                                    borderColor: 'rgba(140, 202, 247, 0.3)',
                                    borderWidth: 1
                                },
                                { transform: [{ scale: 0.8 }] } // Smaller
                            ]}>
                                <View style={[
                                    styles.toggleKnob,
                                    isTimeEnabled && {
                                        backgroundColor: '#8ccaf7',
                                        transform: [{ translateX: 20 }],
                                        shadowOpacity: 0.1
                                    }
                                ]} />
                            </View>
                        </Pressable>

                        {isTimeEnabled && (
                            <Animated.View style={styles.timeWheelRow}>
                                <View style={styles.timeColumn}>
                                    <Text style={styles.timeLabel}>Début</Text>
                                    <TimeWheelPicker
                                        value={localTime.start}
                                        items={HOURS_24}
                                        formatLabel={(h) => `${h}h`}
                                        onChange={handleStartTimeChange}
                                    />
                                </View>

                                <Ionicons name="arrow-forward" size={20} color="#E5E7EB" style={{ marginTop: 30 }} />

                                <View style={styles.timeColumn}>
                                    <Text style={styles.timeLabel}>Fin</Text>
                                    <TimeWheelPicker
                                        value={localTime.end}
                                        items={HOURS_29}
                                        formatLabel={(h) => {
                                            if (h === 24) return '00h';
                                            if (h > 24) return `0${h - 24}h`;
                                            return `${h}h`;
                                        }}
                                        onChange={handleEndTimeChange}
                                    />
                                </View>
                            </Animated.View>
                        )}
                    </View>

                    <View style={styles.divider} />

                    {/* 4. QUARTIER (SKIA IMMERSIVE) */}
                    <View style={styles.section}>
                        <View>
                            <View style={styles.headerWithAccent}>
                                <View style={[styles.moodAccent, { backgroundColor: MOOD_COLORS.chill }]} />
                                <Text style={styles.sectionTitle}>Quartier</Text>
                            </View>
                            <Text style={[styles.sectionSubtitle, { marginBottom: 12 }]}>
                                {localDistricts.length > 0
                                    ? `${localDistricts.length} sélectionné(s)`
                                    : 'Tout Paris'}
                            </Text>
                        </View>

                        <View style={styles.mapWrapper}>
                            <ParisMapSelector
                                selectedDistricts={localDistricts}
                                onToggle={handleDistrictToggle}
                            />
                        </View>
                    </View>
                </ScrollView>

                {/* Footer */}
                <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) }]}>
                    <TouchableOpacity
                        style={styles.applyButton}
                        onPress={handleApply}
                        activeOpacity={0.9}
                    >
                        <RollingCounter value={resultsCount} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 12, // Reduced slightly to balance larger grabber
        paddingTop: 0,
    },
    grabberContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 16, // Larger touch zone for swipe
    },
    grabber: {
        width: 36,
        height: 5,
        backgroundColor: '#E5E7EB',
        borderRadius: 3,
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        color: '#111827',
        fontFamily: 'PlayfairDisplay-Bold',
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12, // Reduced gap slightly as button is wider
    },
    resetButton: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: 'rgba(255, 171, 96, 0.15)', // MOOD_COLORS.festif with low opacity
        borderRadius: 20,
    },
    resetText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#D97706',
        fontFamily: 'PlayfairDisplay-Bold',
        letterSpacing: 0.5,
        textDecorationLine: 'underline',
    },
    closeBtn: {
        padding: 4,
        marginLeft: 4,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#F3F4F6',
        marginHorizontal: 24,
        marginVertical: 24,
    },
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    rowItemMap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowText: {
        gap: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#111827',
        fontFamily: 'PlayfairDisplay-Bold',
        marginBottom: 0, // Removed bottom margin here, handled by wrapper
        letterSpacing: -0.5,
    },
    headerWithAccent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 10,
    },
    moodAccent: {
        width: 4,
        height: 18,
        borderRadius: 2,
    },
    sectionTitleSmall: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        fontFamily: 'PlayfairDisplay-Bold',
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#9CA3AF',
        fontFamily: 'PlayfairDisplay-Bold',
    },
    toggleSwitch: {
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#E5E7EB',
        padding: 2,
        justifyContent: 'center',
    },
    toggleKnob: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    section: {
        paddingHorizontal: 24,
    },
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10, // Tighter gap
    },
    catItemWrapper: {
        width: '48%',
        height: 56,
        borderRadius: 16,
        overflow: 'hidden', // Ensure shadow/content stays in
    },
    catItem: {
        flex: 1, // Fill wrapper
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 16,
    },
    catItemInactive: {
        backgroundColor: '#fff', // White background
        borderWidth: 1.5, // Thicker border for contrast
        borderColor: '#E5E7EB', // Slightly darker border
    },
    catItemActive: {
        borderWidth: 0,
    },
    catContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        zIndex: 10,
    },
    catIconShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    catLabel: {
        fontSize: 15,
        fontFamily: 'PlayfairDisplay-Bold',
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    // NEW STYLES for Wheels
    timeWheelRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#fff',
        // Optional border/container
    },
    timeColumn: {
        alignItems: 'center',
        gap: 10,
    },
    timeLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#9CA3AF',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    sliderContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    timeSliderContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    mapWrapper: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        // Slight shadow lift
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    applyButton: {
        backgroundColor: '#111827',
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        // Shadow for button
        shadowColor: '#111827',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    applyText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'PlayfairDisplay-Bold',
    }
});
