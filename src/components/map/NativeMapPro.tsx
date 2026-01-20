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
                const subString = (Array.isArray(place.subcategory) ? place.subcategory.join(' ') : (place.subcategory || '')).toLowerCase();
                const lowerName = (place.name || '').toLowerCase();

                // Identify specific profiles
                const isWine = subString.includes('wine') || subString.includes('vin') || subString.includes('cave');
                const isCocktail = subString.includes('cocktail') || subString.includes('mixolog') || subString.includes('speakeasy') || subString.includes('palace') || subString.includes('lounge') || lowerName.includes('cocktail');

                if (isWine) iconCategory = 'wine';
                else if (isCocktail) iconCategory = 'cocktail';
                else iconCategory = 'beer';
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
                    rating: place.google_rating ? place.google_rating.toFixed(1) : "",
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
        const icons = ['leaf', 'cafe', 'cocktail', 'wine', 'beer', 'museum', 'palette', 'restaurant', 'music', 'lodging', 'star'];
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
        const ionScale = 0.0468;
        switch (iconName) {
            case 'leaf': return <Path d="M448 224h-64L256 32 128 224H64l128 192L64 480h384l-128-64z" fill="white" transform={`scale(${ionScale})`} />;
            case 'cafe': return <Path d="M432 64H96a16 16 0 00-16 16v192a96.11 96.11 0 0096 96h112a96.11 96.11 0 0096-96v-80h18a62.07 62.07 0 0062-62V96a32 32 0 00-32-32zm0 66a30 30 0 01-30 30h-18V96h48zM400 400H64a16 16 0 000 32h336a16 16 0 000-32z" fill="white" transform={`scale(${ionScale})`} />;
            case 'cocktail': return <Path d="M21,5V3H3v2l8,9v5H6v2h12v-2h-5v-5L21,5z M7.43,7L5.66,5h12.69l-1.78,2H7.43z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'wine': return <Path d="M414.56 94.92V80a16 16 0 00-16-16H113.44a16 16 0 00-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69 24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 000 32h192a16 16 0 000-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86 46.58-53.95 38.37-133.32 36.93-144.69zm-285.3 3.41a15.14 15.14 0 00.18-2.33h253.12a15.14 15.14 0 00.18 2.33 201.91 201.91 0 010 45.67H129.32a204.29 204.29 0 01-.06-45.67z" fill="white" transform={`scale(${ionScale})`} />;
            case 'beer': return <Path d="M392 208h-24v-5.74A63.93 63.93 0 00321.65 96a111 111 0 00-27.59-47.29A108.62 108.62 0 00216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 00-67.51 77.54A63.91 63.91 0 0080 231.39V440a56.06 56.06 0 0056 56h176a56.06 56.06 0 0056-56v-8h24a72.08 72.08 0 0072-72v-80a72.08 72.08 0 00-72-72zM176 416a16 16 0 01-32 0V256a16 16 0 0132 0zm64 0a16 16 0 01-32 0V256a16 16 0 0132 0zm64 0a16 16 0 01-32 0V256a16 16 0 0132 0zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 00282 176H160a16 16 0 00-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 010-64c.09 0 9.12.34 16.4 5.8a16 16 0 1019.2-25.6A63.69 63.69 0 00112 112a63.55 63.55 0 00-14 1.57A24 24 0 01120 80a23.78 23.78 0 0119.38 9.84 51.35 51.35 0 014.71 7.9A16 16 0 00176 96c0-6.77-3.61-15.17-10.76-25-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0155.23 23.18A80.2 80.2 0 01292.61 142a16 16 0 0012.73 18.71 16.29 16.29 0 003 .28 16 16 0 0015.7-13 111.78 111.78 0 001.96-19.42 32 32 0 01-6 63.43zm112 168a40 40 0 01-40 40h-24V240h24a40 40 0 0140 40z" fill="white" transform={`scale(${ionScale})`} />;
            case 'museum': return <Path d="M12,2L2,7v2h20V7L12,2z M4,10h3v7H4V10z M10.5,10h3v7h-3V10z M17,10h3v7h-3V10z M2,19h20v3H2V19z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'palette': return <Path d="M12,3c-4.97,0-9,4.03-9,9c0,4.97,4.03,9,9,9c0.83,0,1.5-0.67,1.5-1.5c0-0.39-0.15-0.74-0.39-1.01 c-0.23-0.26-0.38-0.61-0.38-0.99c0-0.83,0.67-1.5,1.5-1.5H16c2.76,0,5-2.24,5-5C21,5.24,16.97,3,12,3z M6.5,13 c-0.83,0-1.5-0.67-1.5-1.5S5.67,10,6.5,10S8,10.67,8,11.5S7.33,13,6.5,13z M9.5,8C8.67,8,8,7.33,8,6.5S8.67,5,9.5,5S11,5.67,11,6.5 S10.33,8,9.5,8z M14.5,8c-0.83,0-1.5-0.67-1.5-1.5S13.67,5,14.5,5S16,5.67,16,6.5S15.33,8,14.5,8z M17.5,10.5c-0.83,0-1.5-0.67-1.5-1.5 S16.67,7.5,17.5,7.5S19,8.17,19,9S18.33,10.5,17.5,10.5z" fill="white" transform="scale(0.85) translate(2,2)" />;
            case 'restaurant': return (
                <G transform={`scale(${ionScale})`}>
                    <Path d="M357.57 223.94a79.48 79.48 0 0056.58-23.44l77-76.95C497.24 117.46 497.8 107.55 492 101.16A16 16 0 00468.83 100.6L400.2 169.18A12.29 12.29 0 01382.83 169.18C378.04 164.4 378.3 156.32 383.08 151.54L451.41 83.21a16 16 0 00-0.56-23.16A15.62 15.62 0 00440.27 56A16.71 16.71 0 00428.46 60.9L360.19 129.16A12.29 12.29 0 01342.82 129.16C338 124.38 338.29 116.3 343.07 111.52L411.4 43.21A16 16 0 00410.84 20.05A15.62 15.62 0 00400.26 16A16.73 16.73 0 00388.45 20.9L311.5 97.85a79.49 79.49 0 00-23.44 56.59V162.67A16 16 0 01283.37 174L247.76 209.62A4 4 0 01242.1 209.62L68.82 36.33a16 16 0 00-22.58-0.06C31.09 51.28 23 72.47 23 97.54C22.9 138.94 44.66 186.54 79.79 221.62L165.24 307.07A64.79 64.79 0 00211 326A64 64 0 00227.21 323.92A16.24 16.24 0 01231.28 323.39A15.93 15.93 0 01242.11 327.64L253.5 338.16A16.12 16.12 0 01258.1 349.39V354.93A47.73 47.73 0 00271.87 388.58L361.92 480.15L362.01 480.25A53.29 53.29 0 00437.37 404.88L302.39 269.9A4 4 0 01302.39 264.24L338 228.63A16 16 0 01349.32 223.94Z" fill="white" />
                    <Path d="M211 358a97.32 97.32 0 01-68.36-28.25L128.78 315.89A8 8 0 00117.48 315.89L32.48 400.45c-15.15 15.15-20.56 37.45-13.06 59.29A30.63 30.63 0 0020.91 463.34C31 484 50.58 496 72 496A55.68 55.68 0 00111.64 479.56L225 365.66A4.69 4.69 0 00226.32 361.94V361.68A4.63 4.63 0 00221.17 357.41A97.09 97.09 0 01211 358Z" fill="white" />
                </G>
            );
            case 'music': return <Path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z" fill="white" transform={`scale(${ionScale})`} />;
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
