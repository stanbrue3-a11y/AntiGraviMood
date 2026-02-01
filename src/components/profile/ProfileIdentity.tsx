import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScaleButton } from '../../components/ui/ScaleButton';

// Force Dark Mode Palette as per original file
const COLORS = {
    card: '#111111',
    cardBorder: '#222222',
    textPrimary: '#FFFFFF',
    textSecondary: '#999999',
    orange: '#FFB75E', // Warm Orange for actions/highlights
    purple: '#D8B4FE',  // Purple for Header Title
};

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

type Props = {
    user: any;
    stats: { percentage: number };
    onLogout: () => void;
};

export const ProfileIdentity = ({ user, stats, onLogout }: Props) => {
    const router = useRouter();

    return (
        <View style={[styles.card, { backgroundColor: COLORS.card, borderColor: COLORS.cardBorder }]}>
            {/* Header Row */}
            <View style={styles.cardTopRow}>
                <View>
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
                    <Image source={user?.avatar} style={styles.avatar} contentFit="cover" transition={300} />
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
                            onPress={onLogout}
                            style={[styles.editBtn, { borderColor: COLORS.cardBorder, backgroundColor: 'rgba(255, 59, 48, 0.1)', flex: 1 }]}
                        >
                            <Ionicons name="log-out-outline" size={18} color="#FF3B30" />
                        </ScaleButton>
                    </View>
                </View>
            </View>

            {/* Progress Bar Footer */}
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
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        marginBottom: 12
    },
    cardTopRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16
    },
    serifTitle: {
        fontFamily: SERIF_FONT, fontSize: 24, fontWeight: '700', marginBottom: 0, letterSpacing: -0.3
    },
    settingsBtn: {
        width: 36, height: 36, borderRadius: 18, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center'
    },
    profileContent: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24 },
    avatarWrapper: { marginRight: 16, position: 'relative', alignItems: 'center', justifyContent: 'center' },
    aura: {
        position: 'absolute', width: 80, height: 80, borderRadius: 40,
        shadowColor: '#FFB75E', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 20,
        opacity: 0.2
    },
    avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#222' },
    cameraIcon: {
        position: 'absolute', bottom: 0, right: 0,
        width: 24, height: 24, borderRadius: 12,
        backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    },
    infoContainer: { flex: 1, paddingTop: 4 },
    userName: {
        fontFamily: SERIF_FONT, fontSize: 22, fontWeight: '700',
        lineHeight: 28, marginBottom: 4
    },
    userBio: {
        fontSize: 13, lineHeight: 18, opacity: 0.8, fontStyle: 'italic'
    },
    editBtn: {
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    editBtnText: {
        fontSize: 14,
        fontWeight: '600',
    },
    progressSection: {},
    progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 },
    progressBarBg: { height: 6, borderRadius: 3, backgroundColor: '#222', overflow: 'hidden' },
    progressBarFill: { height: '100%', borderRadius: 3 },
});
