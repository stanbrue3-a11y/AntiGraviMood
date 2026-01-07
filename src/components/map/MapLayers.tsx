import React, { useMemo, forwardRef } from 'react';
import Mapbox from '@rnmapbox/maps';

type Props = {
    placesGeoJSON: any;
    onShapeSourcePress: (e: any) => void;
    selectedMoods: string[];
};

const MapLayersComponent = forwardRef<Mapbox.ShapeSource, Props>(({ placesGeoJSON, onShapeSourcePress, selectedMoods }, ref) => {

    // 1. PIN OPACITY: Smooth fade out
    const pinOpacity = useMemo(() => {
        if (selectedMoods.length === 0) return 1;
        return ['case',
            ['in', ['get', 'mood'], ['literal', selectedMoods]],
            1,
            0.15 // Slightly visible when filtered out, or 0? 0.15 feels "inactive" but present.
        ];
    }, [selectedMoods]);

    // 2. CLUSTER OPACITY
    const clusterOpacity = useMemo(() => {
        if (selectedMoods.length === 0) return 1;
        const terms = selectedMoods.map(m => ['get', `${m}_count`]);
        if (terms.length === 0) return 1;
        const sumExpression = ['+', ...terms];
        return ['case',
            ['>', sumExpression, 0],
            1,
            0.15
        ];
    }, [selectedMoods]);



    // --- CLUSTER IMAGES LOGIC ---
    const getClusterImage = [
        'case',
        // 1. PURE (>85%)
        ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.85], 'cluster-chill-pure',
        ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.85], 'cluster-festif-pure',
        ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.85], 'cluster-culturel-pure',

        // 2. DOMINANT (>50%)
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

        // 3. EQUAL SPLITS (>85% together)
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'festif_count']], ['get', 'point_count']], 0.85], 'cluster-chill-festif-equal',
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-chill-culturel-equal',
        ['>', ['/', ['+', ['get', 'festif_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-festif-culturel-equal',

        // 4. BALANCED
        'cluster-balanced'
    ];

    return (
        <Mapbox.ShapeSource
            id="placesSource"
            ref={ref}
            shape={placesGeoJSON as any}
            cluster={true}
            clusterRadius={28} // Increased slightly for better separation
            clusterMaxZoomLevel={16}
            clusterProperties={{
                chill_count: ['+', ['case', ['==', ['get', 'mood'], 'chill'], 1, 0]],
                festif_count: ['+', ['case', ['==', ['get', 'mood'], 'festif'], 1, 0]],
                culturel_count: ['+', ['case', ['==', ['get', 'mood'], 'culturel'], 1, 0]]
            }}
            onPress={onShapeSourcePress}
        >
            {/* 1. CLUSTERS */}
            <Mapbox.SymbolLayer
                id="clusters-merged"
                filter={['has', 'point_count']}
                style={{
                    iconImage: getClusterImage as any,
                    iconAllowOverlap: true,
                    iconIgnorePlacement: true,
                    iconSize: 0.7, // Slightly larger for better touch target
                    iconOpacity: clusterOpacity as any,
                    iconOpacityTransition: { duration: 400, delay: 0 },
                    // RE MOVED iconSizeTransition as it caused runtime error

                    textField: ['get', 'point_count'],
                    textSize: 12,
                    textColor: '#ffffff',
                    textAllowOverlap: true,
                    textIgnorePlacement: true,
                    textOpacity: clusterOpacity as any,
                    textOpacityTransition: { duration: 400, delay: 0 },

                    symbolSortKey: ['get', 'point_count']
                } as any}
            />

            {/* 2. PINS - Background Circle */}
            <Mapbox.CircleLayer
                id="pin-backgrounds"
                filter={['!', ['has', 'point_count']]}
                style={{
                    circleColor: [
                        'match', ['get', 'mood'],
                        'chill', '#8ccaf7',
                        'festif', '#ffab60',
                        'culturel', '#c499ff',
                        '#888' // default
                    ],
                    circleRadius: [
                        'case',
                        ['in', ['get', 'mood'], ['literal', selectedMoods]],
                        18, // Normal Radius
                        0   // Shrink to zero when filtered (Effectively hides it)
                    ],
                    circleOpacity: 1, // utilize radius for visibility
                    circleRadiusTransition: { duration: 400, delay: 0 }, // SMOOTH FILTERING
                    circleColorTransition: { duration: 400, delay: 0 },

                    circleStrokeWidth: 2,
                    circleStrokeColor: '#ffffff',
                    circleStrokeOpacityTransition: { duration: 400, delay: 0 },

                    circlePitchAlignment: 'map'
                }}
            />

            {/* 3. PINS - Icon */}
            <Mapbox.SymbolLayer
                id="pin-icons"
                filter={['!', ['has', 'point_count']]}
                style={{
                    iconImage: ['concat', 'icon-', ['get', 'category_icon']],
                    iconAllowOverlap: false, // ENABLE COLLISION FADING (Butter) 🧈
                    iconIgnorePlacement: false,
                    iconSize: 1,

                    // Smooth Transition for Filtering
                    iconOpacity: pinOpacity as any,
                    iconOpacityTransition: { duration: 500, delay: 0 },

                    iconAnchor: 'center'
                } as any}
            />
        </Mapbox.ShapeSource>
    );
});

MapLayersComponent.displayName = 'MapLayers';

export const MapLayers = React.memo(MapLayersComponent);
