import React, { useCallback } from 'react';
import { View, StyleSheet, Dimensions, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import { MomentItem } from '../../src/components/feed/MomentItem';
import { Skeleton } from '../../src/components/common/Skeleton';
import { PlaceDetailSheetExplore } from '../../src/components/place/PlaceDetailSheetExplore';
import { useFeedLogic } from '../../src/hooks/useFeedLogic';
import { FeedHeader } from '../../src/components/feed/FeedHeader';
import { FeedEmptyState } from '../../src/components/feed/FeedEmptyState';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height - 85;
const VIEWABILITY_CONFIG = { itemVisiblePercentThreshold: 50 };

export default function FeedScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const {
        feedMode,
        moments,
        isLoading,
        activeIndex,
        localMoments,
        handleSwitchMode,
        onViewableItemsChanged,
        refreshing,
        onRefresh
    } = useFeedLogic();

    const handleOpenComments = useCallback((momentId: string) => {
        router.push({
            pathname: '/comments/[id]',
            params: { id: momentId }
        });
    }, [router]);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* HEADER */}
            <FeedHeader
                feedMode={feedMode}
                onSwitchMode={handleSwitchMode}
                topInset={insets.top}
            />

            {isLoading ? (
                <View style={[styles.container, { backgroundColor: '#000' }]}>
                    <View style={styles.skeletonContainer} />
                    <View style={styles.skeletonOverlay}>
                        <View style={styles.skeletonUserRow}>
                            <Skeleton width={40} height={40} borderRadius={20} style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                            <Skeleton width={120} height={20} borderRadius={4} style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                        </View>
                        <Skeleton width="80%" height={20} borderRadius={4} style={{ marginTop: 12, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                        <Skeleton width="60%" height={20} borderRadius={4} style={{ marginTop: 8, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    </View>
                </View>
            ) : (
                <FlashList
                    key={feedMode}
                    data={moments}
                    extraData={localMoments}
                    renderItem={({ item, index }) => (
                        <MomentItem
                            item={item}
                            isActive={index === activeIndex}
                            onCommentPress={() => handleOpenComments(item.id)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    pagingEnabled
                    // @ts-ignore
                    estimatedItemSize={ITEM_HEIGHT}
                    snapToInterval={ITEM_HEIGHT}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    showsVerticalScrollIndicator={false}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                    onViewableItemsChanged={onViewableItemsChanged}
                    contentContainerStyle={{ paddingBottom: 0 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor="#fff" // iOS
                            colors={['#fff']} // Android
                            progressBackgroundColor="#000"
                        />
                    }
                />
            )}

            {/* Empty state for friends */}
            {feedMode === 'amis' && moments.length === 0 && (
                <FeedEmptyState />
            )}

            {/* Fiche Lieu (Triggered by Moments) */}
            <PlaceDetailSheetExplore triggerMode="feed" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    skeletonContainer: {
        flex: 1,
    },
    skeletonOverlay: {
        position: 'absolute',
        bottom: 100,
        left: 20,
        right: 20,
    },
    skeletonUserRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
    },
});
