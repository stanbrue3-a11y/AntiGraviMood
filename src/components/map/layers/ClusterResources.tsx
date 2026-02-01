import React, { useMemo } from 'react';
import Mapbox from '@rnmapbox/maps';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { moodColors } from '../../../design/tokens/colors';

// --- COLORS ---
const MOOD_COLORS = {
    chill: moodColors.chill.primary,
    festif: moodColors.festif.primary,
    culturel: moodColors.culturel.primary
};

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

// --- CLUSTER DEFINITIONS ---
const CLUSTER_TYPES = [
    { id: 'chill-pure', colors: [moodColors.chill.primary, moodColors.chill.primary] },
    { id: 'festif-pure', colors: [moodColors.festif.primary, moodColors.festif.primary] },
    { id: 'culturel-pure', colors: [moodColors.culturel.primary, moodColors.culturel.primary] },
    { id: 'chill-festif', colors: [moodColors.chill.primary, moodColors.festif.primary] },
    { id: 'chill-culturel', colors: [moodColors.chill.primary, moodColors.culturel.primary] },
    { id: 'festif-chill', colors: [moodColors.festif.primary, moodColors.chill.primary] },
    { id: 'festif-culturel', colors: [moodColors.festif.primary, moodColors.culturel.primary] },
    { id: 'culturel-chill', colors: [moodColors.culturel.primary, moodColors.chill.primary] },
    { id: 'culturel-festif', colors: [moodColors.culturel.primary, moodColors.festif.primary] },
    { id: 'chill-festif-equal', colors: [moodColors.chill.primary, moodColors.festif.primary] },
    { id: 'chill-culturel-equal', colors: [moodColors.chill.primary, moodColors.culturel.primary] },
    { id: 'festif-culturel-equal', colors: [moodColors.festif.primary, moodColors.culturel.primary] },
    { id: 'balanced', colors: [moodColors.chill.primary, moodColors.festif.primary, moodColors.culturel.primary] },
];

export const getClusterImage = [
    'case',
    // 1. PURE (>85%)
    ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.85], 'cluster-chill-pure',
    ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.85], 'cluster-festif-pure',
    ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.85], 'cluster-culturel-pure',

    // 2. DOMINANT (>50% Major)
    ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.5],
    ['case',
        ['>', ['get', 'festif_count'], ['get', 'culturel_count']], 'cluster-chill-festif',
        'cluster-chill-culturel'
    ],
    ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.5],
    ['case',
        ['>', ['get', 'chill_count'], ['get', 'culturel_count']], 'cluster-festif-chill',
        'cluster-festif-culturel'
    ],
    ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.5],
    ['case',
        ['>', ['get', 'chill_count'], ['get', 'festif_count']], 'cluster-culturel-chill',
        'cluster-culturel-festif'
    ],

    // 3. EQUAL SPLITS (>85% combined)
    ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'festif_count']], ['get', 'point_count']], 0.85], 'cluster-chill-festif-equal',
    ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-chill-culturel-equal',
    ['>', ['/', ['+', ['get', 'festif_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-festif-culturel-equal',

    // 4. BALANCED
    'cluster-balanced'
];

export const ClusterImages = React.memo(() => {
    return (
        <>
            {CLUSTER_TYPES.map(type => {
                const isPure = type.id.endsWith('pure');
                const isBalanced = type.id === 'balanced';
                const isEqual = type.id.includes('equal');

                return (
                    <Mapbox.Image key={type.id} name={`cluster-${type.id}`}>
                        <Svg height="42" width="42" viewBox="0 0 44 44">
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
                            <Circle cx="22" cy="22" r="20.5" stroke="white" strokeWidth="1" fill="none" />
                        </Svg>
                    </Mapbox.Image>
                );
            })}
        </>
    );
});

export const ClusterLayers = React.memo(() => {
    return (
        <>
            <Mapbox.SymbolLayer
                id="clusters"
                sourceID="placesSource"
                filter={['has', 'point_count']}
                style={{
                    iconImage: getClusterImage as any,
                    iconAllowOverlap: true,
                    iconIgnorePlacement: true,
                    iconSize: 1,
                    iconOpacity: 1,
                    // Transition disabled for crispness
                } as any}
            />
            <Mapbox.SymbolLayer
                id="cluster-count"
                sourceID="placesSource"
                filter={['has', 'point_count']}
                style={{
                    textField: ['to-string', ['get', 'point_count']],
                    textSize: 13,
                    textColor: '#FFFFFF',
                    textFont: ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    textAllowOverlap: true,
                    textIgnorePlacement: true,
                    textAnchor: 'center',
                    textHaloWidth: 0,
                    // Transition disabled for crispness
                } as any}
            />
        </>
    );
});
