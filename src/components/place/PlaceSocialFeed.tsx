import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, Pressable } from 'react-native';
import { MomentsSwipeViewer } from './MomentsSwipeViewer';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../stores';

interface PlaceSocialFeedProps {
    place: Place;
}


import { useMomentsStore } from '../../stores/momentsStore';

export const PlaceSocialFeed = ({ place }: PlaceSocialFeedProps) => {
    const moments = useMomentsStore(state => state.moments);

    // Filter moments for this specific place
    const placeMoments = moments.filter(m => m.placeId === place.id);

    // Fallback Mock data if no local moments
    const mockMoments = [
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1400&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=1400&h=2000&fit=crop',
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1400&h=2000&fit=crop',
    ];

    const displayMoments = placeMoments.length > 0 ? placeMoments : [];
    const showMock = placeMoments.length < 4; // Show mock if we have few real moments

    const [viewerVisible, setViewerVisible] = React.useState(false);
    const [initialViewerIndex, setInitialViewerIndex] = React.useState(0);

    // Prepare combined data for viewer
    const viewerMoments = React.useMemo(() => {
        const local = placeMoments.map(m => ({
            id: m.id,
            imageUri: m.imageUri,
            caption: m.caption,
            user: { name: 'Moi' }, // Local user
            likes: 0
        }));

        const mocks = mockMoments.map((uri, i) => ({
            id: `mock-${i}`,
            imageUri: uri,
            caption: 'Super ambiance ici ! ✨',
            user: { name: 'Amina', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
            likes: 12 + i * 4
        }));

        return [...local, ...(showMock ? mocks : [])];
    }, [placeMoments, showMock, mockMoments]);


    // Shared Element Logic
    const [origin, setOrigin] = React.useState<{ x: number, y: number, width: number, height: number } | null>(null);
    const itemRefs = React.useRef<{ [key: number]: View }>({});

    const handleOpenViewer = (index: number) => {
        const ref = itemRefs.current[index];
        if (ref) {
            ref.measure((x, y, width, height, pageX, pageY) => {
                setOrigin({ x: pageX, y: pageY, width, height });
                setInitialViewerIndex(index);
                setViewerVisible(true);
            });
        } else {
            // Fallback if measurement fails
            setOrigin(null);
            setInitialViewerIndex(index);
            setViewerVisible(true);
        }
    };

    return (
        <>
            <Text style={styles.sectionTitle}>
                Moments partagés ({placeMoments.length + (place.social_preview?.moment_count || 120)})
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.momentsScroll}>
                {/* 1. Real Local Moments */}
                {placeMoments.map((moment, index) => (
                    <View
                        key={moment.id}
                        collapsable={false} // Crucial for measurement on Android/NewArch
                        ref={el => { if (el) itemRefs.current[index] = el; }}
                    >
                        <Pressable onPress={() => handleOpenViewer(index)}>
                            <View style={styles.momentCard}>
                                <Image source={{ uri: moment.imageUri }} style={styles.momentImg} contentFit="cover" transition={400} />
                                <View style={styles.momentOverlay}>
                                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#4e55f0', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff' }}>
                                        <Ionicons name="person" size={8} color="#fff" />
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                ))}

                {/* 2. Mock Moments (Filler) */}
                {showMock && mockMoments.map((uri, i) => {
                    const globalIndex = placeMoments.length + i;
                    return (
                        <View
                            key={`mock-${i}`}
                            collapsable={false}
                            ref={el => { if (el) itemRefs.current[globalIndex] = el; }}
                        >
                            <Pressable onPress={() => handleOpenViewer(globalIndex)}>
                                <View style={styles.momentCard}>
                                    <Image source={{ uri }} style={styles.momentImg} contentFit="cover" transition={400} />
                                </View>
                            </Pressable>
                        </View>
                    );
                })}
            </ScrollView>

            {/* Full Screen Tinder-like Viewer */}
            <MomentsSwipeViewer
                isVisible={viewerVisible}
                onClose={() => setViewerVisible(false)}
                moments={viewerMoments}
                initialIndex={initialViewerIndex}
                origin={origin}
            />
        </>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'PlayfairDisplay-Bold',
        color: '#FFF',
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
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#1C1C1E'
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

