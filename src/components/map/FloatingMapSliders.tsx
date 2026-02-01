import React, { useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedProps,
    withSpring,
    runOnJS,
    FadeIn,
    FadeOut,
    withTiming,
    cancelAnimation,
    Easing
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../design';
import { useSearchStore } from '../../stores/searchStore';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Pro Dimensions
const TRACK_WIDTH = 12;
const THUMB_SIZE = 28;
const ICON_SIZE = 36;
const FAB_POS_BOTTOM = 120;
const FAB_SIZE = 48;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

// EZL ENGINE: The 60ms "Sweet Spot" 🍯
const useEZLEngine = () => {
    const lastUpdate = useRef(0);
    const timeout = useRef<any>(null);

    const update = (fn: () => void) => {
        const now = Date.now();
        if (now - lastUpdate.current > 60) {
            lastUpdate.current = now;
            fn();
        } else {
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
                lastUpdate.current = Date.now();
                fn();
            }, 60);
        }
    };
    return update;
};

interface SlimSliderProps {
    min: number;
    max: number;
    initialValue: number;
    onChange: (val: number) => void;
    color: string;
    icon: keyof typeof Ionicons.glyphMap;
    unit?: string;
    height: number;
    storeKey: 'pintLimit' | 'dishLimit' | 'coffeeLimit';
}

