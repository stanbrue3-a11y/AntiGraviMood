import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { InteractivePriceGauge } from '../../components/common/InteractivePriceGauge';
import { HorizontalTimeSlider } from '../../components/common/HorizontalTimeSlider';
import { PLACE_CATEGORIES } from '../../stores/usePlacesStore';

type Props = {
    visible: boolean;
    onClose: () => void;
    selectedPrice: number | null;
    setSelectedPrice: (p: number | null) => void;
    timeRange: any;
    setTimeRange: (t: any) => void;
    selectedCategories: string[];
    toggleCategory: (c: string) => void;
};

// Reusing Map Constants for consistency
const CATEGORY_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
    'bar': 'wine',
    'café': 'cafe',
    'restaurant': 'restaurant',
    'club': 'musical-notes',
    'espace-culturel': 'color-palette',
    'parc': 'leaf',
    'museum': 'library',
    'workshop': 'cut',
    'exhibition': 'images',
};

export const DiscoverFilters = ({
    visible, onClose,
    selectedPrice, setSelectedPrice,
    timeRange, setTimeRange,
    selectedCategories, toggleCategory
}: Props) => {

    return (
        <Modal visible={visible} transparent animationType="fade">
            <BlurView intensity={20} tint="dark" style={styles.modalWrap}>
                <Pressable style={styles.overlay} onPress={onClose} />

                <View style={styles.cardContainer}>
                    <Text style={styles.cardTitle}>Filtres</Text>

                    {/* Budget Section */}
                    <Text style={styles.sectionTitle}>Budget Max</Text>
                    <InteractivePriceGauge
                        selectedPrice={selectedPrice}
                        onPriceChange={setSelectedPrice}
                    />

                    {/* Availability Section */}
                    <Text style={styles.sectionTitle}>Horaire de sortie</Text>
                    <HorizontalTimeSlider
                        timeRange={timeRange}
                        onTimeRangeChange={setTimeRange}
                    />

                    <Text style={styles.sectionTitle}>Types de lieux</Text>

                    <View style={styles.cardGrid}>
                        {PLACE_CATEGORIES.map(({ key, label }) => {
                            const on = selectedCategories.includes(key);
                            const iconName = CATEGORY_ICONS[key] || 'ellipse-outline';
                            const COLORS = { chill: '#8ccaf7', festif: '#ffab60', culturel: '#c499ff' };

                            const getCategoryColors = (k: string): string[] => {
                                switch (k) {
                                    case 'bar':
                                    case 'restaurant': return [COLORS.chill, COLORS.festif];
                                    case 'club': return [COLORS.festif, COLORS.festif];
                                    case 'museum':
                                    case 'exhibition':
                                    case 'workshop':
                                    case 'espace-culturel': return [COLORS.culturel, COLORS.culturel];
                                    case 'parc':
                                    case 'café': return [COLORS.chill, COLORS.chill];
                                    default: return ['#374151', '#374151'];
                                }
                            };

                            const gradientColors = getCategoryColors(key);
                            const isMixed = key === 'bar' || key === 'restaurant';
                            const finalColors = isMixed
                                ? [gradientColors[0], gradientColors[0], gradientColors[1], gradientColors[1]]
                                : gradientColors;
                            const finalLocations = isMixed ? [0, 0.5, 0.5, 1] : undefined;

                            return (
                                <Pressable key={key} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); toggleCategory(key); }}
                                    style={[
                                        styles.cardItem,
                                        on ?
                                            { borderColor: 'transparent' } :
                                            { backgroundColor: '#fff', borderColor: '#E5E7EB', borderWidth: 1 }
                                    ]}>

                                    {on && (
                                        <LinearGradient
                                            colors={finalColors as any}
                                            locations={finalLocations as any}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            style={StyleSheet.absoluteFill}
                                        />
                                    )}

                                    <Ionicons name={iconName} size={20} color={on ? "#fff" : "#374151"} style={{ marginRight: 8, zIndex: 1 }} />
                                    <Text style={[styles.cardItemLabel, { color: on ? "#fff" : "#374151", zIndex: 1 }]}>{label}</Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}

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
    sectionTitle: {
        fontSize: 16, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '700', color: '#374151',
        alignSelf: 'flex-start', marginBottom: 16, marginTop: 4
    },
    cardGrid: {
        flexDirection: 'row', flexWrap: 'wrap',
        gap: 12, justifyContent: 'space-between',
        width: '100%'
    },
    cardItem: {
        width: '47%', height: 48,
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3
    },
    cardItemLabel: { fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '700', fontSize: 13 }, // slightly smaller font for safety
});
