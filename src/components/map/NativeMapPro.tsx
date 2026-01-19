import React, { useMemo, useRef, useCallback, useEffect } from 'react';
import Mapbox from '@rnmapbox/maps';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { Place } from '../../types/model';

type Props = {
    places: Place[];
    selectedMoods: string[];
    selectedCategories: string[];
    onPlacePress: (placeId: string, coordinates: [number, number]) => void;
    cameraRef?: any;
    highlightedPlaceId?: string | null;
};

// --- COLORS ---
const MOOD_COLORS = {
    chill: '#7ABCDC',
    festif: '#FFAB76',
    culturel: '#BC9EF2'
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

const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
};

export const NativeMapPro = React.memo(({ places, selectedMoods, selectedCategories, onPlacePress, cameraRef, highlightedPlaceId }: Props) => {
    const shapeSourceRef = useRef<Mapbox.ShapeSource>(null);
    const [activePin, setActivePin] = React.useState<number | null>(null);
    const [isBouncing, setIsBouncing] = React.useState(false);

    // External highlight effect
    useEffect(() => {
        if (highlightedPlaceId) {
            const numericId = hashCode(highlightedPlaceId);
            setActivePin(numericId);
            setIsBouncing(true);
            const timer = setTimeout(() => setIsBouncing(false), 500);
            return () => clearTimeout(timer);
        }
    }, [highlightedPlaceId]);

    // 1. DATA - Filtered GeoJSON for performance
    const placesGeoJSON = useMemo(() => {
        const features = places.map((place) => {
            const numericId = hashCode(place.id);
            const cat = place.category ? place.category.toLowerCase() : '';
            const sub = Array.isArray(place.subcategory) ? place.subcategory.map(s => s.toLowerCase()) : [];

            // 2. MOOD CALCULATION (Sync with Store logic)
            let mood: 'chill' | 'festif' | 'culturel' = 'chill';
            const CATEGORIES_CULTUREL = ['museum', 'exhibition', 'workshop', 'theatre', 'gallery', 'espace-culturel', 'monument', 'library'];

            if (CATEGORIES_CULTUREL.includes(cat) || sub.some(s => CATEGORIES_CULTUREL.includes(s))) {
                mood = 'culturel';
            } else if (cat === 'café' || cat === 'coffee-shop') {
                mood = 'chill';
            } else if (cat === 'club') {
                mood = 'festif';
            } else if (place.mood_scores) {
                const { chill, festif } = place.mood_scores;
                mood = (festif?.overall || 0) >= (chill?.overall || 0) ? 'festif' : 'chill';
            }

            // DO NOT filter here. The 'places' prop is already filtered by usePlacesStore.
            // This ensures 100% sync between the Map and the List count.

            // 3. ICON SELECTION (Chameleon Logic) 🦎
            let iconCategory = 'star';
            const allCats = place.categories || [place.category];

            // a) Try to match based on user's active filter (Chameleon part)
            let match = null;
            if (selectedCategories.length > 0) {
                match = selectedCategories.find(sc =>
                    allCats.includes(sc) ||
                    (sc === 'restaurant' && allCats.includes('restaurant')) ||
                    (sc === 'bar' && allCats.includes('bar')) ||
                    (sc === 'café' && allCats.includes('café'))
                );
            }

            // b) Define identifying category
            const targetCat = match || cat;

            if (['bar', 'pub', 'biergarten', 'wine_bar', 'rooftop'].includes(targetCat)) {
                const lowerName = place.name ? place.name.toLowerCase() : '';
                if (lowerName.includes('pub') || lowerName.includes('brewery') || lowerName.includes('beer')) iconCategory = 'beer';
                else iconCategory = 'cocktail';
            }
            else if (['cafe', 'café', 'coffee_shop', 'coffeeshop', 'tea_house', 'bakery', 'boulangerie', 'patisserie', 'ice_cream', 'salon-de-the'].includes(targetCat)) iconCategory = 'cafe';
            else if (['restaurant', 'food', 'meal', 'bistro', 'snack', 'fast_food', 'burger', 'pizza', 'italian', 'asian', 'sushi', 'diner', 'brasserie', 'italian-restaurant'].includes(targetCat)) iconCategory = 'restaurant';
            else if (['hotel'].includes(targetCat)) iconCategory = 'lodging';
            else if (['club', 'nightclub', 'disco', 'concert', 'live_music', 'boite-de-nuit'].includes(targetCat)) iconCategory = 'music';
            else if (['espace-culturel', 'art_gallery', 'workshop', 'exhibition', 'arts_centre', 'library', 'theatre', 'cinema', 'gallery'].includes(targetCat)) iconCategory = 'palette';
            else if (['parc', 'park', 'garden', 'forest', 'plaza', 'square', 'gym', 'yoga', 'sport', 'beach', 'lake'].includes(targetCat)) iconCategory = 'leaf';
            else if (['museum', 'monument', 'landmark', 'church', 'castle', 'tourist_attraction', 'point_of_interest'].includes(targetCat)) iconCategory = 'museum';

            return {
                type: 'Feature',
                id: numericId,
                geometry: {
                    type: 'Point',
                    coordinates: [place.location.coordinates.lng, place.location.coordinates.lat]
                },
                properties: {
                    id: place.id,
                    numeric_id: numericId,
                    mood: mood,
                    mood_color: MOOD_COLORS[mood],
                    rating: place.google_rating ? place.google_rating.toFixed(1) : "4.8",
                    badge_image: `badge-${mood}`,
                    icon_category: iconCategory,
                    icon_image: `icon-${iconCategory}-${mood}`,
                    name: place.name
                }
            };
        }).filter(f => f !== null);

        return { type: 'FeatureCollection', features: features as any };
    }, [places, selectedMoods, selectedCategories]);

    const STEP = 5;

    // 2. EXPRESSIONS
    const clusterProperties = useMemo(() => ({
        point_count: ['+', 1],
        chill_sum: ['+', ['case', ['==', ['get', 'mood'], 'chill'], 1, 0]],
        festif_sum: ['+', ['case', ['==', ['get', 'mood'], 'festif'], 1, 0]],
        culturel_sum: ['+', ['case', ['==', ['get', 'mood'], 'culturel'], 1, 0]]
    }), []);

    // 3. CLUSTER TEMPLATES
    const clusterTemplates = useMemo(() => {
        const templates = [];
        for (let c = 0; c <= 100; c += STEP) {
            for (let f = 0; f <= 100 - c; f += STEP) {
                const k = 100 - c - f;
                if (k < 0) continue;
                const id = `cluster-${c}-${f}-${k}`;
                const segments = [];
                if (c > 0) segments.push({ c: MOOD_COLORS.chill, p: c });
                if (f > 0) segments.push({ c: MOOD_COLORS.festif, p: f });
                if (k > 0) segments.push({ c: MOOD_COLORS.culturel, p: k });
                templates.push({ id, segments });
            }
        }
        return templates;
    }, []);

    const getClusterImage = useMemo(() => {
        const pChill = ['*', ['round', ['/', ['*', 100, ['/', ['get', 'chill_sum'], ['get', 'point_count']]], STEP]], STEP];
        const pFestif = ['*', ['round', ['/', ['*', 100, ['/', ['get', 'festif_sum'], ['get', 'point_count']]], STEP]], STEP];
        const pCulturel = ['-', 100, ['+', pChill, pFestif]];

        return [
            'concat',
            'cluster-',
            ['to-string', pChill],
            '-',
            ['to-string', pFestif],
            '-',
            ['to-string', pCulturel]
        ];
    }, []);

    const iconMatrix = useMemo(() => {
        const icons = ['leaf', 'cafe', 'cocktail', 'beer', 'museum', 'palette', 'restaurant', 'music', 'lodging', 'star'];
        const moods = ['chill', 'festif', 'culturel'];
        const matrix: any[] = [];
        icons.forEach(icon => {
            moods.forEach(mood => {
                matrix.push({ id: `icon-${icon}-${mood}`, icon, color: MOOD_COLORS[mood as keyof typeof MOOD_COLORS] });
            });
        });
        return matrix;
    }, []);

    const handlePress = useCallback(async (e: any) => {
        if (!e.features?.length) return;
        const feature = e.features[0];
        if (feature.properties.cluster) {
            if (shapeSourceRef.current && cameraRef?.current) {
                try {
                    const expansionZoom = await shapeSourceRef.current.getClusterExpansionZoom(feature);
                    cameraRef.current.setCamera({
                        centerCoordinate: feature.geometry.coordinates,
                        zoomLevel: expansionZoom,
                        animationDuration: 600,
                        animationMode: 'flyTo'
                    });
                } catch (err) { }
            }
        } else {
            const numericId = feature.properties.numeric_id;
            setActivePin(numericId);
            setIsBouncing(true);
            setTimeout(() => setIsBouncing(false), 200);
            onPlacePress(feature.properties.id, feature.geometry.coordinates);
        }
    }, [cameraRef, onPlacePress]);

    const getIconPath = (iconName: string) => {
        switch (iconName) {
            case 'leaf': return <Path d="M17,12h2L12,2L5.05,12H7l-3.9,6h6.97L10,22h4l-0.07-4h6.97L17,12z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'cafe': return <Path d="M20,3H4v10c0,2.21,1.79,4,4,4h6c2.21,0,4-1.79,4-4v-3h2c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,8h-2V5h2V8z M4,19h16v2H4V19z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'cocktail': return <Path d="M21,5V3H3v2l8,9v5H6v2h12v-2h-5v-5L21,5z M7.43,7L5.66,5h12.69l-1.78,2H7.43z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'beer': return <Path d="M21,5v13h-4V5H9v13H5V5c0-1.1,0.9-2,2-2h10C18.1,3,19,3.9,19,5z M18,4v13c0,2.21-1.79,4-4,4H8c-2.21,0-4-1.79-4-4V4H18z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'museum': return <Path d="M12,2L2,7v2h20V7L12,2z M4,10h3v7H4V10z M10.5,10h3v7h-3V10z M17,10h3v7h-3V10z M2,19h20v3H2V19z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'palette': return <Path d="M12,3c-4.97,0-9,4.03-9,9c0,4.97,4.03,9,9,9c0.83,0,1.5-0.67,1.5-1.5c0-0.39-0.15-0.74-0.39-1.01 c-0.23-0.26-0.38-0.61-0.38-0.99c0-0.83,0.67-1.5,1.5-1.5H16c2.76,0,5-2.24,5-5C21,5.24,16.97,3,12,3z M6.5,13 c-0.83,0-1.5-0.67-1.5-1.5S5.67,10,6.5,10S8,10.67,8,11.5S7.33,13,6.5,13z M9.5,8C8.67,8,8,7.33,8,6.5S8.67,5,9.5,5S11,5.67,11,6.5 S10.33,8,9.5,8z M14.5,8c-0.83,0-1.5-0.67-1.5-1.5S13.67,5,14.5,5S16,5.67,16,6.5S15.33,8,14.5,8z M17.5,10.5c-0.83,0-1.5-0.67-1.5-1.5 S16.67,7.5,17.5,7.5S19,8.17,19,9S18.33,10.5,17.5,10.5z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'restaurant': return <Path d="M11,9H9V2H7v7H5V2H3v7c0,2.12,1.66,3.84,3.75,3.97V22h2.5v-9.03C11.34,12.84,13,11.12,13,9V2h-2V9z M16,6v8h2.5v8H21V2 c-2.76,0-5,2.24-5,4z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'music': return <Path d="M12,3v10.55c-0.59-0.34-1.27-0.55-2-0.55c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4V7h4V3H12z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'lodging': return <Path d="M7,13c1.66,0,3-1.34,3-3S8.66,7,7,7c-1.66,0-3,1.34-3,3S5.34,13,7,13z M19,7h-8v6H3V5H1v15h2v-3h18v3h2v-9C23,8.79,21.21,7,19,7z" fill="white" transform="scale(0.85) translate(2,2)" />;
            default: return <Path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" fill="white" transform="scale(0.7) translate(4,4)" />;
        }
    };

    return (
        <>
            <Mapbox.Images>{clusterTemplates.map(t => {
                let startAngle = 0;
                const segments = t.segments.map((seg, i) => {
                    if (seg.p === 100) return <Circle key={i} cx="21" cy="21" r="19" fill={seg.c} />;
                    const angle = (seg.p / 100) * 360;
                    const endAngle = startAngle + angle;
                    const largeArcFlag = angle > 180 ? 1 : 0;
                    const x1 = 21 + 19 * Math.cos((startAngle - 90) * (Math.PI / 180));
                    const y1 = 21 + 19 * Math.sin((startAngle - 90) * (Math.PI / 180));
                    const x2 = 21 + 19 * Math.cos((endAngle - 90) * (Math.PI / 180));
                    const y2 = 21 + 19 * Math.sin((endAngle - 90) * (Math.PI / 180));
                    const pathData = `M21,21 L${x1},${y1} A19,19 0 ${largeArcFlag},1 ${x2},${y2} Z`;
                    startAngle = endAngle;
                    return <Path key={i} d={pathData} fill={seg.c} />;
                });
                return <Mapbox.Image key={t.id} name={t.id}><Svg height="42" width="42" viewBox="0 0 42 42"><Circle cx="21" cy="21" r="21" fill="white" />{segments}<Circle cx="21" cy="21" r="20.4" stroke="white" strokeWidth="1.2" fill="none" /></Svg></Mapbox.Image>;
            })}{iconMatrix.map(item => <Mapbox.Image key={item.id} name={item.id}><Svg height="38" width="38" viewBox="0 0 38 38"><Circle cx="19" cy="21" r="17" fill="black" opacity="0.1" /><Circle cx="19" cy="19" r="19" fill="white" /><Circle cx="19" cy="19" r="17" fill={item.color} /><G transform="translate(7, 7)">{getIconPath(item.icon)}</G></Svg></Mapbox.Image>)}

            </Mapbox.Images>
            <Mapbox.ShapeSource id="placesSource" ref={shapeSourceRef} shape={placesGeoJSON as any} onPress={handlePress} cluster={true} clusterRadius={35} clusterMaxZoomLevel={14} clusterProperties={clusterProperties} hitbox={{ width: 30, height: 30 }}>
                <Mapbox.SymbolLayer id="clusters" filter={['has', 'point_count']} style={{ iconImage: getClusterImage as any, iconAllowOverlap: true, iconIgnorePlacement: true, iconSize: 1, iconOpacity: 1 } as any} />
                <Mapbox.SymbolLayer id="cluster-count" filter={['has', 'point_count']} style={{ textField: ['to-string', ['get', 'point_count']], textSize: 13, textColor: '#FFFFFF', textFont: ['Open Sans Bold', 'Arial Unicode MS Bold'], textAllowOverlap: true, textIgnorePlacement: true, textAnchor: 'center', textHaloWidth: 0 } as any} />

                {/* A. NAME LABEL (Right - Simple Text + Halo) */}
                <Mapbox.SymbolLayer
                    id="place-name-labels"
                    minZoomLevel={13}
                    filter={['!', ['has', 'point_count']]}
                    style={{
                        textField: ['get', 'name'],
                        textColor: ['get', 'mood_color'],
                        textFont: ['Open Sans Bold', 'Arial Unicode MS Bold'],
                        textSize: 12,
                        textAnchor: 'left',
                        textOffset: [1.5, 0],
                        textAllowOverlap: false,
                        textIgnorePlacement: false,
                        textHaloColor: '#000000',
                        textHaloWidth: 1.5,
                        textHaloBlur: 0
                    } as any}
                />

                <Mapbox.SymbolLayer id="points-static" filter={['all', ['!', ['has', 'point_count']], ['!=', ['get', 'numeric_id'], activePin || -999]]} style={{ iconImage: ['get', 'icon_image'], iconAllowOverlap: true, iconIgnorePlacement: true, iconSize: 0.85, iconAnchor: 'center' } as any} />
                <Mapbox.SymbolLayer id="points-active" filter={['all', ['!', ['has', 'point_count']], ['==', ['get', 'numeric_id'], activePin || -999]]} style={{ iconImage: ['get', 'icon_image'], iconAllowOverlap: true, iconIgnorePlacement: true, iconSize: 0.95, iconAnchor: 'center', iconTranslate: isBouncing ? [0, -25] : [0, 0], iconTranslateTransition: { duration: 300 } } as any} />

                {/* B. RATING (Directly Above Pin) */}
                <Mapbox.SymbolLayer
                    id="place-rating-labels"
                    minZoomLevel={13}
                    filter={['!', ['has', 'point_count']]}
                    style={{
                        textField: ['concat', '★', ['get', 'rating']],
                        textColor: ['get', 'mood_color'],
                        textFont: ['Open Sans Bold', 'Arial Unicode MS Bold'],
                        textSize: 12,
                        textAnchor: 'center',
                        textOffset: [-0.3, -2.1],
                        textAllowOverlap: true,
                        textIgnorePlacement: true,
                        textHaloColor: '#000000',
                        textHaloWidth: 1.8,
                        textHaloBlur: 0
                    } as any}
                />
            </Mapbox.ShapeSource>
        </>
    );
});
