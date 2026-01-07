
import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../src/design';
import { AnimatedTabBar } from '../../src/components/navigation/AnimatedTabBar';


// Configuration "Culturel & Épuré"
const TABS = [
    { name: 'map', title: 'Carte', icon: 'map-outline' as const, iconFilled: 'map' as const },
    { name: 'discover', title: 'Découvrir', icon: 'compass-outline' as const, iconFilled: 'compass' as const },
    { name: 'feed', title: 'Moments', icon: 'images-outline' as const, iconFilled: 'images' as const }, // Moments partagés
    { name: 'profile', title: 'Profil', icon: 'person-outline' as const, iconFilled: 'person' as const },
];

import { useEffect } from 'react';
import { usePlacesStore } from '../../src/stores/usePlacesStore';
import { Place } from '../../src/types/model';
import poisData from '../../src/data/pois.json';

// Couleurs des Moods pour l'aléatoire
const MOOD_COLORS = ['#54a0ff', '#FF9F43', '#9c88ff']; // Bleu, Orange, Violet

export default function TabLayout() {
    const { theme, isDark } = useTheme();
    const setPlaces = usePlacesStore(state => state.setPlaces);

    useEffect(() => {
        console.log('[TabLayout] Hydrating store with legacy pois.json data...');
        if (poisData && poisData[0]) {
            console.log('[TabLayout] First POI Hours:', JSON.stringify(poisData[0].opening_hours, null, 2));
            setPlaces(poisData as unknown as Place[]);
        }
    }, []);

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarBackground: undefined, // Remove if not needed or fix type
                tabBarStyle: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    position: 'absolute',
                    borderTopWidth: 0,
                }
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
                    }}
                />
            ))}
        </Tabs>
    );
}

const styles = StyleSheet.create({
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
    },
    iconActive: {
        // Style pour l'état actif (glow, scale...)
        // Laissez vide pour l'instant si juste la couleur change
    }
});
