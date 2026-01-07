import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { usePlacesStore, useUserStore } from '../../src/stores';
import { getDominantMood } from '../../src/lib/moodUtils';
import { MoodRow } from '../../src/components/profile/MoodRow';
import { ScaleButton } from '../../src/components/ui/ScaleButton';
import { moodColors } from '../../src/design';

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

export default function ProfileScreen() {
    // FORCE DARK MODE PALETTE
    const COLORS = {
        bg: '#000000',
        card: '#111111',
        cardBorder: '#222222',
        textPrimary: '#FFFFFF',
        textSecondary: '#999999',
        orange: '#FFB75E', // Warm Orange for actions/highlights
        purple: '#D8B4FE',  // Purple for Header Title
        potes: '#8ccaf7',   // Blue for Potes icon
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
            <View style={[styles.card, { backgroundColor: COLORS.card, borderColor: COLORS.cardBorder }]}>
                {/* Header Row */}
                <View style={styles.cardTopRow}>
                    <View>
                        {/* PURPLE TITLE AS REQUESTED */}
                        <Text style={[styles.serifTitle, { color: COLORS.purple }]}>Profil MoodMap</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.9, marginTop: 2 }}>
                            <Text style={{ color: COLORS.purple, fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 }}>PARIS, FRANCE</Text>
                        </View>
                    </View>
                    <ScaleButton onPress={() => router.push('/edit-profile')} style={styles.settingsBtn}>
                        <Ionicons name="settings-sharp" size={16} color={COLORS.textPrimary} />
                    </ScaleButton>
                </View>

                {/* Profile Info */}
                <View style={styles.profileContent}>
                    {/* AVATAR WITH AURA (GLOW) */}
                    <View style={styles.avatarWrapper}>
                        <View style={[styles.aura, { backgroundColor: COLORS.orange }]} />
                        <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                        <View style={styles.cameraIcon}>
                            <Ionicons name="camera" size={12} color="#000" />
                        </View>
                    </View>

                    {/* User Info */}
                    <View style={styles.infoContainer}>
                        <Text style={[styles.userName, { color: COLORS.textPrimary }]} numberOfLines={1}>{user?.name}</Text>
                        {user?.username && <Text style={[styles.userName, { color: COLORS.textSecondary, fontSize: 16, marginTop: 0 }]}>@{user?.username}</Text>}
                        {user?.bio && (
                            <Text style={[styles.userBio, { color: COLORS.textSecondary }]} numberOfLines={3}>
                                {user.bio}
                            </Text>
                        )}

                        <View style={{ flexDirection: 'row', gap: 12, marginTop: 8 }}>
                            <ScaleButton
                                onPress={() => router.push('/edit-profile')}
                                style={[styles.editBtn, { borderColor: COLORS.cardBorder, flex: 1 }]}
                            >
                                <Text style={[styles.editBtnText, { color: COLORS.textPrimary }]}>Modifier</Text>
                            </ScaleButton>
                            <ScaleButton
                                onPress={handleLogout}
                                style={[styles.editBtn, { borderColor: COLORS.cardBorder, backgroundColor: 'rgba(255, 59, 48, 0.1)', flex: 1 }]}
                            >
                                <Ionicons name="log-out-outline" size={18} color="#FF3B30" />
                            </ScaleButton>
                        </View>
                    </View>
                </View>

                {/* Progress Bar Footer - FIXED ALIGNMENT */}
                <View style={styles.progressSection}>
                    <View style={styles.progressRow}>
                        <Text style={{ color: COLORS.textSecondary, fontSize: 13, fontWeight: '500' }}>Paris découvert à</Text>
                        <Text style={{ color: COLORS.textPrimary, fontSize: 15, fontWeight: 'bold', fontFamily: SERIF_FONT }}>{stats.percentage}%</Text>
                    </View>
                    <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFill, { width: `${stats.percentage}%`, backgroundColor: COLORS.orange }]} />
                    </View>
                </View>
            </View>

            {/* 2. STATS SQUARES - CLICKABLE */}
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
                        <Text style={[styles.statBigNum, { color: COLORS.textPrimary }]}>{stats.friendsCount}</Text>
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
                        <Text style={[styles.statBigNum, { color: COLORS.textPrimary }]}>{likedPlaces.length}</Text>
                        <Text style={{ color: COLORS.textSecondary, fontSize: 13, fontWeight: '500' }}>Favoris</Text>
                    </View>
                </ScaleButton>
            </View>

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
        paddingTop: Platform.OS === 'ios' ? 80 : 60, // Increased back slightly (was 70/50 originally, then 50/30)
        paddingBottom: 40
    },
    // Common Card
    card: {
        borderRadius: 24,
        padding: 20, // Kept at 20 (was 24 originally)
        borderWidth: 1,
        marginBottom: 12
    },

    // Header
    cardTopRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 // Increased (was 12)
    },
    serifTitle: {
        fontFamily: SERIF_FONT, fontSize: 24, fontWeight: '700', marginBottom: 0, letterSpacing: -0.3
    },
    settingsBtn: {
        width: 36, height: 36, borderRadius: 18, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center'
    },

    // Profile Identity
    profileContent: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24 }, // Increased (was 16)

    // Avatar + Aura
    avatarWrapper: { marginRight: 16, position: 'relative', alignItems: 'center', justifyContent: 'center' },
    aura: {
        position: 'absolute', width: 80, height: 80, borderRadius: 40, // Middle ground (was 90 -> 70)
        shadowColor: '#FFB75E', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 20,
        opacity: 0.2 // Base opacity of the highlight
    },
    avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#222' }, // Middle ground (was 90 -> 70)
    cameraIcon: {
        position: 'absolute', bottom: 0, right: 0,
        width: 24, height: 24, borderRadius: 12,
        backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    },

    infoContainer: { flex: 1, paddingTop: 4 }, // Slight padding
    userName: {
        fontFamily: SERIF_FONT, fontSize: 22, fontWeight: '700', // Middle ground (was 26 -> 20)
        lineHeight: 28, marginBottom: 4
    },
    userBio: {
        fontSize: 13, lineHeight: 18, opacity: 0.8, fontStyle: 'italic'
    },

    // Progress
    progressSection: {},
    progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 },
    progressBarBg: { height: 6, borderRadius: 3, backgroundColor: '#222', overflow: 'hidden' },
    progressBarFill: { height: '100%', borderRadius: 3 },

    // Squares
    statsLayout: { flexDirection: 'row', gap: 12, marginBottom: 12 }, // Increased (was 8)
    statSquare: {
        flex: 1,
        minHeight: 110, // Increased (was 150 -> 90)
        borderRadius: 24,
        padding: 16,
        borderWidth: 1,
        justifyContent: 'space-between'
    },
    arrowBadge: {
        borderRadius: 12, padding: 6,
    },
    statBigNum: { fontFamily: SERIF_FONT, fontSize: 32, fontWeight: '700', marginBottom: 2 }, // Middle ground

    // Guest
    guestContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
    iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
    loginBtn: { marginTop: 24, backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },

    // Edit Profile Buttons
    editBtn: {
        paddingVertical: 8, // Middle ground
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    editBtnText: {
        fontSize: 14,
        fontWeight: '600',
    }
});
