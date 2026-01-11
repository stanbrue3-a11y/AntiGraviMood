import React from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedProps, withRepeat, withTiming } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

interface ParisMapSelectorProps {
    selectedDistricts: number[];
    onToggle: (district: number) => void;
}

// PREMIUM PALETTE
const MOOD_COLORS = {
    chill: '#8ccaf7',
    festif: '#ffab60',
    culturel: '#c499ff',
};

// Simplified SVG Paths for Districts (Clean Geometry - Enlarged Center)
const DISTRICT_PATHS: { id: number; d: string; cx: number; cy: number }[] = [
    // Center - 1er to 4e (Enlarged)
    // 1: Expanded Left/Down
    { id: 1, d: "M148,138 L174,132 L180,152 L178,170 L160,175 L145,160 Z", cx: 162, cy: 154 },
    // 2: Expanded Up
    { id: 2, d: "M174,132 L202,125 L212,142 L204,160 L180,152 Z", cx: 194, cy: 142 },
    // 3: Expanded Right/Up
    { id: 3, d: "M202,125 L232,120 L245,138 L238,165 L212,160 L204,160 L212,142 Z", cx: 224, cy: 144 },
    // 4: Expanded Right/Down
    { id: 4, d: "M178,170 L204,160 L212,160 L238,165 L232,192 L202,198 L175,188 Z", cx: 205, cy: 178 },

    // Left Bank - 5e, 6e, 7e (Pushed South/West)
    { id: 5, d: "M175,188 L202,198 L208,220 L185,235 L158,225 L155,195 L160,175 Z", cx: 180, cy: 212 },
    { id: 6, d: "M125,178 L145,160 L160,175 L155,195 L158,225 L130,235 L108,215 L112,188 Z", cx: 135, cy: 202 }, // Adjusted top-right to match 1
    { id: 7, d: "M72,158 L112,148 L125,178 L112,188 L108,215 L75,225 L52,195 L55,168 Z", cx: 88, cy: 185 }, // Mostly unchanged, maybe slight nudge

    // Right Bank West - 8e, 9e (Pushed North/West)
    // 8 touches 1 at 148,138.
    { id: 8, d: "M72,108 L118,95 L142,108 L148,138 L125,145 L112,148 L72,158 L58,135 Z", cx: 102, cy: 128 },
    // 9 touches 1 (148,138) and 2 (174,132).
    { id: 9, d: "M142,108 L172,102 L185,118 L174,132 L148,138 Z", cx: 162, cy: 120 },

    // Right Bank East - 10e, 11e (Pushed North/East)
    // 10 touches 2 (174,132 -> 202,125) and 3 (202,125 -> 232,120?). 
    // 3 is M202,125 L232,120 ... 
    { id: 10, d: "M172,102 L205,92 L228,105 L232,120 L202,125 L174,132 L185,118 Z", cx: 205, cy: 110 },
    // 11 touches 3 (232,120 -> 245,138 -> 238,165) and 4 (238,165 -> 232,192).
    // 4 is M178,170 ... L238,165 L232,192
    { id: 11, d: "M232,120 L268,95 L288,115 L285,162 L250,175 L238,165 L245,138 Z", cx: 260, cy: 135 },

    // Outer East - 12e, 20e (Outer ring mostly stable)
    { id: 12, d: "M250,175 L285,162 L315,185 L320,248 L275,275 L228,258 L225,215 L208,220 L202,198 L232,192 L238,165 Z", cx: 272, cy: 225 }, // Matches 4 & 5
    { id: 20, d: "M268,95 L308,78 L335,105 L325,155 L288,115 Z", cx: 302, cy: 112 },

    // Outer South - 13e, 14e, 15e
    { id: 13, d: "M185,235 L228,258 L232,298 L192,315 L148,295 L155,258 L158,225 Z", cx: 192, cy: 275 },
    { id: 14, d: "M108,215 L130,235 L155,258 L148,295 L105,308 L68,275 L75,235 Z", cx: 112, cy: 268 },
    { id: 15, d: "M32,188 L52,195 L75,225 L75,235 L68,275 L35,285 L12,238 L18,198 Z", cx: 48, cy: 242 },

    // Outer West - 16e
    { id: 16, d: "M12,128 L55,108 L72,108 L58,135 L72,158 L55,168 L52,195 L32,188 L8,158 Z", cx: 42, cy: 148 },

    // Outer North - 17e, 18e, 19e
    { id: 17, d: "M55,58 L118,42 L142,62 L142,108 L118,95 L72,108 L55,108 L38,82 Z", cx: 95, cy: 78 },
    { id: 18, d: "M142,42 L195,28 L228,48 L235,85 L205,92 L172,102 L142,108 L142,62 Z", cx: 182, cy: 68 },
    { id: 19, d: "M228,48 L275,35 L315,58 L308,78 L268,95 L228,105 L235,85 Z", cx: 272, cy: 68 },
];