const StealthSlider: React.FC<SlimSliderProps> = ({ min, max, initialValue, onChange, color, icon, unit = '€', height, storeKey }) => {
    const { theme, isDark } = useTheme();
    const progress = useSharedValue((initialValue - min) / (max - min));
    const isPressed = useSharedValue(false);
    const uiSteppedValue = useSharedValue(initialValue); // UI Thread Truth for logic

    // For haptic debounce
    const lastHapticValue = useSharedValue(initialValue);

    // Refs for JS logic
    const lastCommittedValue = useRef(initialValue);
    const ezl = useEZLEngine();
    const isInteracting = useRef(false);
    const warmUpPrices = useSearchStore.getState().warmUpPrices;

    // JS-side helper to safely manage interaction state
    const setInteracting = (active: boolean) => {
        if (active) {
            isInteracting.current = true;
        } else {
            // Delay unlocking to absorb late store updates and prevent "echo" jumps
            setTimeout(() => {
                isInteracting.current = false;
            }, 300);
        }
    };

    // 1. ATOMIC SYNC: Subscribe to store WITHOUT re-rendering this component
    useEffect(() => {
        const unsubscribe = useSearchStore.subscribe((state: any) => {
            const val = state[storeKey];
            // Only update if we are NOT interacting and not in the "cooldown" period
            if (val !== null && !isInteracting.current) {
                const target = (val - min) / (max - min);
                cancelAnimation(progress);
                progress.value = withTiming(target, { duration: 300 });
                uiSteppedValue.value = val;
                lastCommittedValue.current = val;
            }
        });
        return unsubscribe;
    }, [storeKey, min, max]);

    // This runs on JS thread via runOnJS
    const handleValueChange = (newVal: number) => {
        if (newVal !== lastCommittedValue.current) {
            lastCommittedValue.current = newVal;
            // EZL Batching for Store/Map updates (expensive part)
            ezl(() => onChange(newVal));
        }
    };

    // Haptic trigger helper
    const triggerHaptic = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    const pan = Gesture.Pan()
        .onBegin(() => {
            runOnJS(setInteracting)(true);
            isPressed.value = true;
            cancelAnimation(progress);
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
            runOnJS(warmUpPrices)();
        })
        .onChange((e) => {
            const delta = -e.changeY / height;
            progress.value = Math.max(0, Math.min(1, progress.value + delta));

            const rawVal = min + progress.value * (max - min);
            const steppedVal = Math.round(rawVal * 2) / 2;

            // Check if value changed materially for haptic
            if (Math.abs(steppedVal - lastHapticValue.value) >= 0.5) {
                lastHapticValue.value = steppedVal;
                runOnJS(triggerHaptic)();
            }

            // Sync UI State
            uiSteppedValue.value = steppedVal;

            // Updates JS logic (debounced)
            runOnJS(handleValueChange)(steppedVal);
        })
        .onFinalize(() => {
            const finalValue = uiSteppedValue.value;
            // Immediate finalized sync
            runOnJS(onChange)(finalValue);
            isPressed.value = false;

            // IMMEDIATE VISUAL SNAP ⚡️
            const target = (finalValue - min) / (max - min);
            progress.value = withTiming(target, { duration: 200, easing: Easing.out(Easing.quad) });

            runOnJS(setInteracting)(false);
        });

    const thumbStyle = useAnimatedStyle(() => ({
        top: 0,
        transform: [
            { translateY: (1 - progress.value) * height - THUMB_SIZE / 2 },
            { scale: withSpring(isPressed.value ? 1.15 : 1) }
        ],
    }));

    const fillStyle = useAnimatedStyle(() => ({
        height: progress.value * height,
        backgroundColor: color,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    }));

    const tooltipStyle = useAnimatedStyle(() => ({
        top: 0,
        transform: [
            { translateY: (1 - progress.value) * height - 12 },
            { translateX: withSpring(isPressed.value ? 25 : 0) }
        ],
    }));

    // Animated Props for the Text Input (The "Bizarre" Lag Killer)
    // Updates text directly on UI thread frame-by-frame
    const animatedTextProps = useAnimatedProps(() => {
        return {
            text: `${uiSteppedValue.value.toFixed(1)}${unit}`,
        } as any;
    });

    return (
        <View style={styles.sliderCol}>
            <View style={styles.topLabelContainer}>
                <Text style={[styles.topLabelText, { color: color }]}>MAX</Text>
            </View>

            <View style={[styles.sliderWrapper, { height }]}>
                <Animated.View style={[styles.tooltip, tooltipStyle]} pointerEvents="none">
                    <View style={[styles.badge, { backgroundColor: color }]}>
                        <AnimatedTextInput
                            underlineColorAndroid="transparent"
                            editable={false}
                            value={`${initialValue.toFixed(1)}${unit}`}
                            style={[styles.badgeText]}
                            animatedProps={animatedTextProps}
                        />
                    </View>
                </Animated.View>

                <GestureDetector gesture={pan}>
                    <View style={[styles.trackTouchable, { height }]}>
                        <View style={[styles.trackBase, { height, backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }]}>
                            <BlurView intensity={isDark ? 50 : 30} tint={isDark ? "dark" : "light"} style={StyleSheet.absoluteFill} />
                            <Animated.View style={fillStyle} />
                        </View>
                        <Animated.View style={[styles.thumb, thumbStyle, { backgroundColor: theme.surface, borderColor: theme.surface }]} />
                    </View>
                </GestureDetector>
            </View>

            <View style={[styles.iconCircle, { borderColor: color + '40', backgroundColor: theme.surface }]}>
                <Ionicons name={icon} size={20} color={color} />
            </View>
        </View>
    );
};

