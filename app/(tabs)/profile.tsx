import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { usePlacesStore, useUserStore } from '../../src/stores';
import { getDominantMood } from '../../src/lib/moodUtils';
import { MoodRow } from '../../src/components/profile/MoodRow';
import { ScaleButton } from '../../src/components/ui/ScaleButton';
import { moodColors } from '../../src/design';

import { ProfileIdentity } from '../../src/components/profile/ProfileIdentity';
import { ProfileStats } from '../../src/components/profile/ProfileStats';

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

export default function ProfileScreen() {
    // FORCE DARK MODE PALETTE
    const COLORS = {
        bg: '#000000',
        card: '#111111',
        cardBorder: '#222222',
        textPrimary: '#FFFFFF',
        textSecondary: '#999999',
    };

    const router = useRouter();
    const { likedPlaceIds, places } = usePlacesStore();
    const { user, friends, isAuthenticated, logout } = useUserStore();

    const handleLogout = async () => {
        await logout();
        router.replace('/auth/welcome');
    };

    // --- DATA ---
    const likedPlaces = useMemo(() => {
        return places.filter(p => likedPlaceIds.includes(p.id)).reverse();
    }, [places, likedPlaceIds]);

    const stats = useMemo(() => {
        const counts: any = { chill: 0, festif: 0, culturel: 0 };
        likedPlaces.forEach(p => {
            const m = getDominantMood(p);
            counts[m] = (counts[m] || 0) + 1;
        });
        const total = likedPlaces.length || 1;
        return {
            total: likedPlaces.length,
            friendsCount: friends.length,
            percentage: Math.min(100, Math.floor(likedPlaces.length * 2.3)),
            breakdown: {
                chill: Math.round((counts.chill / total) * 100),
                festif: Math.round((counts.festif / total) * 100),
                culturel: Math.round((counts.culturel / total) * 100),
            }
        };
    }, [likedPlaces, friends]);

    if (!isAuthenticated) return (
        <View style={[styles.guestContainer, { backgroundColor: COLORS.bg }]}>
            <View style={styles.iconCircle}>
                <Ionicons name="person" size={40} color={COLORS.textSecondary} />
            </View>
            <Text style={{ color: COLORS.textPrimary, fontSize: 18, marginTop: 16, fontWeight: '600' }}>Profil Verrouillé</Text>
            <ScaleButton onPress={() => router.push('/auth/login')} style={styles.loginBtn}>
                <Text style={{ fontWeight: 'bold' }}>Se connecter</Text>
            </ScaleButton>
        </View>
    );

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: COLORS.bg }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >

            {/* 1. IDENTITY CARD */}
            <ProfileIdentity
                user={user}
                stats={stats}
                onLogout={handleLogout}
            />

            {/* 2. STATS SQUARES - CLICKABLE */}
            <ProfileStats
                friendsCount={stats.friendsCount}
                likedPlacesCount={likedPlaces.length}
            />

            {/* 3. MOODS (BARS KEPT) */}
            <View style={[styles.card, { backgroundColor: COLORS.card, borderColor: COLORS.cardBorder }]}>
                <Text style={[styles.serifTitle, { color: COLORS.textPrimary, marginBottom: 20, fontSize: 22 }]}>Mes moods</Text>
                <MoodRow label="Chill" color={moodColors.chill.primary} percent={stats.breakdown.chill} trackColor={COLORS.cardBorder} textColor={COLORS.textSecondary} />
                <MoodRow label="Festif" color={moodColors.festif.primary} percent={stats.breakdown.festif} trackColor={COLORS.cardBorder} textColor={COLORS.textSecondary} />
                <MoodRow label="Créatif" color={moodColors.culturel.primary} percent={stats.breakdown.culturel} trackColor={COLORS.cardBorder} textColor={COLORS.textSecondary} />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'ios' ? 80 : 60,
        paddingBottom: 40
    },
    // Common Card
    card: {
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        marginBottom: 12
    },
    serifTitle: {
        fontFamily: SERIF_FONT, fontSize: 24, fontWeight: '700', marginBottom: 0, letterSpacing: -0.3
    },
    // Guest
    guestContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
    iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
    loginBtn: { marginTop: 24, backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },
});

