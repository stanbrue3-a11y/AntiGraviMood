import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MoodRowProps {
    label: string;
    color: string;
    percent: number;
    trackColor: string;
    textColor: string;
}

export const MoodRow = ({ label, color, percent, trackColor, textColor }: MoodRowProps) => (
    <View style={styles.moodRow}>
        <View style={styles.moodLabelRow}>
            <View style={styles.leftContent}>
                <View style={[styles.dot, { backgroundColor: color }]} />
                <Text style={[styles.moodName, { color: textColor }]}>{label}</Text>
            </View>
            <Text style={styles.moodPct}>{percent}%</Text>
        </View>
        <View style={styles.moodBarTrack}>
            <View style={[styles.moodBarFill, { backgroundColor: trackColor, width: '100%' }]} />
            <View style={[styles.moodBarFill, { backgroundColor: color, opacity: 0.8, width: `${percent}%` }]} />
        </View>
    </View>
);

const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    moodRow: { marginBottom: 14 },
    moodLabelRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 },
    leftContent: { flexDirection: 'row', alignItems: 'center' },
    dot: { width: 8, height: 8, borderRadius: 4, marginRight: 8 },
    moodName: { fontSize: 13, fontWeight: '600', letterSpacing: 0.2 },
    moodBarTrack: { height: 6, borderRadius: 3, position: 'relative', overflow: 'hidden' },
    moodBarFill: { position: 'absolute', top: 0, left: 0, bottom: 0, borderRadius: 3 },
    moodPct: { fontFamily: SERIF_FONT, fontSize: 14, fontWeight: '700', color: '#FFFFFF' }
});
