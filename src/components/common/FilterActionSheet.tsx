/**
 * MoodMap Paris - Filter Action Sheet
 * 
 * Multi-sélection des types de lieux
 */

import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../../design';
import { usePlacesStore, PLACE_CATEGORIES } from '../../stores';

interface FilterActionSheetProps {
    visible: boolean;
    onClose: () => void;
}

export function FilterActionSheet({ visible, onClose }: FilterActionSheetProps) {
    const { theme, isDark } = useTheme();
    const { selectedCategories = [], toggleCategory, clearFilters } = usePlacesStore();

    const handleToggleCategory = (category: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        toggleCategory(category);
    };

    const handleClearFilters = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        clearFilters();
    };

    const handleClose = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <Pressable style={styles.backdrop} onPress={handleClose} />

                <View style={[styles.sheet, { backgroundColor: theme.surface }]}>
                    <View style={styles.handle} />

                    <View style={styles.header}>
                        <Text style={[styles.title, { color: theme.text.primary }]}>
                            Filtrer par type
                        </Text>
                        {selectedCategories?.length > 0 && (
                            <Pressable onPress={handleClearFilters}>
                                <Text style={[styles.clearButton, { color: theme.text.secondary }]}>
                                    Effacer
                                </Text>
                            </Pressable>
                        )}
                    </View>

                    <View style={styles.categories}>
                        {PLACE_CATEGORIES.map(({ key, label, emoji }) => {
                            const isSelected = selectedCategories.includes(key);
                            return (
                                <Pressable
                                    key={key}
                                    onPress={() => handleToggleCategory(key)}
                                    style={[
                                        styles.categoryChip,
                                        {
                                            backgroundColor: isSelected
                                                ? theme.text.primary
                                                : theme.background,
                                            borderColor: theme.border,
                                        },
                                    ]}
                                >
                                    <Text style={styles.categoryEmoji}>{emoji}</Text>
                                    <Text
                                        style={[
                                            styles.categoryLabel,
                                            { color: isSelected ? theme.background : theme.text.primary },
                                        ]}
                                    >
                                        {label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>

                    <Pressable
                        onPress={handleClose}
                        style={[styles.doneButton, { backgroundColor: theme.text.primary }]}
                    >
                        <Text style={[styles.doneText, { color: theme.background }]}>
                            Appliquer
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    sheet: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        paddingBottom: 40,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: 'rgba(128, 128, 128, 0.3)',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Georgia',
        fontSize: 22,
        fontWeight: '700',
    },
    clearButton: {
        fontSize: 15,
        fontWeight: '500',
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 24,
    },
    categoryChip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
        borderWidth: 1,
        gap: 8,
    },
    categoryEmoji: {
        fontSize: 18,
    },
    categoryLabel: {
        fontSize: 15,
        fontWeight: '600',
    },
    doneButton: {
        height: 52,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneText: {
        fontSize: 17,
        fontWeight: '700',
    },
});

export default FilterActionSheet;