// Use React.memo for stability
export const FloatingMapSliders = React.memo(() => {
    const insets = useSafeAreaInsets();

    const selectedCategories = useSearchStore(state => state.selectedCategories);
    const hasPintLimit = useSearchStore(state => state.pintLimit !== null);
    const hasDishLimit = useSearchStore(state => state.dishLimit !== null);
    const hasCoffeeLimit = useSearchStore(state => state.coffeeLimit !== null);

    const setPintLimit = useSearchStore.getState().setPintLimit;
    const setDishLimit = useSearchStore.getState().setDishLimit;
    const setCoffeeLimit = useSearchStore.getState().setCoffeeLimit;

    const activeSliders = useMemo(() => {
        // CHAMELEON LOGIC 🦎
        // Rule: Only ONE slider active at a time.
        // PURITY RULE: If we are in Global View (Multiple categories), show NO slider.
        if (selectedCategories.length > 1) return [];

        // Priority: Restaurant > Bar (Pint) > Café > Global (Future)

        // 1. RESTAURANT (Highest Priority - Dish Price is the biggest commitment)
        if (selectedCategories.includes('restaurant')) {
            return [{
                id: 'dish',
                label: 'Plat',
                icon: 'restaurant' as any,
                min: 10,
                max: 45,
                value: useSearchStore.getState().dishLimit ?? 20,
                onChange: setDishLimit,
                color: '#c499ff', // Purple for Resto
                storeKey: 'dishLimit'
            }];
        }

        // 2. BAR / CLUB (Pint Price)
        if (selectedCategories.includes('bar') || selectedCategories.includes('club') || selectedCategories.includes('pub')) {
            return [{
                id: 'pint',
                label: 'Pinte',
                icon: 'beer' as any,
                min: 3,
                max: 12,
                value: useSearchStore.getState().pintLimit ?? 7,
                onChange: setPintLimit,
                color: '#ffab60', // Orange for Beer
                storeKey: 'pintLimit'
            }];
        }

        // 3. CAFÉ (Coffee Price)
        if (selectedCategories.includes('café')) {
            return [{
                id: 'coffee',
                label: 'Café',
                icon: 'cafe' as any,
                min: 1,
                max: 7,
                value: useSearchStore.getState().coffeeLimit ?? 3.5,
                onChange: setCoffeeLimit,
                color: '#8ccaf7', // Blue for Coffee
                storeKey: 'coffeeLimit'
            }];
        }

        // 4. Default / Mixed / None -> Show nothing for now (Clean UI)
        return [];

    }, [selectedCategories, hasPintLimit, hasDishLimit, hasCoffeeLimit]);

    if (activeSliders.length === 0) return null;

    const topLimit = insets.top + 210;
    const bottomLimit = SCREEN_HEIGHT - (FAB_POS_BOTTOM + FAB_SIZE + 45);
    const bridgeHeight = bottomLimit - topLimit;
    const internalGap = bridgeHeight - (25 + 6 + ICON_SIZE + 6);

    return (
        <Animated.View
            entering={FadeIn.duration(400)}
            exiting={FadeOut.duration(300)}
            style={[styles.container, { top: topLimit }]}
            pointerEvents="box-none"
        >
            {activeSliders.map((s) => (
                <StealthSlider
                    key={s.id}
                    min={s.min}
                    max={s.max}
                    initialValue={s.value}
                    onChange={s.onChange}
                    color={s.color}
                    icon={s.icon}
                    height={internalGap}
                    storeKey={s.storeKey as 'pintLimit' | 'dishLimit' | 'coffeeLimit'}
                />
            ))}
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 10,
        zIndex: 95,
        flexDirection: 'row',
        gap: 16,
    },
    sliderCol: {
        alignItems: 'center',
        gap: 6,
    },
    topLabelContainer: {
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLabelText: {
        fontSize: 9,
        fontWeight: '900',
        letterSpacing: 2,
    },
    iconCircle: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1.5,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    sliderWrapper: {
        width: 44,
        alignItems: 'center',
    },
    trackTouchable: {
        width: 44,
        alignItems: 'center',
    },
    trackBase: {
        width: TRACK_WIDTH,
        borderRadius: TRACK_WIDTH / 2,
        backgroundColor: 'rgba(255,255,255,0.4)',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    thumb: {
        position: 'absolute',
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
        borderWidth: 2,
        borderColor: '#fff',
    },
    tooltip: {
        position: 'absolute',
        left: 35,
        width: 50,
        height: 24,
        zIndex: 10,
    },
    badge: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '900',
        fontVariant: ['tabular-nums'],
        textAlign: 'center', // Ensure text input centers
        padding: 0, // Reset padding
    },
});
