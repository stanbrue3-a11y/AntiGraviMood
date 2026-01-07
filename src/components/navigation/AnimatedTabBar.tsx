import React, { memo, useMemo } from 'react';
import { View, Pressable, StyleSheet, Text, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../design';
import * as Haptics from 'expo-haptics';

// Configuration duplicate from _layout 
const TAB_ICONS: Record<string, { icon: keyof typeof Ionicons.glyphMap; iconFilled: keyof typeof Ionicons.glyphMap; label: string }> = {
    'map': { icon: 'map-outline', iconFilled: 'map', label: 'Carte' },
    'discover': { icon: 'compass-outline', iconFilled: 'compass', label: 'Découvrir' },
    'feed': { icon: 'images-outline', iconFilled: 'images', label: 'Moments' },
    'profile': { icon: 'person-outline', iconFilled: 'person', label: 'Profil' },
};

// Mood Palette for Random Active Color
const MOOD_PALETTE = ['#8ccaf7', '#ffab60', '#c499ff']; // Chill (Blue), Festif (Orange), Culturel (Violet)

// Create animated component ONCE outside render (performance optimization)
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

export function AnimatedTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    const { isDark } = useTheme();

    return (
        <BlurView
            intensity={60}
            tint="dark"
            style={styles.absoluteContainer}
        >
            <View style={[styles.container, { paddingBottom: insets.bottom > 0 ? insets.bottom : 20 }]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const tabConfig = TAB_ICONS[route.name] || { icon: 'help', iconFilled: 'help', label: route.name };

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <View
                            key={route.key}
                            style={{ flex: 1 }}
                        >
                            <TabItem
                                isFocused={isFocused}
                                icon={isFocused ? tabConfig.iconFilled : tabConfig.icon}
                                label={tabConfig.label}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                isDark={isDark}
                            />
                        </View>
                    );
                })}
            </View>
        </BlurView>
    );
}

// Memoized TabItem to prevent re-renders
const TabItem = memo(({ isFocused, icon, label, onPress, onLongPress, isDark }: any) => {
    // Generate a random color only when focused changes to true
    const randomColor = useMemo(() => MOOD_PALETTE[Math.floor(Math.random() * MOOD_PALETTE.length)], [isFocused]);

    const animatedStyle = useAnimatedStyle(() => {
        const scale = isFocused ? 1.1 : 1;
        return {
            transform: [{ scale: withSpring(scale, { damping: 15 }) }],
        };
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
            hitSlop={10}
        >
            <Animated.View style={[styles.iconContainer, animatedStyle]}>
                <AnimatedIcon
                    name={icon}
                    size={28}
                    color={isFocused ? randomColor : 'rgba(255,255,255,0.5)'}
                    style={{ opacity: isFocused ? 1 : 0.6 }}
                />
                {/* Micro-dot for active state */}
                {isFocused && <View style={[styles.activeDot, { backgroundColor: randomColor }]} />}
            </Animated.View>

            <Text style={[styles.label, { color: isFocused ? randomColor : 'rgba(255,255,255,0.5)' }]}>
                {isFocused ? label : ''}
            </Text>
        </Pressable>
    );
});

const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 10,
    },
    container: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 10,
        fontWeight: '600',
        marginTop: 4,
    },
    activeDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        marginTop: 4,
        position: 'absolute',
        bottom: -8,
    }
});
