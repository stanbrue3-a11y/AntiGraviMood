import React from 'react';
import { View, Text, Modal, Pressable, TextInput, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    visible: boolean;
    onClose: () => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export const DiscoverSearch = ({ visible, onClose, searchQuery, setSearchQuery }: Props) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <BlurView intensity={20} tint="dark" style={styles.modalWrap}>
                <Pressable style={styles.overlay} onPress={onClose} />

                <View style={styles.cardContainer}>
                    <Text style={styles.cardTitle}>Rechercher</Text>

                    <View style={styles.searchInputContainer}>
                        <Ionicons name="search" size={20} color="#9CA3AF" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Nom, vibe, quartier..."
                            placeholderTextColor="#9CA3AF"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            autoFocus
                            returnKeyType="search"
                            onSubmitEditing={onClose}
                        />
                        {searchQuery.length > 0 && (
                            <Pressable onPress={() => setSearchQuery('')}>
                                <Ionicons name="close-circle" size={20} color="#9CA3AF" />
                            </Pressable>
                        )}
                    </View>

                    <Pressable
                        style={styles.searchButton}
                        onPress={onClose}
                    >
                        <Text style={styles.searchButtonText}>Rechercher</Text>
                    </Pressable>
                </View>
            </BlurView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalWrap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    overlay: { ...StyleSheet.absoluteFillObject },
    cardContainer: {
        width: '90%', maxWidth: 360,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20, elevation: 12
    },
    cardTitle: {
        fontSize: 22, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '800', color: '#1F2937',
        marginBottom: 24, textAlign: 'center'
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        padding: 12,
        gap: 10,
        width: '100%',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        color: '#1F2937',
    },
    searchButton: {
        backgroundColor: '#1F2937',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 24,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },
});
