import React, { useMemo } from 'react';
import { StyleSheet, View, ViewStyle, DimensionValue } from 'react-native';
import { Image, ImageProps } from 'expo-image';
import { optimiseMapsUrl, injectApiKey, MediaResolution } from '../../utils/mediaUtils';

/**
 * MoodImage.tsx 🚀🖼️⚡️
 * The premium, high-performance image component for MoodMap.
 * Implements the PDCI (Proxy Dynamique + Cache Intelligent) Strategy.
 */

interface MoodImageProps extends Partial<Omit<ImageProps, 'source'>> {
    source: string | { uri: string } | number | null | undefined;
    resolution?: MediaResolution;
    aspectRatio?: number;
    width?: DimensionValue;
    height?: DimensionValue;
    style?: ViewStyle | ViewStyle[];
}

export const MoodImage: React.FC<MoodImageProps> = React.memo(({
    source,
    resolution = 'PREVIEW',
    aspectRatio,
    width,
    height,
    style,
    contentFit = 'cover',
    transition = 200,
    cachePolicy = 'disk',
    priority = 'normal',
    ...rest
}) => {
    // 1. Optimize URL if it's a string or URI object
    const optimizedSource = useMemo(() => {
        if (!source) return null;

        const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || '';

        if (typeof source === 'string') {
            const optimized = optimiseMapsUrl(source, resolution);
            return { uri: injectApiKey(optimized, GOOGLE_API_KEY) };
        }

        if (typeof source === 'object' && 'uri' in source && source.uri) {
            const optimized = optimiseMapsUrl(source.uri, resolution);
            return { ...source, uri: injectApiKey(optimized, GOOGLE_API_KEY) };
        }

        return source;
    }, [source, resolution]);

    if (!optimizedSource) {
        return <View style={[styles.placeholder, { width, height, aspectRatio }, style]} />;
    }

    return (
        <Image
            source={optimizedSource}
            style={[
                { width, height, aspectRatio, backgroundColor: '#1C1C1E' },
                style
            ]}
            contentFit={contentFit}
            transition={transition}
            cachePolicy={cachePolicy}
            priority={priority}
            // Standard BlurHash as atomic fallback
            placeholder="|rF?hV%2WCj[ayj[a|j[ayjtayj[ayj[ayj[ayj[ayj[ayj[ayj[ayj[ayj[fQj[ayayj[ayfjj[ayayj[ayayj[ayayj[ayay"
            {...rest}
        />
    );
});

const styles = StyleSheet.create({
    placeholder: {
        backgroundColor: '#1C1C1E',
    }
});
