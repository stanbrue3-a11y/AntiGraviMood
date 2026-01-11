import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface DistrictSelectorProps {
    selectedDistricts: number[]; // Empty means ALL
    onToggle: (district: number) => void;
    onReset: () => void;
    onClose: () => void; // To go back
}

export const DistrictSelector = ({ selectedDistricts, onToggle, onReset, onClose }: DistrictSelectorProps) => {

    // Generate districts 1-20
    const districts = Array.from({ length: 20 }, (_, i) => i + 1);

    const handleToggle = (d: number) => {
        Haptics.selectionAsync();
        onToggle(d);
    };

    const handleReset = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onReset();
    };

    return (
        <View style={styles.container}>
            {/* Header for Drill Down */}
            <View style={styles.header}>
                <Pressable onPress={onClose} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </Pressable>
                <Text style={styles.title}>Arrondissements</Text>
                <View style={{ width: 24 }} />
            </View>

            <BottomSheetScrollView contentContainerStyle={styles.scrollContent}>

                {/* Reset / All Button */}
                <Pressable
                    style={[styles.allBtn, selectedDistricts.length === 0 && styles.allBtnActive]}
                    onPress={handleReset}
                >
                    <Text style={[styles.allBtnText, selectedDistricts.length === 0 && styles.allBtnTextActive]}>
                        TOUT PARIS
                    </Text>
                </Pressable>

                {/* Grid */}
                <View style={styles.grid}>
                    {districts.map((d) => {
                        const isSelected = selectedDistricts.includes(d);
                        return (
                            <Pressable
                                key={d}
                                style={[styles.cell, isSelected && styles.cellActive]}
                                onPress={() => handleToggle(d)}
                            >
                                <Text style={[styles.cellText, isSelected && styles.cellTextActive]}>
                                    {d}
                                    <Text style={styles.ordinal}>{d === 1 ? 'er' : 'e'}</Text>
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </BottomSheetScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.doneBtn} onPress={onClose}>
                    <Text style={styles.doneBtnText}>Valider ({selectedDistricts.length === 0 ? 'Tout' : selectedDistricts.length})</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E7EB',
    },
    backBtn: {
        padding: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        color: '#1F2937'
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 100 // Extra padding for footer
    },
    allBtn: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    allBtnActive: {
        backgroundColor: '#1F2937',
    },
    allBtnText: {
        fontWeight: '700',
        color: '#4B5563',
        letterSpacing: 1
    },
    allBtnTextActive: {
        color: '#fff'
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center'
    },
    cell: {
        width: 64,
        height: 64,
        borderRadius: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1
    },
    cellActive: {
        backgroundColor: '#1F2937', // Dark theme primary
        borderColor: '#1F2937',
    },
    cellText: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        color: '#374151'
    },
    cellTextActive: {
        color: '#fff'
    },
    ordinal: {
        fontSize: 10,
        lineHeight: 12,
    },
    footer: {
        padding: 24,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#E5E7EB',
    },
    doneBtn: {
        backgroundColor: '#1F2937',
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: 'center'
    },
    doneBtnText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    }
});
