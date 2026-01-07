import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, Layout, FadeIn } from 'react-native-reanimated';
import { useTheme } from '../../design';
import { ScaleButton } from '../ui/ScaleButton';

interface StickyTabsProps {
    tabs: string[];
    activeTab: string;
    onTabPress: (tab: string) => void;
}

export function StickyTabs({ tabs, activeTab, onTabPress }: StickyTabsProps) {
    const { theme, isDark } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: isDark ? 'rgba(10,10,15,0.95)' : 'rgba(255,255,255,0.95)' }]}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                    <ScaleButton
                        key={tab}
                        onPress={() => onTabPress(tab)}
                        style={styles.tab}
                    >
                        <Text style={[
                            styles.tabText,
                            { color: isActive ? theme.text.primary : theme.text.muted, opacity: isActive ? 1 : 0.6 }
                        ]}>
                            {tab.toUpperCase()}
                        </Text>
                        {isActive && (
                            <Animated.View
                                layout={Layout}
                                entering={FadeIn}
                                style={[styles.indicator, { backgroundColor: theme.text.primary }]}
                            />
                        )}
                    </ScaleButton>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(150,150,150,0.2)',
        gap: 24,
        zIndex: 100
    },
    tab: {
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    tabText: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1.2,
    },
    indicator: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 2,
        borderRadius: 1
    }
});
