
/**
 * MoodMap Paris - The Cockpit (Filter Sheet V3) 🎛️
 * 
 * Replaces the old Category-list filter with a powerful control panel.
 * - Zone 1: Moods (Vibe)
 * - Zone 2: Power-Ups (Terrasse, HH, Open Now)
 * - Zone 3: Geography (Arrondissements)
 */

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, ScrollView, Switch, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../design';
import { useSearchStore } from '../../stores/searchStore';
import { MoodType } from '../../types/model';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface FilterActionSheetProps {
    visible: boolean;
    onClose: () => void;
}

const DISTRICTS = Array.from({ length: 20 }, (_, i) => i + 1);

export function FilterActionSheet({ visible, onClose }: FilterActionSheetProps) {
    const { theme } = useTheme();

    const {
        selectedMoods,
        toggleMood,
        filterHappyHour,
        setFilterHappyHour,
        filterTerrace,
        setFilterTerrace,
        filterOpenNow,
        setFilterOpenNow,
        selectedDistricts,
        setSelectedDistricts,
        clearFilters
    } = useSearchStore();

    // HANDLERS
    const handleToggleDistrict = (d: number) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (selectedDistricts?.includes(d)) {
            setSelectedDistricts(selectedDistricts.filter((x: number) => x !== d));
        } else {
            setSelectedDistricts([...(selectedDistricts || []), d]);
        }
    };

    const handleClear = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        clearFilters();
    };

    const handleClose = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onClose();
    };

    // SUB-COMPONENTS
    const MoodCard = ({ mood, label, emoji }: { mood: MoodType, label: string, emoji: string }) => {
        const isActive = selectedMoods.includes(mood);
        return (
            <Pressable
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    toggleMood(mood);
                }}
                style={[
                    styles.moodCard,
                    {
                        backgroundColor: isActive ? theme.text.primary : theme.surfaceElevated,
                        borderColor: isActive ? theme.text.primary : theme.border
                    }
                ]}
            >
                <Text style={styles.moodEmoji}>{emoji}</Text>
                <Text style={[
                    styles.moodLabel,
                    { color: isActive ? theme.background : theme.text.primary }
                ]}>{label}</Text>
            </Pressable>
        );
    };

    const PowerUp = ({ label, icon, value, onChange }: { label: string, icon: any, value: boolean, onChange: (v: boolean) => void }) => (
        <View style={[styles.powerUpRow, { borderBottomColor: theme.border }]}>
            <View style={styles.powerUpLeft}>
                <View style={[styles.iconBox, { backgroundColor: theme.surfaceElevated }]}>
                    <Ionicons name={icon} size={20} color={theme.text.primary} />
                </View>
                <Text style={[styles.powerUpLabel, { color: theme.text.primary }]}>{label}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={(v) => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    onChange(v);
                }}
                trackColor={{ false: theme.border, true: theme.primary }}
                thumbColor={'#fff'}
            />
        </View>
    );

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <Pressable style={styles.backdrop} onPress={handleClose} />

                <BlurView intensity={90} tint="dark" style={[styles.sheet, { backgroundColor: theme.surface }]}>
                    <View style={styles.handle} />

                    {/* HEADER */}
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: theme.text.primary }]}>Cockpit</Text>
                        <Pressable onPress={handleClear}>
                            <Text style={[styles.clearBtn, { color: theme.text.secondary }]}>Réinitialiser</Text>
                        </Pressable>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

                        {/* ZONE 1: MOODS */}
                        <Text style={[styles.sectionTitle, { color: theme.text.secondary }]}>VIBE</Text>
                        <View style={styles.moodGrid}>
                            <MoodCard mood="festif" label="Festif" emoji="✨" />
                            <MoodCard mood="chill" label="Chill" emoji="☁️" />
                            <MoodCard mood="culturel" label="Culture" emoji="🎨" />
                        </View>

                        {/* ZONE 2: POWER-UPS */}
                        <Text style={[styles.sectionTitle, { color: theme.text.secondary, marginTop: 24 }]}>FILTRES D'ÉLITE</Text>
                        <View style={[styles.powerUpContainer, { backgroundColor: theme.surfaceElevated + '40' }]}>
                            <PowerUp label="Happy Hour en cours" icon="beer-outline" value={filterHappyHour} onChange={setFilterHappyHour} />
                            <PowerUp label="Terrasse Ensoleillée" icon="sunny-outline" value={filterTerrace} onChange={setFilterTerrace} />
                            <PowerUp label="Ouvert Maintenant" icon="time-outline" value={filterOpenNow} onChange={setFilterOpenNow} />
                        </View>

                        {/* ZONE 3: GEOGRAPHY (Grid for now) */}
                        <Text style={[styles.sectionTitle, { color: theme.text.secondary, marginTop: 24 }]}>ARRONDISSEMENT</Text>
                        <View style={styles.districtGrid}>
                            {DISTRICTS.map(d => {
                                const isSel = selectedDistricts.includes(d);
                                return (
                                    <Pressable
                                        key={d}
                                        onPress={() => handleToggleDistrict(d)}
                                        style={[
                                            styles.districtChip,
                                            {
                                                backgroundColor: isSel ? theme.text.primary : theme.surfaceElevated,
                                                borderColor: isSel ? theme.text.primary : theme.border
                                            }
                                        ]}
                                    >
                                        <Text style={[
                                            styles.districtText,
                                            { color: isSel ? theme.background : theme.text.secondary }
                                        ]}>{d}e</Text>
                                    </Pressable>
                                );
                            })}
                        </View>

                    </ScrollView>

                    {/* FOOTER BUTTON */}
                    <Pressable
                        onPress={handleClose}
                        style={[styles.applyBtn, { backgroundColor: theme.text.primary, marginBottom: 30 }]}
                    >
                        <Text style={[styles.applyText, { color: theme.background }]}>Explorer</Text>
                    </Pressable>

                </BlurView>
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
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    sheet: {
        height: '85%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 20,
        paddingTop: 16,
        overflow: 'hidden'
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: 'rgba(128,128,128,0.4)',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Georgia',
        fontWeight: '700',
    },
    clearBtn: {
        fontSize: 15,
        fontWeight: '600',
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 1,
        marginBottom: 12,
        opacity: 0.7,
    },
    moodGrid: {
        flexDirection: 'row',
        gap: 12,
    },
    moodCard: {
        flex: 1,
        height: 100,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    moodEmoji: {
        fontSize: 32,
    },
    moodLabel: {
        fontSize: 15,
        fontWeight: '600',
    },
    powerUpContainer: {
        borderRadius: 24,
        overflow: 'hidden',
    },
    powerUpRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    powerUpLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconBox: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    powerUpLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
    districtGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    districtChip: {
        width: (width - 40 - 32) / 5, // 5 per row roughly
        aspectRatio: 1,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    districtText: {
        fontWeight: '600',
    },
    applyBtn: {
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    applyText: {
        fontSize: 17,
        fontWeight: '700',
    },
});

export default FilterActionSheet;
