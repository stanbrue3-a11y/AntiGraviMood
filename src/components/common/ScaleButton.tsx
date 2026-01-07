import React from 'react';
import { Pressable, StyleProp, ViewStyle, PressableProps } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    WithSpringConfig
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ScaleButtonProps extends PressableProps {
    scaleTo?: number;
    springConfig?: WithSpringConfig;
    style?: StyleProp<ViewStyle>;
    haptic?: boolean;
}

export const ScaleButton = ({
    children,
    style,
    scaleTo = 0.95,
    springConfig = { damping: 10, stiffness: 300 },
    haptic = true,
    onPress,
    ...props
}: ScaleButtonProps) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    const onPressIn = () => {
        scale.value = withSpring(scaleTo, springConfig);
        if (haptic) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    const onPressOut = () => {
        scale.value = withSpring(1, springConfig);
    };

    return (
        <AnimatedPressable
            {...props}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={[style, animatedStyle]}
        >
            {children}
        </AnimatedPressable>
    );
};
