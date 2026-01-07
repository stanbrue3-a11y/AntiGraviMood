import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Animated, { SharedValue } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';
import { ScaleButton } from '../ui/ScaleButton';

interface ProfileHeaderProps {
    scrollY: SharedValue<number>;
    user: any;
    stats: any;
    onSettingsPress: () => void;
    onEditPress: () => void;
}

export function ProfileHeader({ user, stats, onSettingsPress, onEditPress }: ProfileHeaderProps) {
    const { isDark, theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* TOP BAR */}
            <View style={styles.topBar}>
                <View />
                <ScaleButton onPress={onSettingsPress} style={[styles.iconButton, { backgroundColor: theme.surface }]}>
                    <Ionicons name="settings-outline" size={20} color={theme.text.primary} />
                </ScaleButton>
            </View>

            {/* AVATAR & INFO */}
            <View style={styles.mainInfo}>
                <View style={styles.avatarContainer}>
                    <LinearGradient
                        colors={['#8ccaf7', '#ffab60', '#c499ff']} // Mood Gradient Border
                        style={styles.moodRing}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    >
                        <View style={[styles.avatarBorder, { backgroundColor: theme.background }]}>
                            <Image
                                source={{ uri: user?.avatar ?? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }}
                                style={styles.avatar}
                            />
                        </View>
                    </LinearGradient>
                    {/* Live/Status Badge */}
                    <View style={[styles.statusBadge, { borderColor: theme.background }]}>
                        <View style={styles.statusDot} />
                    </View>
                </View>

                <Text style={[styles.name, { color: theme.text.primary }]}>{user?.name || 'Explorer'}</Text>
                <Text style={[styles.username, { color: theme.text.secondary }]}>@{user?.username || 'moodmap_user'}</Text>
                <Text style={[styles.bio, { color: theme.text.secondary }]}>{user?.bio || 'Explorateur urbain • Paris'}</Text>

                {/* MODERN STATS */}
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={[styles.statNum, { color: theme.text.primary }]}>{stats?.total || 0}</Text>
                        <Text style={[styles.statLabel, { color: theme.text.secondary }]}>Pépites</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={[styles.statNum, { color: theme.text.primary }]}>{stats?.discovered || 0}</Text>
                        <Text style={[styles.statLabel, { color: theme.text.secondary }]}>Visites</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={[styles.statNum, { color: theme.text.primary }]}>{stats?.friendsCount || 0}</Text>
                        <Text style={[styles.statLabel, { color: theme.text.secondary }]}>Potes</Text>
                    </View>
                </View>

                <ScaleButton onPress={onEditPress} style={[styles.editBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                    <Text style={[styles.editText, { color: theme.text.primary }]}>Modifier le profil</Text>
                </ScaleButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingBottom: 20,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    iconButton: {
        width: 40, height: 40, borderRadius: 20,
        alignItems: 'center', justifyContent: 'center',
    },
    mainInfo: {
        alignItems: 'center',
    },
    avatarContainer: {
        marginBottom: 16,
        position: 'relative'
    },
    moodRing: {
        padding: 3,
        borderRadius: 55, // slightly larger than avatar
    },
    avatarBorder: {
        padding: 3, // gap between ring and image
        borderRadius: 52,
    },
    avatar: {
        width: 90, height: 90, borderRadius: 45,
    },
    statusBadge: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#10b981', // Green for online
        width: 16, height: 16, borderRadius: 8,
        borderWidth: 2,
        alignItems: 'center', justifyContent: 'center'
    },
    statusDot: {
        width: 4, height: 4, backgroundColor: '#fff', borderRadius: 2
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 2,
        letterSpacing: -0.3
    },
    username: {
        fontSize: 14,
        marginBottom: 8,
        opacity: 0.8
    },
    bio: {
        fontSize: 14,
        marginBottom: 24,
        maxWidth: '80%',
        textAlign: 'center',
        lineHeight: 20
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32, // More space
        marginBottom: 24
    },
    statItem: {
        alignItems: 'center',
    },
    statNum: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 2
    },
    statLabel: {
        fontSize: 12,
        fontWeight: '500',
        opacity: 0.7
    },
    statDivider: {
        width: 1, height: 24, backgroundColor: 'rgba(150,150,150,0.15)'
    },
    editBtn: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
        borderWidth: 1,
    },
    editText: {
        fontSize: 14, fontWeight: '600'
    }
});
