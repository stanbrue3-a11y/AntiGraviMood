import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, Pressable, Platform, StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    interpolate,
    runOnJS,
    Extrapolation,
    withTiming,
    withDelay,
    cancelAnimation,
    FadeIn,
    FadeOut
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;

export interface MomentItem {
    id: string;
    imageUri: string;
    caption?: string;
    user?: {
        name: string;
        avatar?: string;
    };
    likes?: number;
}

interface MomentsSwipeViewerProps {
    isVisible: boolean;
    onClose: () => void;
    moments: MomentItem[];
    initialIndex: number;
    origin?: { x: number, y: number, width: number, height: number } | null;
}


const AnimatedExpoImage = Animated.createAnimatedComponent(Image);

const MomentCard = React.memo(({ moment, animatedStyle, isBackground = false }: { moment: MomentItem, animatedStyle: any, isBackground?: boolean }) => {
    return (
        <Animated.View style={[styles.cardContainer, animatedStyle]}>
            <View style={{ flex: 1, overflow: 'hidden', borderRadius: 0 }}>
                <AnimatedExpoImage
                    source={{ uri: moment.imageUri }}
                    style={[styles.cardImage]}
                    contentFit="cover"
                    cachePolicy="memory-disk"
                    transition={0}
                />
            </View>

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
                locations={[0, 0.6, 1]}
                style={styles.gradient}
            >
                <View style={styles.metaContainer}>
                    <View style={styles.userInfo}>
                        <View style={styles.avatar}>
                            <Ionicons name="person" size={12} color="#fff" />
                        </View>
                        <Text style={styles.userName}>{moment.user?.name || 'Utilisateur'}</Text>
                    </View>
                    {moment.caption && (
                        <Text style={styles.caption}>
                            {moment.caption}
                        </Text>
                    )}
                </View>
            </LinearGradient>

            {/* Darken if background */}
            {isBackground && <View style={styles.cardOverlay} />}
        </Animated.View>
    );
});


