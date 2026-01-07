import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export const FeedEmptyState = () => {
    return (
        <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>👥</Text>
            <Text style={styles.emptyTitle}>Aucun moment</Text>
            <Text style={styles.emptyText}>Tes amis n'ont pas encore partagé de moments</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyState: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    emptyEmoji: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        marginBottom: 8,
    },
    emptyText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 40,
    },
});
