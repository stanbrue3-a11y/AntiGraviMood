
import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { useTheme } from '../../src/design';
import { AnimatedTabBar } from '../../src/components/navigation/AnimatedTabBar';
import { Place } from '../../src/types/model';
// Configuration "Culturel & Épuré"
const TABS = [
    { name: 'map', title: 'Carte', icon: 'map-outline' as const, iconFilled: 'map' as const },
    { name: 'discover', title: 'Découvrir', icon: 'compass-outline' as const, iconFilled: 'compass' as const },
    { name: 'feed', title: 'Moments', icon: 'images-outline' as const, iconFilled: 'images' as const }, // Moments partagés
    { name: 'profile', title: 'Profil', icon: 'person-outline' as const, iconFilled: 'person' as const },
];

export default function TabLayout() {
    const { theme, isDark } = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarBackground: undefined,
                tabBarStyle: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    position: 'absolute',
                    borderTopWidth: 0,
                },
                lazy: false, // Pre-load all tabs for instant switching
            }}
            // @ts-ignore - Required to fix "half screen" bug on some devices
            sceneContainerStyle={{ flex: 1, backgroundColor: '#000' }}
            tabBar={(props) => <AnimatedTabBar {...props} />}
        >
            {TABS.map(({ name, title }) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        title,
                        // If it's the map tab, hide header
                        headerShown: false
                    }}
                />
            ))}
        </Tabs>
    );
}


