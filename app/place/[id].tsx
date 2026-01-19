/**
 * MoodMap Paris - Place Detail Screen (Shared Element Ready)
 */
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS, interpolate, Extrapolation } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { useTheme, moodColors } from '../../src/design';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { usePlacesStore } from '../../src/stores/usePlacesStore';
import { getPlaceImages } from '../../src/lib/placeUtils';
import { InteractivePriceGauge } from '../../src/components/common/InteractivePriceGauge';

// Helper (Dupliqué pour l'instant, à factoriser)
const getDominantMood = (place: any): 'chill' | 'festif' | 'culturel' => {
    const scores = place.mood_scores;
    if (scores.festif.overall > scores.chill.overall && scores.festif.overall > scores.culturel.overall) return 'festif';
    if (scores.culturel.overall > scores.chill.overall && scores.culturel.overall > scores.festif.overall) return 'culturel';
    return 'chill';
};

const CATEGORY_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
    'bar': 'wine', 'café': 'cafe', 'restaurant': 'restaurant', 'club': 'musical-notes',
    'espace-culturel': 'color-palette', 'parc': 'leaf', 'museum': 'library',
    'workshop': 'cut', 'exhibition': 'images',
};

export default function PlaceDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { theme, isDark } = useTheme();
    const { places, likedPlaceIds, toggleLike } = usePlacesStore();

    const place = places.find(p => p.id === id);

    if (!place) return null; // Or Error Loading

    const dominantMood = getDominantMood(place);
    const accentColor = moodColors[dominantMood].primary;
    const images = getPlaceImages(place);
    const isLiked = likedPlaceIds.includes(place.id);

    const handleClose = () => {
        router.back();
    };

    // Gesture Logic
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });

    const pan = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            if (event.translationY > 0) {
                translateY.value = event.translationY + context.value.y;
            }
        })
        .onEnd(() => {
            if (translateY.value > 100) {
                runOnJS(handleClose)();
            } else {
                translateY.value = withSpring(0, { damping: 15 });
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
            borderRadius: interpolate(translateY.value, [0, 200], [0, 32], Extrapolation.CLAMP),
            overflow: 'hidden',
        };
    });

    return (
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.container, { backgroundColor: '#fff' }, animatedStyle]}>

                <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false} bounces={false}>

                    {/* HERO IMAGE with Shared Transition */}
                    <View style={styles.heroContainer}>
                        {/* @ts-ignore: Reanimated prop */}
                        <Animated.View sharedTransitionTag={`image-container-${place.id}`} style={styles.heroImageWrapper}>
                            <Image
                                source={{ uri: images[0] }}
                                style={styles.heroImage}
                                contentFit="cover"
                            />
                        </Animated.View>

                        <View style={styles.heroOverlay} />

                        {/* Header Controls */}
                        <SafeAreaView edges={['top']} style={styles.heroHeader}>
                            <Pressable style={styles.iconBtnValues} onPress={handleClose}>
                                <Ionicons name="chevron-down" size={24} color="#fff" />
                            </Pressable>
                            <View style={{ flex: 1 }} />
                            <Pressable style={styles.iconBtnValues}>
                                <Ionicons name="share-outline" size={20} color="#fff" />
                            </Pressable>
                            <Pressable style={[styles.iconBtnValues, { marginLeft: 12 }]} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); toggleLike(place.id); }}>
                                <Ionicons name={isLiked ? "heart" : "heart-outline"} size={20} color={isLiked ? accentColor : "#fff"} />
                            </Pressable>
                        </SafeAreaView>

                        <View style={styles.heroContent}>
                            <Text style={styles.heroTitle}>{place.name}</Text>
                            <Text style={styles.heroAddress}>{place.location.address}</Text>
                        </View>
                    </View>

                    {/* DETAILS Content (Copied from Sheet) */}
                    <View style={styles.detailsContainer}>
                        <View style={styles.metaRow}>
                            <View style={[styles.moodBadge, { backgroundColor: accentColor + '20' }]}>
                                <Text style={[styles.moodText, { color: accentColor }]}>{dominantMood.toUpperCase()}</Text>
                            </View>
                            <View style={styles.dividerVertical} />
                            <Text style={[styles.metaText, { color: accentColor, fontWeight: '700', fontSize: 16 }]}>{place.category}</Text>
                        </View>

                        {/* PRICE GAUGE - Surgical Implementation */}
                        <View style={{ marginBottom: 24 }}>
                            <InteractivePriceGauge
                                pricing={place.pricing}
                                arrondissement={place.location.arrondissement}
                                placeType={(() => {
                                    const cat = (place.category || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                                    if (cat.includes('bouillon')) return 'bouillon';
                                    if (cat.includes('bar-a-vin')) return 'bar-a-vin';
                                    if (cat.includes('cocktail-bar')) return 'cocktail-bar';
                                    if (cat.includes('techno-club')) return 'techno-club';
                                    if (['coffee-shop', 'cafe', 'tea-room', 'bakery'].includes(cat)) return 'cafe';
                                    if (['bar', 'pub', 'biergarten'].includes(cat)) return 'bar';
                                    if (['club'].includes(cat)) return 'club';
                                    if (['hotel'].includes(cat)) return 'hotel';
                                    if (['museum', 'art-gallery', 'cultural-center', 'theatre', 'monument', 'espace-culturel'].includes(cat)) return 'culture';
                                    if (['park', 'garden', 'walk'].includes(cat)) return 'park';
                                    return 'restaurant';
                                })()}
                                categories={place.practical_info?.price_info?.items ? place.practical_info.price_info.items.map(cat => ({
                                    icon: cat.category.includes('BOISSON') ? 'wine-outline' :
                                        cat.category.includes('ENTRÉE') ? 'restaurant-outline' :
                                            cat.category.includes('PLAT') ? 'flame-outline' :
                                                cat.category.includes('DESSERT') ? 'ice-cream-outline' : 'star-outline',
                                    title: cat.category,
                                    items: cat.items.map(item => ({
                                        name: item.name,
                                        price: item.price
                                    }))
                                })) : []}
                                activeColor={accentColor}
                                smartTip={place.practical_info?.price_info?.smart_tip}
                            />
                        </View>

                        <Text style={styles.description}>
                            {place.description || `Un lieu ${dominantMood} incontournable à Paris. Venez découvrir l'ambiance unique.`}
                        </Text>

                        {/* 3. Moments Partagés (Restored) */}
                        <Text style={styles.sectionTitle}>Moments partagés ({place.social_preview?.moment_count || 120})</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.momentsScroll}>
                            {[1, 2, 3, 4].map(i => (
                                <View key={i} style={styles.momentCard}>
                                    <Image source={{ uri: `https://source.unsplash.com/random/200x300?sig=${i + place.id.length}` }} style={styles.momentImg} />
                                    <View style={styles.momentOverlay}><Ionicons name="play" size={12} color="#fff" /></View>
                                </View>
                            ))}
                        </ScrollView>

                        <Text style={styles.sectionTitle}>Infos pratiques</Text>
                        <View style={styles.infoRow}><Ionicons name={CATEGORY_ICONS[place.category] || 'bookmark'} size={20} color={accentColor} /><Text style={[styles.infoText, { textTransform: 'capitalize', color: accentColor, fontWeight: '600' }]}>{place.subcategory || place.category}</Text></View>
                        <View style={styles.infoRow}><Ionicons name="time-outline" size={20} color={accentColor} /><Text style={styles.infoText}>Fermeture à {place.category === 'club' ? '06:00' : '02:00'}</Text></View>
                        <View style={styles.infoRow}><Ionicons name="logo-instagram" size={20} color={accentColor} /><Text style={styles.infoText}>{place.media?.instagram_handle || '@moodmap_paris'}</Text></View>
                        <View style={styles.infoRow}><Ionicons name="location-outline" size={20} color={accentColor} /><Text style={styles.infoText}>{place.location.arrondissement}ème • Métro {place.location.nearest_metro}</Text></View>
                    </View>

                </ScrollView>

                {/* CTA */}
                <View style={[styles.floatingCtaContainer, { paddingBottom: 40 }]}>
                    <Pressable style={[styles.ctaBubble, { backgroundColor: accentColor, shadowColor: accentColor }]}>
                        <Ionicons name="map" size={20} color="#fff" style={{ marginRight: 8 }} />
                        <Text style={[styles.ctaBubbleText, { color: '#fff' }]}>VOIR SUR LA CARTE</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1 },
    contentContainer: { paddingBottom: 100 },

    heroContainer: { height: 400, width: '100%', position: 'relative' },
    heroImageWrapper: { width: '100%', height: '100%' },
    heroImage: { width: '100%', height: '100%' },
    heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.1)' },
    heroHeader: { flexDirection: 'row', paddingHorizontal: 16, position: 'absolute', width: '100%', zIndex: 50 },

    iconBtnValues: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(0,0,0,0.25)', alignItems: 'center', justifyContent: 'center' },

    heroContent: { position: 'absolute', bottom: 24, left: 24, right: 24 },
    heroTitle: { color: '#fff', fontSize: 36, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '700', textShadowColor: 'rgba(0,0,0,0.5)', textShadowRadius: 8, textShadowOffset: { width: 0, height: 2 } },
    heroAddress: { color: 'rgba(255,255,255,0.95)', fontSize: 16, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), marginTop: 6, fontWeight: '500' },

    detailsContainer: { padding: 24, paddingTop: 28 },
    metaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
    dividerVertical: { width: 1, height: 16, backgroundColor: '#E5E7EB', marginHorizontal: 12 },
    moodBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
    moodText: { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
    metaText: { color: '#6B7280', fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontSize: 14, textTransform: 'capitalize' },
    description: { fontSize: 18, lineHeight: 28, color: '#374151', fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), marginBottom: 32 },
    sectionTitle: { fontSize: 18, fontWeight: '600', fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), color: '#111', marginBottom: 16, marginTop: 8 },

    // Moments Styles
    momentsScroll: { paddingRight: 24, gap: 12, marginBottom: 32 },
    momentCard: { width: 100, height: 140, borderRadius: 12, overflow: 'hidden', backgroundColor: '#f3f4f6' },
    momentImg: { width: '100%', height: '100%' },
    momentOverlay: { position: 'absolute', bottom: 6, right: 6, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 8, padding: 4 },

    infoRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
    infoText: { fontSize: 16, color: '#111827', fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), fontWeight: '500' },

    floatingCtaContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', zIndex: 20 },
    ctaBubble: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 30, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 },
    ctaBubbleText: { fontSize: 16, fontWeight: '700', fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }), letterSpacing: 0.5 },
});
