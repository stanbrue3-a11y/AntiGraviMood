import React from 'react';
import { Pressable, Animated, PressableProps, StyleProp, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';

interface ScalePressableProps extends PressableProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    scaleTo?: number; // Default 0.95
    haptic?: boolean; // Default true
}

export const ScalePressable: React.FC<ScalePressableProps> = ({
    children,
    style,
    scaleTo = 0.96,
    haptic = true,
    onPress,
    ...props
}) => {
    const scaleValue = React.useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: scaleTo,
            useNativeDriver: true,
            speed: 50, // Fast compression
            bounciness: 0,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
            speed: 20, // Snappy release
            bounciness: 6, // Subtle rubber band effect
        }).start();
    };

    const handlePress = (e: any) => {
        if (haptic) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress && onPress(e);
    };

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            style={style}
            {...props}
        >
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                {children}
            </Animated.View>
        </Pressable>
    );
};
