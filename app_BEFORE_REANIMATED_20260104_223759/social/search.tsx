import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useUserStore, User } from '../../src/stores';
import { useTheme } from '../../src/design';
import { ScaleButton } from '../../src/components/ui/ScaleButton';

export default function SearchFriendsScreen() {
    const router = useRouter();
    const { theme, isDark } = useTheme();
    const { searchUsers, sendFriendRequest, friends, user: me } = useUserStore();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [sentRequests, setSentRequests] = useState<string[]>([]); // Track sent requests locally for now

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query.length >= 2) {
                setLoading(true);
                const users = await searchUsers(query);
                // Filter out myself and already friends
                const filtered = users.filter(u =>
                    u.id !== me?.id &&
                    !friends.find(f => f.id === u.id)
                );
                setResults(filtered);
                setLoading(false);
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    const handleAdd = async (userId: string) => {
        setSentRequests(prev => [...prev, userId]);
        const { success, error } = await sendFriendRequest(userId);
        if (success) {
            // Toast or haptic feedback could go here
        } else {
            Alert.alert("Oups", error || "Erreur lors de l'envoi");
            setSentRequests(prev => prev.filter(id => id !== userId)); // Rollback
        }
    };

    const renderItem = ({ item }: { item: User }) => {
        const isSent = sentRequests.includes(item.id);

        return (
            <View style={[styles.card, { backgroundColor: theme.surface }]}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={[styles.name, { color: theme.text.primary }]}>{item.name}</Text>
                    <Text style={[styles.username, { color: theme.text.secondary }]}>@{item.username}</Text>
                </View>
                <ScaleButton
                    onPress={() => !isSent && handleAdd(item.id)}
                    disabled={isSent}
                    style={[styles.addBtn, isSent && styles.sentBtn]}
                >
                    <Ionicons
                        name={isSent ? "checkmark" : "person-add"}
                        size={16}
                        color={isSent ? theme.text.secondary : "#fff"}
                    />
                    <Text style={[styles.addText, isSent && { color: theme.text.secondary }]}>
                        {isSent ? 'Envoyé' : 'Ajouter'}
                    </Text>
                </ScaleButton>
            </View>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <View style={[styles.header, { borderBottomColor: theme.border }]}>
                <ScaleButton onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color={theme.text.primary} />
                </ScaleButton>
                <TextInput
                    style={[styles.searchInput, { backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0', color: theme.text.primary }]}
                    placeholder="Rechercher des potes..."
                    placeholderTextColor={theme.text.muted}
                    value={query}
                    onChangeText={setQuery}
                    autoFocus
                />
            </View>

            {/* List */}
            {loading ? (
                <ActivityIndicator style={{ marginTop: 40 }} color={theme.primary} />
            ) : (
                <FlatList
                    data={results}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        query.length >= 2 ? (
                            <Text style={[styles.empty, { color: theme.text.muted }]}>Aucun utilisateur trouvé.</Text>
                        ) : (
                            <View style={styles.emptyContainer}>
                                <Ionicons name="people-outline" size={48} color={theme.text.muted} style={{ opacity: 0.3 }} />
                                <Text style={[styles.empty, { color: theme.text.muted }]}>Cherche tes amis par nom ou @username</Text>
                            </View>
                        )
                    }
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row', alignItems: 'center',
        paddingTop: 60, paddingHorizontal: 16, paddingBottom: 12,
        borderBottomWidth: 1,
        gap: 12,
    },
    backBtn: { padding: 4 },
    searchInput: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    listContent: { padding: 16 },
    card: {
        flexDirection: 'row', alignItems: 'center',
        padding: 12, borderRadius: 16,
        marginBottom: 12,
    },
    avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#333' },
    info: { flex: 1, marginLeft: 12 },
    name: { fontSize: 16, fontWeight: '600' },
    username: { fontSize: 14 },
    addBtn: {
        flexDirection: 'row', alignItems: 'center', gap: 6,
        backgroundColor: '#6366f1',
        paddingHorizontal: 12, paddingVertical: 8,
        borderRadius: 16,
    },
    sentBtn: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)'
    },
    addText: { color: '#fff', fontSize: 13, fontWeight: '600' },

    emptyContainer: { alignItems: 'center', marginTop: 80, gap: 16 },
    empty: { textAlign: 'center', fontSize: 14 },
});
