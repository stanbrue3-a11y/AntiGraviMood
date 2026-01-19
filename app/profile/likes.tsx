import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { usePlacesStore } from '../../src/stores';
import { LikedPlaceCard } from '../../src/components/profile/LikedPlaceCard';

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });
const COLORS = {
    bg: '#000000',
    textPrimary: '#FFFFFF',
    textSecondary: '#AAAAAA',
    accent: '#D4AF37', // Gold
};

export default function LikesScreen() {
    const router = useRouter();
    const { likedPlaceIds, places } = usePlacesStore();

    const likedPlaces = useMemo(() => {
        return places.filter(p => likedPlaceIds.includes(p.id)).reverse();
    }, [places, likedPlaceIds]);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Mes Pépites</Text>
                    <Text style={styles.subtitle}>{likedPlaces.length} lieux enregistrés</Text>
                </View>
                <View style={{ width: 40 }} />
            </View>

            {/* Grid */}
            <FlashList
                data={likedPlaces}
                renderItem={({ item }) => (
                    <LikedPlaceCard
                        place={item}
                        onPress={() => usePlacesStore.getState().selectPlace(item.id, 'explore')}
                        style={{ marginBottom: 16, marginHorizontal: 6 }}
                    />
                )}
                // @ts-ignore
                estimatedItemSize={250}
                numColumns={2}
                contentContainerStyle={{ padding: 10, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyState}>
                        <Ionicons name="heart-outline" size={64} color={COLORS.textSecondary} style={{ marginBottom: 16, opacity: 0.5 }} />
                        <Text style={{ color: COLORS.textSecondary, textAlign: 'center' }}>
                            Aucun coup de cœur pour le moment.{'\n'}Explorez la carte !
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    backBtn: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    title: {
        fontFamily: SERIF_FONT,
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 12,
        color: COLORS.accent,
        textAlign: 'center',
        marginTop: 2
    },
    emptyState: {
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    }
});
