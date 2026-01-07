import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScaleButton } from '../../components/ui/ScaleButton';

// Force Dark Mode Palette
const COLORS = {
    card: '#111111',
    cardBorder: '#222222',
    textPrimary: '#FFFFFF',
    textSecondary: '#999999',
    potes: '#8ccaf7',
};

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

type Props = {
    friendsCount: number;
    likedPlacesCount: number;
};

export const ProfileStats = ({ friendsCount, likedPlacesCount }: Props) => {
    const router = useRouter();

    return (
        <View style={styles.statsLayout}>
            {/* POTES -> Friends Tab */}
            <ScaleButton
                onPress={() => router.push('/social/friends')}
                style={[styles.statSquare, { backgroundColor: COLORS.card, borderColor: COLORS.cardBorder }]}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <Ionicons name="people" size={26} color={COLORS.potes} />
                    <View style={[styles.arrowBadge, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                        <Ionicons name="arrow-forward" size={12} color={COLORS.textSecondary} />
                    </View>
                </View>
                <View>
                    <Text style={[styles.statBigNum, { color: COLORS.textPrimary }]}>{friendsCount}</Text>
                    <Text style={{ color: COLORS.textSecondary, fontSize: 13, fontWeight: '500' }}>Potes</Text>
                </View>
            </ScaleButton>

            {/* FAVORIS */}
            <ScaleButton
                onPress={() => router.push('/profile/likes')}
                style={[styles.statSquare, { backgroundColor: COLORS.card, borderColor: COLORS.cardBorder }]}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <Ionicons name="heart" size={26} color="#EF4444" />
                    <View style={[styles.arrowBadge, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                        <Ionicons name="arrow-forward" size={12} color={COLORS.textSecondary} />
                    </View>
                </View>
                <View>
                    <Text style={[styles.statBigNum, { color: COLORS.textPrimary }]}>{likedPlacesCount}</Text>
                    <Text style={{ color: COLORS.textSecondary, fontSize: 13, fontWeight: '500' }}>Favoris</Text>
                </View>
            </ScaleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    statsLayout: { flexDirection: 'row', gap: 12, marginBottom: 12 },
    statSquare: {
        flex: 1,
        minHeight: 110,
        borderRadius: 24,
        padding: 16,
        borderWidth: 1,
        justifyContent: 'space-between'
    },
    arrowBadge: {
        borderRadius: 12, padding: 6,
    },
    statBigNum: { fontFamily: SERIF_FONT, fontSize: 32, fontWeight: '700', marginBottom: 2 },
});
