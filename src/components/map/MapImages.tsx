import React, { useMemo } from 'react';
import { View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle, G } from 'react-native-svg';

// --- SVG HELPERS ---
const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
};

const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
        "M", x, y,
        "L", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "Z"
    ].join(" ");
};

// --- CONSTANTS ---
const CATEGORIES = ['bar', 'cafe', 'restaurant', 'club', 'espace-culturel', 'parc', 'museum', 'workshop', 'exhibition', 'other'];
const MOODS = ['chill', 'festif', 'culturel'];

const CLUSTER_TYPES = [
    // A. PURE (100%)
    { id: 'chill-pure', colors: ['#8ccaf7', '#8ccaf7'] },
    { id: 'festif-pure', colors: ['#ffab60', '#ffab60'] },
    { id: 'culturel-pure', colors: ['#c499ff', '#c499ff'] },

    // B. DOMINANT (66% / 33%)
    { id: 'chill-festif', colors: ['#8ccaf7', '#ffab60'] },
    { id: 'chill-culturel', colors: ['#8ccaf7', '#c499ff'] },

    { id: 'festif-chill', colors: ['#ffab60', '#8ccaf7'] },
    { id: 'festif-culturel', colors: ['#ffab60', '#c499ff'] },

    { id: 'culturel-chill', colors: ['#c499ff', '#8ccaf7'] },
    { id: 'culturel-festif', colors: ['#c499ff', '#ffab60'] },

    // C. EQUAL SPLIT (50% / 50%)
    { id: 'chill-festif-equal', colors: ['#8ccaf7', '#ffab60'] },
    { id: 'chill-culturel-equal', colors: ['#8ccaf7', '#c499ff'] },
    { id: 'festif-culturel-equal', colors: ['#ffab60', '#c499ff'] },

    // D. BALANCED (True Tricolor Mix)
    { id: 'balanced', colors: ['#8ccaf7', '#ffab60', '#c499ff'] },
];

export const MapImages = React.memo(() => {
    // Memoize the template keys
    const templates = useMemo(() => {
        const temps: { id: string, category: string, mood: string }[] = [];
        MOODS.forEach(mood => {
            CATEGORIES.forEach(cat => {
                temps.push({ id: `${cat}-${mood}`, category: cat, mood });
            });
        });
        return temps;
    }, []);

    return (
        <Mapbox.Images>
            {templates.map(t => {
                // Hardcode colors to guarantee value
                let color = '#888';
                if (t.mood === 'chill') color = '#8ccaf7';
                else if (t.mood === 'festif') color = '#ffab60';
                else if (t.mood === 'culturel') color = '#c499ff';

                // Icon Mapping
                let icon = 'ellipse';
                const cat = t.category;
                if (cat === 'bar') icon = 'wine';
                else if (cat === 'cafe' || cat === 'café') icon = 'cafe';
                else if (cat === 'restaurant') icon = 'restaurant';
                else if (cat === 'club') icon = 'musical-notes';
                else if (cat === 'espace-culturel') icon = 'easel';
                else if (cat === 'parc') icon = 'leaf';
                else if (cat === 'museum') icon = 'library';
                else if (cat === 'workshop') icon = 'hammer';
                else if (cat === 'exhibition') icon = 'glasses';

                return (
                    <Mapbox.Image key={t.id} name={t.id}>
                        <View
                            style={{
                                width: 32, height: 32,
                                alignItems: 'center', justifyContent: 'center'
                            }}
                            collapsable={false}
                        >
                            <View
                                style={{
                                    width: 32, height: 32, borderRadius: 16,
                                    backgroundColor: 'white',
                                    alignItems: 'center', justifyContent: 'center'
                                }}
                                collapsable={false}
                            >
                                <View
                                    style={{
                                        width: 26, height: 26, borderRadius: 13,
                                        backgroundColor: color,
                                        alignItems: 'center', justifyContent: 'center'
                                    }}
                                    collapsable={false}
                                >
                                    <Ionicons name={icon as any} size={14} color="white" />
                                </View>
                            </View>
                        </View>
                    </Mapbox.Image>
                );
            })}

            {/* DUAL LAYER ASSETS: STANDALONE ICONS (White, Transparent BG) ⚪ */}
            {CATEGORIES.map(cat => {
                let icon = 'ellipse';
                if (cat === 'bar') icon = 'wine';
                else if (cat === 'cafe' || cat === 'café') icon = 'cafe';
                else if (cat === 'restaurant') icon = 'restaurant';
                else if (cat === 'club') icon = 'musical-notes';
                else if (cat === 'espace-culturel') icon = 'easel';
                else if (cat === 'parc') icon = 'leaf';
                else if (cat === 'museum') icon = 'library';
                else if (cat === 'workshop') icon = 'hammer';
                else if (cat === 'exhibition') icon = 'glasses';

                return (
                    <Mapbox.Image key={`icon-${cat}`} name={`icon-${cat}`}>
                        <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} collapsable={false}>
                            <Ionicons name={icon as any} size={14} color="white" />
                        </View>
                    </Mapbox.Image>
                );
            })}

            {/* B. CLUSTER TEMPLATES (SVG PIE CHARTS V4 - HIGH FIDELITY) 🧠 */}
            {CLUSTER_TYPES.map(type => {
                const isPure = type.id.endsWith('pure');
                const isBalanced = type.id === 'balanced';
                const isEqual = type.id.includes('equal');

                return (
                    <Mapbox.Image key={type.id} name={`cluster-${type.id}`}>
                        <View style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }} collapsable={false}>
                            <Svg height="60" width="60" viewBox="0 0 44 44">
                                <Circle cx="22" cy="22" r="22" fill="white" />{/* Border */}
                                <G origin="22, 22" rotation="0">
                                    {isPure && (
                                        <Circle cx="22" cy="22" r="20" fill={type.colors[0]} />
                                    )}

                                    {!isPure && !isBalanced && !isEqual && (
                                        <>
                                            {/* Primary (65% = 234 deg) */}
                                            <Path d={describeArc(22, 22, 20, 0, 234)} fill={type.colors[0]} />
                                            {/* Secondary (35% = 126 deg) */}
                                            <Path d={describeArc(22, 22, 20, 234, 360)} fill={type.colors[1]} />
                                        </>
                                    )}

                                    {isEqual && (
                                        <>
                                            {/* 50/50 Split (180 deg each) */}
                                            <Path d={describeArc(22, 22, 20, 0, 180)} fill={type.colors[0]} />
                                            <Path d={describeArc(22, 22, 20, 180, 360)} fill={type.colors[1]} />
                                        </>
                                    )}

                                    {isBalanced && (
                                        <>
                                            <Path d={describeArc(22, 22, 20, 0, 120)} fill={type.colors[0]} />
                                            <Path d={describeArc(22, 22, 20, 120, 240)} fill={type.colors[1]} />
                                            <Path d={describeArc(22, 22, 20, 240, 360)} fill={type.colors[2]} />
                                        </>
                                    )}
                                </G>
                            </Svg>
                        </View>
                    </Mapbox.Image>
                );
            })}

            {/* Selected Pin Template */}
            <Mapbox.Image name="selected-pin-marker">
                <View style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        width: 40, height: 40, borderRadius: 20, backgroundColor: 'white',
                        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, elevation: 6
                    }}>
                        {/* Just a clean white POP circle around the pin */}
                    </View>
                </View>
            </Mapbox.Image>
        </Mapbox.Images>
    );
});