const getDistrictMood = (id: number): 'chill' | 'festif' | 'culturel' => {
    if ([1, 4, 5, 6].includes(id)) return 'culturel';
    if ([2, 3, 10, 11, 18, 19, 20].includes(id)) return 'festif';
    return 'chill';
};


const AnimatedPath = Animated.createAnimatedComponent(Path);

const DistrictItem = ({ district, isSelected, onToggle }: { district: any, isSelected: boolean, onToggle: (id: number) => void }) => {
    const opacity = useSharedValue(1);

    React.useEffect(() => {
        if (isSelected) {
            opacity.value = withRepeat(
                withTiming(0.8, { duration: 1000 }),
                -1,
                true
            );
        } else {
            opacity.value = withTiming(1);
        }
    }, [isSelected]);

    const animatedProps = useAnimatedProps(() => ({
        opacity: opacity.value
    }));

    const mood = getDistrictMood(district.id);
    const fillColor = isSelected ? MOOD_COLORS[mood] : '#FFFFFF';
    const strokeColor = '#334155'; // Always Dark Graphite for "Sketch" look
    const strokeWidth = isSelected ? 2.5 : 1.5; // Thicker when selected

    return (
        <G
            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                // Direct call for responsiveness
                onToggle(district.id);
            }}
        >
            {/* District Shape */}
            <AnimatedPath
                d={district.d}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                animatedProps={animatedProps}
                strokeLinejoin="round"
                strokeLinecap="round" // Sketchy feel
            />

            {/* Number */}
            <SvgText
                x={district.cx}
                y={district.cy + 4}
                fill="#1E293B" // Always Dark for readability
                fontSize={isSelected ? "13" : "11"}
                fontFamily={Platform.OS === 'ios' ? 'Georgia' : 'serif'}
                fontWeight="bold"
                textAnchor="middle"
            >
                {district.id}
            </SvgText>
        </G>
    );
};

export const ParisMapSelector = React.memo(({ selectedDistricts, onToggle }: ParisMapSelectorProps) => {
    return (
        <View style={styles.container}>
            <Svg width="340" height="330" viewBox="0 0 340 330">
                {/* Seine River - Visible Blue */}
                <Path
                    d="M20,170 Q80,145 120,155 Q160,165 180,168 Q210,172 250,165 Q290,158 330,175"
                    stroke="#BAE6FD" // Beautiful Sky/River Blue
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    opacity={0.8}
                />

                {DISTRICT_PATHS.map((district) => (
                    <DistrictItem
                        key={district.id}
                        district={district}
                        isSelected={selectedDistricts.includes(district.id)}
                        onToggle={onToggle}
                    />
                ))}
            </Svg>

            {/* Text Minimal Legend */}
            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: MOOD_COLORS.culturel }]} />
                    <Text style={[styles.legendText, { color: MOOD_COLORS.culturel }]}>Culture</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: MOOD_COLORS.festif }]} />
                    <Text style={[styles.legendText, { color: MOOD_COLORS.festif }]}>Festif</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: MOOD_COLORS.chill }]} />
                    <Text style={[styles.legendText, { color: MOOD_COLORS.chill }]}>Chill</Text>
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    legendText: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    }
});
