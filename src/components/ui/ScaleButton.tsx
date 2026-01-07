import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ScaleButton = ({ onPress, style, children, disabled }: { onPress: () => void, style?: any, children: React.ReactNode, disabled?: boolean }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: withSpring(disabled ? 0.5 : 1)
    }));

    const handlePressIn = () => {
        if (disabled) return;
        scale.value = withSpring(0.95, { damping: 10, stiffness: 300 });
    };

    const handlePressOut = () => {
        if (disabled) return;
        scale.value = withSpring(1, { damping: 10, stiffness: 300 });
    };

    return (
        <AnimatedPressable
            onPress={disabled ? undefined : onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={disabled}
            style={[style, animatedStyle]}
        >
            {children}
        </AnimatedPressable>
    );
};
