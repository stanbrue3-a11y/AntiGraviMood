import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../design';
import { PriceSlider } from '../ui/PriceSlider';
import { TimeRangeSlider } from '../ui/TimeRangeSlider';
import { usePlacesStore } from '../../stores/usePlacesStore';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

interface FilterSheetProps {
    sheetRef: React.RefObject<BottomSheet | null>;
    onClose: () => void;
}

export const FilterSheet = ({ sheetRef, onClose }: FilterSheetProps) => {
    const { theme } = useTheme();

    // Store Access
    const selectedPrice = usePlacesStore(state => state.selectedPrice);
    const setSelectedPrice = usePlacesStore(state => state.setSelectedPrice);

    // We need to implement TimeWindow in store properly, but for now we link to local state or mock
    // Assuming store will be updated. Let's use local state for the slider and commit on close?
    // Or direct connection.
    // Since TimeWindow isn't in store yet, let's mock it locally as "Open Now" logic
    // Actually, user wants "Time Range". We should update store type in next step if not done.
    // For this step, I'll use local state to demonstrate UI, and update store later.
    const [timeRange, setTimeRange] = React.useState<{ start: number, end: number }>({ start: 18, end: 23 });

    const snapPoints = useMemo(() => ['50%', '75%'], []);

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                opacity={0.5}
            />
        ),
        []
    );

    const handleReset = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setSelectedPrice(null);
        setTimeRange({ start: 18, end: 23 }); // Default
        onClose();
    };

    return (
        <BottomSheet
            ref={sheetRef}
            index={-1} // Closed by default
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            enablePanDownToClose
            onClose={onClose}
            backgroundStyle={{ backgroundColor: '#fff' }}
            handleIndicatorStyle={{ backgroundColor: '#D1D5DB' }}
        >
            <BottomSheetView style={styles.contentContainer}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Filtres Avancés</Text>
                    <Pressable onPress={handleReset}>
                        <Text style={styles.resetTxt}>Réinitialiser</Text>
                    </Pressable>
                </View>

                {/* Price Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="wallet-outline" size={20} color="#374151" />
                        <Text style={styles.sectionTitle}>Budget</Text>
                    </View>
                    <PriceSlider
                        value={selectedPrice}
                        onChange={(val) => {
                            // Direct store update for responsiveness
                            setSelectedPrice(val);
                        }}
                    />
                </View>

                {/* Time Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="time-outline" size={20} color="#374151" />
                        <Text style={styles.sectionTitle}>Horaire</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <TimeRangeSlider
                            startHour={timeRange.start}
                            endHour={timeRange.end}
                            onChange={(s, e) => setTimeRange({ start: s, end: e })}
                        />
                    </View>
                </View>

                {/* Footer Button */}
                <View style={styles.footer}>
                    <Pressable style={styles.applyBtn} onPress={() => {
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                        onClose();
                    }}>
                        <Text style={styles.applyBtnText}>Voir les résultats</Text>
                    </Pressable>
                </View>

            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        color: '#1F2937'
    },
    resetTxt: {
        fontSize: 14,
        color: '#6B7280',
        textDecorationLine: 'underline'
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },
    footer: {
        marginTop: 'auto',
        marginBottom: 32
    },
    applyBtn: {
        backgroundColor: '#1F2937',
        paddingVertical: 18,
        borderRadius: 30, // Pill shape
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    },
    applyBtnText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    }
});
