import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../stores';

interface PlaceSocialFeedProps {
    place: Place;
}

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

import { useMomentsStore } from '../../stores/useMomentsStore';

export const PlaceSocialFeed = ({ place }: PlaceSocialFeedProps) => {
    const moments = useMomentsStore(state => state.moments);

    // Filter moments for this specific place
    const placeMoments = moments.filter(m => m.placeId === place.id);

    // Fallback Mock data if no local moments
    const mockMoments = [
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=300&fit=crop',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=200&h=300&fit=crop',
        'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=200&h=300&fit=crop',
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=200&h=300&fit=crop',
    ];

    const displayMoments = placeMoments.length > 0 ? placeMoments : [];
    const showMock = placeMoments.length < 4; // Show mock if we have few real moments

    return (
        <>
            <Text style={styles.sectionTitle}>
                Moments partagés ({placeMoments.length + (place.social_preview?.moment_count || 120)})
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.momentsScroll}>
                {/* 1. Real Local Moments */}
                {placeMoments.map((moment) => (
                    <View key={moment.id} style={styles.momentCard}>
                        <Image source={{ uri: moment.imageUri }} style={styles.momentImg} contentFit="cover" transition={400} />
                        <View style={styles.momentOverlay}>
                            {/* User avatar or indicator could go here */}
                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#4e55f0', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff' }}>
                                <Ionicons name="person" size={8} color="#fff" />
                            </View>
                        </View>
                    </View>
                ))}

                {/* 2. Mock Moments (Filler) */}
                {showMock && mockMoments.map((uri, i) => (
                    <View key={`mock-${i}`} style={styles.momentCard}>
                        <Image source={{ uri }} style={styles.momentImg} contentFit="cover" transition={400} />
                        {/* No overlay for mocks or different one */}
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: SERIF_FONT,
        color: '#111',
        marginBottom: 16,
        marginTop: 8,
    },
    momentsScroll: {
        paddingRight: 24,
        gap: 12,
        marginBottom: 32
    },
    momentCard: {
        width: 100,
        height: 140,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#f3f4f6'
    },
    momentImg: {
        width: '100%',
        height: '100%'
    },
    momentOverlay: {
        position: 'absolute',
        bottom: 6,
        right: 6,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
        padding: 4
    },
});

