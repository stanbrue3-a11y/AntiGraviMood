import React, { useCallback, useState, useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { MoodImage } from './MoodImage';

import { ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

interface ImageCarouselProps {
  images: (ImageSourcePropType | string)[];
  height?: number;
}

const CarouselItem = React.memo(
  ({
    item,
    width,
    height,
  }: {
    item: ImageSourcePropType | string;
    width: number;
    height: number;
  }) => (
    <MoodImage
      source={item}
      width={width}
      height={height}
      resolution="HERO"
      contentFit="cover"
      priority="high"
    />
  ),
);

export interface ImageCarouselRef {
  reset: () => void;
}

export const ImageCarousel = React.memo(
  forwardRef<ImageCarouselRef, ImageCarouselProps>(({ images, height = 340 }, ref) => {
    const { width } = useWindowDimensions();
    const [page, setPage] = useState(0);

    // Use the correct internal type for FlashList reference
    const listRef = React.useRef<any>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setPage(0);
        listRef.current?.scrollToOffset({ offset: 0, animated: false });
      },
    }));

    const onScroll = useCallback(
      (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const x = e.nativeEvent.contentOffset.x;
        const index = Math.round(x / width);
        setPage(index);
      },
      [width],
    );

    const renderItem = useCallback(
      ({ item }: { item: ImageSourcePropType | string }) => (
        <CarouselItem item={item} width={width} height={height} />
      ),
      [width, height],
    );

    return (
      <View style={{ width, height }}>
        <FlashList
          ref={listRef}
          data={images}
          keyExtractor={(_, index: number) => index.toString()}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          // @ts-ignore - FlashList typing mismatch in this environment
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
            <View key={i} style={[styles.dot, { opacity: i === page ? 1 : 0.5 }]} />
          ))}
        </View>
      </View>
    );
  }),
);

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    flexDirection: 'row',
    gap: 6,
    zIndex: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
});
