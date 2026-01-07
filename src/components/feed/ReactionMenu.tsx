import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { moodColors } from '../../design';

interface ReactionMenuProps {
    visible: boolean;
    onSelect: (mood: 'chill' | 'festif' | 'culturel') => void;
    onClose: () => void;
}

export const ReactionMenu = ({ visible, onSelect, onClose }: ReactionMenuProps) => {
    if (!visible) return null;

    const handleSelect = (mood: 'chill' | 'festif' | 'culturel') => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onSelect(mood);
    };

    return (
        <View style={[StyleSheet.absoluteFill, { zIndex: 100 }]}>
            <Pressable style={StyleSheet.absoluteFill} onPress={onClose}>
                <BlurView intensity={30} tint="dark" style={styles.blur} />
            </Pressable>

            <View style={styles.menuContainer}>
                <Text style={styles.title}>Quel est le mood ?</Text>

                <View style={styles.optionsRow}>
                    {/* CHILL */}
                    <Pressable
                        style={[styles.option, { backgroundColor: moodColors.chill.primary }]}
                        onPress={() => handleSelect('chill')}
                    >
                        <Text style={styles.emoji}>🧘</Text>
                        <Text style={styles.label}>Chill</Text>
                    </Pressable>

                    {/* FESTIF */}
                    <Pressable
                        style={[styles.option, { backgroundColor: moodColors.festif.primary }]}
                        onPress={() => handleSelect('festif')}
                    >
                        <Text style={styles.emoji}>🎉</Text>
                        <Text style={styles.label}>Festif</Text>
                    </Pressable>

                    {/* CREATIF */}
                    <Pressable
                        style={[styles.option, { backgroundColor: moodColors.culturel.primary }]}
                        onPress={() => handleSelect('culturel')}
                    >
                        <Text style={styles.emoji}>🎨</Text>
                        <Text style={styles.label}>Culturel</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    blur: {
        flex: 1,
    },
    menuContainer: {
        position: 'absolute',
        bottom: 150,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 20,
        color: '#1F2937',
        fontFamily: 'Georgia',
    },
    optionsRow: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
        width: '100%',
    },
    option: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    emoji: {
        fontSize: 32,
        marginBottom: 4,
    },
    label: {
        fontSize: 11,
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    }
});