// Inner component that handles the logic and state - mounts only when visible
// Native FlatList for "Standard & Robust" Fluidity
const GalleryPager = ({ moments, initialIndex, onClose, origin }: { moments: MomentItem[], initialIndex: number, onClose: () => void, origin?: { x: number, y: number, width: number, height: number } | null }) => {
    // Focus Mode
    useEffect(() => {
        if (Platform.OS === 'ios') StatusBar.setHidden(true, 'fade');
        return () => { if (Platform.OS === 'ios') StatusBar.setHidden(false, 'fade'); };
    }, []);

    const flatListRef = React.useRef<Animated.FlatList<MomentItem>>(null);

    // Pull to Dismiss Shared Values
    const translateY = useSharedValue(0);
    const bgOpacity = useSharedValue(0); // Start at 0 for shared element fade-in
    const scale = useSharedValue(1);

    // Shared Element Transition Values
    const sharedX = useSharedValue(origin ? origin.x : 0);
    const sharedY = useSharedValue(origin ? origin.y : 0);
    const sharedWidth = useSharedValue(origin ? origin.width : width);
    const sharedHeight = useSharedValue(origin ? origin.height : height);
    const sharedRadius = useSharedValue(origin ? 12 : 0);

    const isSharedTransitionActive = useSharedValue(origin ? 1 : 0);

    useEffect(() => {
        if (origin) {
            // Animate to Fullscreen
            sharedX.value = withSpring(0, { damping: 14, stiffness: 100 });
            sharedY.value = withSpring(0, { damping: 14, stiffness: 100 });
            sharedWidth.value = withSpring(width, { damping: 14, stiffness: 100 });
            sharedHeight.value = withSpring(height, { damping: 14, stiffness: 100 });
            sharedRadius.value = withSpring(0, { damping: 14, stiffness: 100 });

            // Fade in background (backdrop)
            bgOpacity.value = withTiming(1, { duration: 300 });

            // After animation, disable shared transition layer to reveal FlatList
            setTimeout(() => {
                isSharedTransitionActive.value = 0;
            }, 400);
        } else {
            bgOpacity.value = withTiming(1, { duration: 200 });
        }
    }, []);

    const renderItem = useCallback(({ item }: { item: MomentItem }) => {
        return (
            <View style={{ width, height }}>
                <MomentCard
                    moment={item}
                    animatedStyle={{ flex: 1 }}
                />
            </View>
        );
    }, []);

    const getItemLayout = useCallback((_: any, index: number) => ({
        length: width,
        offset: width * index,
        index,
    }), []);

    // Vertical Gesture for Dismissal
    const panGesture = Gesture.Pan()
        .activeOffsetY([-10, 10])
        .failOffsetX([-10, 10])
        .onUpdate((e) => {
            if (isSharedTransitionActive.value === 1) return; // Block gesture during entry

            translateY.value = e.translationY;
            const progress = Math.abs(e.translationY) / height;
            scale.value = interpolate(progress, [0, 1], [1, 0.5], Extrapolation.CLAMP);
            bgOpacity.value = interpolate(progress, [0, 0.5], [1, 0], Extrapolation.CLAMP);
        })
        .onEnd((e) => {
            if (isSharedTransitionActive.value === 1) return;

            if (Math.abs(e.translationY) > 150 || Math.abs(e.velocityY) > 800) {
                runOnJS(onClose)();
            } else {
                translateY.value = withSpring(0, { damping: 15, stiffness: 200 });
                scale.value = withSpring(1, { damping: 15, stiffness: 200 });
                bgOpacity.value = withSpring(1, { damping: 15, stiffness: 200 });
            }
        });

    const animatedContainerStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: translateY.value },
            { scale: scale.value }
        ],
        borderRadius: interpolate(scale.value, [1, 0.85], [0, 20], Extrapolation.CLAMP),
        overflow: 'hidden',
        opacity: isSharedTransitionActive.value ? 0 : 1 // Hide FlatList during transition
    }));

    // Interpolate overall background opacity
    const backdropStyle = useAnimatedStyle(() => ({
        opacity: bgOpacity.value
    }));

    // Shared Element Style
    const sharedElementStyle = useAnimatedStyle(() => ({
        position: 'absolute',
        top: sharedY.value,
        left: sharedX.value,
        width: sharedWidth.value,
        height: sharedHeight.value,
        borderRadius: sharedRadius.value,
        zIndex: 999,
        overflow: 'hidden',
        opacity: isSharedTransitionActive.value // Only visible during transition
    }));

    // Initial Active Moment for Transition
    const activeMoment = moments[initialIndex];

    return (
        <GestureHandlerRootView style={styles.content}>
            {/* Dynamic Background Backdrop */}
            <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: '#000' }, backdropStyle]} />

            {/* SHARED ELEMENT LAYER */}
            {origin && activeMoment && (
                <Animated.View style={sharedElementStyle} pointerEvents="none">
                    <Image
                        source={{ uri: activeMoment.imageUri }}
                        style={{ width: '100%', height: '100%' }}
                        contentFit="cover"
                    />
                </Animated.View>
            )}

            <GestureDetector gesture={panGesture}>
                <Animated.View style={[styles.content, animatedContainerStyle]}>
                    <Animated.FlatList
                        ref={flatListRef}
                        data={moments}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        initialScrollIndex={initialIndex}
                        getItemLayout={getItemLayout}
                        maxToRenderPerBatch={3}
                        windowSize={5}
                        removeClippedSubviews={Platform.OS === 'android'}
                    // Ensure FlatList doesn't capture vertical gestures eagerly if we want to support pulling?
                    // Actually Native FlatList handles horizontal, Pan handles vertical. 
                    // failOffsetX on Pan is crucial.
                    />
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
};

// Main Component Wrapper
export const MomentsSwipeViewer = ({ isVisible, onClose, moments, initialIndex, origin }: MomentsSwipeViewerProps) => {
    const insets = useSafeAreaInsets();

    if (!isVisible) return null;

    return (
        <Modal visible={isVisible} transparent animationType="none" onRequestClose={onClose}>
            <Animated.View style={styles.container} entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>

                <Pressable
                    style={[styles.closeBtn, { top: insets.top + 10 }]}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        onClose();
                    }}
                    hitSlop={20}
                >
                    <Ionicons name="close" size={28} color="#fff" />
                </Pressable>

                {/* Only render Logic when visible to force fresh state init */}
                <GalleryPager
                    moments={moments}
                    initialIndex={initialIndex}
                    onClose={onClose}
                    origin={origin}
                />
            </Animated.View>
        </Modal>
    );
};

// Required for Animated.Image
Animated.addWhitelistedNativeProps({ contentFit: true });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        right: 20,
        zIndex: 50,
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)'
    },
    content: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: width,
        height: height,
        position: 'absolute',
        backgroundColor: '#000',
        borderRadius: 0,
        // Removed heavy shadows for performance since background is black anyway
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 280,
        justifyContent: 'flex-end',
        padding: 24,
        paddingBottom: 56,
    },
    metaContainer: {
        gap: 12,
        // Removed unnecessary transform
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.8)',
    },
    userName: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        fontFamily: 'PlayfairDisplay-Bold',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
        letterSpacing: 0.3,
    },
    caption: {
        color: 'rgba(255,255,255,0.95)',
        fontSize: 17,
        lineHeight: 23,
        fontWeight: '500',
        textShadowColor: 'rgba(0,0,0,0.7)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
        fontFamily: Platform.select({ ios: 'System', android: 'sans-serif-medium' }), // Clean sans for body
    },
});
