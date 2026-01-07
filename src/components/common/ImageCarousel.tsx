import React, { useCallback, useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'expo-image';

interface ImageCarouselProps {
    images: string[];
    height?: number;
}

export const ImageCarousel = ({ images, height = 340 }: ImageCarouselProps) => {
    const { width } = useWindowDimensions();
    const [page, setPage] = useState(0);

    const onScroll = useCallback((e: any) => {
        const x = e.nativeEvent.contentOffset.x;
        const index = Math.round(x / width);
        setPage(index);
    }, [width]);

    return (
        <View style={{ width, height }}>
            <FlatList
                data={images}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width, height, backgroundColor: '#E0E0E0' }}
                        contentFit="cover"
                        cachePolicy="memory-disk"
                        priority="high"
                        transition={400}
                    />
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                bounces={false}
                // Gesture configuration to prevent BottomSheet from stealing touch
                // This is critical for horizontal scroll inside BottomSheet
                activeOffsetX={[-10, 10]}
                failOffsetY={[-5, 5]}
            />
            <View style={styles.paginationContainer}>
                {images.map((_, i) => (
                    <View
                        key={i}
                        style={[styles.dot, { opacity: i === page ? 1 : 0.5 }]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        position: 'absolute',
        bottom: 30,
        right: 24,
        flexDirection: 'row',
        gap: 6,
        zIndex: 5
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff'
    },
});
