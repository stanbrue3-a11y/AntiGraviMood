import React, { useCallback, useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';

interface ImageCarouselProps {
    images: string[];
    height?: number;
}

const CarouselItem = React.memo(({ item, width, height }: { item: string, width: number, height: number }) => (
    <Image
        source={item}
        style={{ width, height, backgroundColor: '#1C1C1E' }}
        contentFit="cover"
        cachePolicy="memory-disk"
        priority="high"
        transition={200}
    />
));

export const ImageCarousel = React.memo(({ images, height = 340 }: ImageCarouselProps) => {
    const { width } = useWindowDimensions();
    const [page, setPage] = useState(0);

    const onScroll = useCallback((e: any) => {
        const x = e.nativeEvent.contentOffset.x;
        const index = Math.round(x / width);
        setPage(index);
    }, [width]);

    const renderItem = useCallback(({ item }: { item: string }) => (
        <CarouselItem item={item} width={width} height={height} />
    ), [width, height]);

    return (
        <View style={{ width, height }}>
            <FlashList
                data={images}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                estimatedItemSize={width}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                bounces={false}
                initialNumToRender={1}
                windowSize={2}
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
});

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
