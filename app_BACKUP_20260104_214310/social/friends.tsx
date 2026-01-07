import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Platform, Dimensions, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserStore, User, Friend } from '../../src/stores';
import { useTheme } from '../../src/design';
import { ScaleButton } from '../../src/components/ui/ScaleButton';

// TABS
type TabMode = 'amis' | 'ajouter' | 'demandes';

// MOOD PIN COLORS
const MOOD_COLORS = {
    amis: ['#FFB75E', '#ED8F03'],     // Orange
    ajouter: ['#A4D8FD', '#4FACFE'],  // Blue
    demandes: ['#D8B4FE', '#a18cd1']  // Purple
};

const SERIF_FONT = Platform.OS === 'ios' ? 'Georgia' : 'serif';

export default function FriendsScreen() {
    const router = useRouter();
    const {
        user: me,
        friends,
        incomingRequests,
        refreshFriends,
        fetchIncomingRequests,
        searchUsers,
        sendFriendRequest,
        acceptFriendRequest,
        rejectFriendRequest
    } = useUserStore();

    const [activeTab, setActiveTab] = useState<TabMode>('amis');
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [sentRequests, setSentRequests] = useState<string[]>([]);

    useEffect(() => {
        refreshFriends();
        fetchIncomingRequests();
    }, []);

    useEffect(() => {
        if (activeTab !== 'ajouter') return;
        const timer = setTimeout(async () => {
            if (query.length >= 2) {
                setLoading(true);
                const users = await searchUsers(query);
                const filtered = users.filter(u => u.id !== me?.id && !friends.find(f => f.id === u.id));
                setSearchResults(filtered);
                setLoading(false);
            } else {
                setSearchResults([]);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [query, activeTab]);

    const handleAdd = async (userId: string) => {
        setSentRequests(prev => [...prev, userId]);
        await sendFriendRequest(userId);
    };

    const handleAccept = async (req: Friend) => {
        await acceptFriendRequest(req.status);
    };

    const handleReject = async (req: Friend) => {
        await rejectFriendRequest(req.status);
    };

    // --- RENDERERS ---
    const renderFriend = ({ item }: { item: Friend }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>@{item.username}</Text>
            </View>
            <View style={[styles.pillBadge, { backgroundColor: 'rgba(255, 183, 94, 0.15)' }]}>
                <Text style={[styles.pillBadgeText, { color: '#FFB75E' }]}>Pote</Text>
            </View>
        </View>
    );

    const renderRequest = ({ item }: { item: Friend }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>@{item.username}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <ScaleButton onPress={() => handleReject(item)} style={[styles.circleBtn, { backgroundColor: 'rgba(255,59,48,0.15)' }]}>
                    <Ionicons name="close" size={20} color="#FF3B30" />
                </ScaleButton>
                <ScaleButton onPress={() => handleAccept(item)} style={[styles.circleBtn, { backgroundColor: '#FFB75E' }]}>
                    <Ionicons name="checkmark" size={20} color="#fff" />
                </ScaleButton>
            </View>
        </View>
    );

    const renderSearchResult = ({ item }: { item: User }) => {
        const isSent = sentRequests.includes(item.id);
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.username}>@{item.username}</Text>
                </View>
                <ScaleButton
                    onPress={() => !isSent && handleAdd(item.id)}
                    disabled={isSent}
                    style={[styles.smallPillBtn, isSent ? styles.sentState : styles.addState]}
                >
                    <Text style={[styles.smallPillText, isSent && { color: '#888' }]}>
                        {isSent ? 'Envoyé' : 'Ajouter'}
                    </Text>
                </ScaleButton>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* HEADER WITH BLUR FOR AESTHETICS */}
            <BlurView intensity={80} tint="dark" style={styles.blurHeader}>
                <View style={styles.topHeader}>
                    <ScaleButton onPress={() => router.back()} style={styles.backBtn}>
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </ScaleButton>
                    <Text style={styles.headerTitle}>Potes</Text>
                </View>

                {/* TABS */}
                <View style={styles.tabsContainer}>
                    {(['amis', 'ajouter', 'demandes'] as TabMode[]).map((tab) => {
                        const isActive = activeTab === tab;
                        const badgeCount = tab === 'demandes' ? incomingRequests.length : 0;
                        // Use Transparent fallback for inactive to look glassmorphic
                        const colors = isActive ? MOOD_COLORS[tab] : ['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)'];

                        return (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => setActiveTab(tab)}
                                style={{ flex: 1 }}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={colors as [string, string]}
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                                    style={styles.tabPill}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                        <Text
                                            style={[
                                                styles.tabText,
                                                { color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)' }
                                            ]}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </Text>
                                        {badgeCount > 0 && (
                                            <View style={styles.badge}>
                                                <Text style={styles.badgeText}>{badgeCount}</Text>
                                            </View>
                                        )}
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </BlurView>

            {/* CONTENT */}
            <View style={styles.content}>
                {activeTab === 'amis' && (
                    <FlatList
                        data={friends}
                        keyExtractor={item => item.id}
                        renderItem={renderFriend}
                        contentContainerStyle={styles.listContent}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <View style={styles.iconCircle}>
                                    <Ionicons name="people" size={40} color="#FFB75E" />
                                </View>
                                <Text style={styles.emptyTitle}>Ta team est vide</Text>
                                <Text style={styles.emptyText}>Ajoute tes potes pour voir ce qu'ils font !</Text>
                                <ScaleButton onPress={() => setActiveTab('ajouter')} style={styles.ctaBtn}>
                                    <Text style={styles.ctaText}>Trouver des potes</Text>
                                </ScaleButton>
                            </View>
                        }
                    />
                )}

                {activeTab === 'demandes' && (
                    <FlatList
                        data={incomingRequests}
                        keyExtractor={item => item.id}
                        renderItem={renderRequest}
                        contentContainerStyle={styles.listContent}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>Aucune demande en attente.</Text>
                            </View>
                        }
                    />
                )}

                {activeTab === 'ajouter' && (
                    <View style={{ flex: 1 }}>
                        <View style={styles.searchBarWrapper}>
                            <Ionicons name="search" size={20} color="#888" style={{ marginRight: 10 }} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Rechercher un pseudo..."
                                placeholderTextColor="#666"
                                value={query}
                                onChangeText={setQuery}
                                autoCapitalize="none"
                            />
                        </View>
                        {loading && <ActivityIndicator color="#A4D8FD" style={{ marginTop: 20 }} />}
                        <FlatList
                            data={searchResults}
                            keyExtractor={item => item.id}
                            renderItem={renderSearchResult}
                            contentContainerStyle={styles.listContent}
                        />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000' },

    // Header
    blurHeader: {
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        zIndex: 10,
        // No explicit background color = glass effect
    },
    topHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
    backBtn: {
        width: 44, height: 44, borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center', justifyContent: 'center',
        marginRight: 16
    },
    headerTitle: {
        fontSize: 34,
        fontFamily: SERIF_FONT,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    // Tabs
    tabsContainer: { flexDirection: 'row', gap: 12 },
    tabPill: {
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    tabText: {
        fontSize: 14,
        fontFamily: SERIF_FONT,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    badge: {
        backgroundColor: '#FF3B30',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginLeft: 6
    },
    badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },

    // Content
    content: { flex: 1 },
    listContent: { padding: 20, paddingBottom: 40 },

    // Search
    searchBarWrapper: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)', // Glassy
        marginHorizontal: 20, marginTop: 16,
        borderRadius: 14, paddingHorizontal: 16, height: 52,
        borderWidth: 1, borderColor: '#333'
    },
    searchInput: { flex: 1, color: '#fff', fontSize: 16, height: '100%', fontFamily: SERIF_FONT },

    // Card Common
    card: {
        flexDirection: 'row', alignItems: 'center',
        padding: 16, borderRadius: 24, marginBottom: 12,
        backgroundColor: 'rgba(255,255,255,0.06)', // Glassy
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)'
    },
    avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#333', marginRight: 16 },
    info: { flex: 1 },
    name: { fontSize: 18, fontFamily: SERIF_FONT, fontWeight: '700', color: '#fff', marginBottom: 2 },
    username: { fontSize: 14, color: '#999' },

    // Action Elements
    pillBadge: {
        paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12,
    },
    pillBadgeText: { fontSize: 13, fontWeight: '700', fontFamily: SERIF_FONT },

    circleBtn: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },

    smallPillBtn: { paddingHorizontal: 18, paddingVertical: 10, borderRadius: 20 },
    addState: { backgroundColor: '#fff' },
    sentState: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#666' },
    smallPillText: { fontSize: 14, fontWeight: '700', fontFamily: SERIF_FONT },

    // Empty State
    emptyContainer: { alignItems: 'center', marginTop: 100 },
    iconCircle: {
        width: 80, height: 80, borderRadius: 40,
        backgroundColor: 'rgba(255, 183, 94, 0.1)',
        alignItems: 'center', justifyContent: 'center', marginBottom: 20
    },
    emptyTitle: { color: '#fff', fontSize: 24, fontFamily: SERIF_FONT, fontWeight: '700', marginTop: 10 },
    emptyText: { color: '#888', textAlign: 'center', marginTop: 8, marginBottom: 32, width: '70%', lineHeight: 22 },
    ctaBtn: { backgroundColor: '#FFB75E', paddingHorizontal: 28, paddingVertical: 16, borderRadius: 32 },
    ctaText: { color: '#000', fontWeight: 'bold', fontSize: 16, fontFamily: SERIF_FONT }
});
