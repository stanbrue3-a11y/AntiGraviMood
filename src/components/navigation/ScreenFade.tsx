import React, { useEffect } from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withDelay } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

interface ScreenFadeProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    duration?: number;
    delay?: number;
}

/**
 * A wrapper component that fades in its children whenever the screen gains focus.
 * This softens the transition between tabs.
 */
export const ScreenFade = ({ children, style, duration = 300, delay = 0 }: ScreenFadeProps) => {
    const isFocused = useIsFocused();
    const opacity = useSharedValue(0);

    useEffect(() => {
        if (isFocused) {
            // Reset to 0 immediately then animate to 1
            opacity.value = 0;
            opacity.value = withDelay(delay, withTiming(1, { duration }));
        } else {
            // Should we fade out? 
            // Usually the screen is hidden instantly by the navigator, so fade out might not be visible 
            // or might cause issues if we return quickly.
            // Let's keep it at 1 so it doesn't flash empty if we swipe back or something (though tabs don't swipe).
            // Actually, resetting it to 0 here would mean next time it opens it starts at 0.
            // But we do the reset inside the 'if (isFocused)' block to be sure.
        }
    }, [isFocused, duration, delay]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <Animated.View style={[styles.container, style, animatedStyle]}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
