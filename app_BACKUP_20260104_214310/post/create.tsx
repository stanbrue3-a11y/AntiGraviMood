import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useMomentsStore } from '../../src/stores/useMomentsStore';
import { usePlacesStore } from '../../src/stores/usePlacesStore';
import { MOODS } from '../../src/design/tokens/moods';
import { useTheme } from '../../src/design';
import { MapboxSearch } from '../../src/components/MapboxSearch';

export default function CreateMomentModal() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { addMoment } = useMomentsStore();
    const { places } = usePlacesStore();
    const { theme } = useTheme();

    const [media, setMedia] = useState<{ uri: string; type: 'image' | 'video' } | null>(null);
    const [caption, setCaption] = useState('');
    const [selectedMood, setSelectedMood] = useState<'chill' | 'festif' | 'culturel' | null>(null);
    const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Filter places based on search query
    const filteredPlaces = useMemo(() => {
        if (!searchQuery) return places.slice(0, 10); // Show top 10 by default
        const query = searchQuery.toLowerCase();
        return places.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        ).slice(0, 20);
    }, [places, searchQuery]);

    const pickMedia = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 5],
            quality: 0.8,
        });

        if (!result.canceled) {
            setMedia({
                uri: result.assets[0].uri,
                type: result.assets[0].type === 'video' ? 'video' : 'image'
            });
        }
    };

    const handleSubmit = async () => {
        if (!media || !selectedMood || !selectedPlaceId) return;

        setIsSubmitting(true);

        // Simulate network delay
        setTimeout(() => {
            const place = places.find(p => p.id === selectedPlaceId);

            addMoment({
                placeId: selectedPlaceId,
                placeName: place?.name || 'Lieu inconnu',
                imageUri: media.uri,
                caption: caption,
                mood: selectedMood,
            });

            setIsSubmitting(false);
            // Redirect to Feed to see the new post immediately
            router.dismissAll();
            router.replace('/(tabs)/feed');
        }, 800);
    };

    const isFormValid = media && selectedMood && selectedPlaceId;

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >
                {/* Header with Blur effect for premium feel */}
                <BlurView intensity={80} tint={theme.background === '#000000' ? 'dark' : 'light'} style={[styles.header, { paddingTop: insets.top }]}>
                    <Pressable onPress={() => router.back()} style={styles.headerBtn}>
                        <Text style={[styles.headerBtnText, { color: theme.text.primary }]}>Annuler</Text>
                    </Pressable>
                    <Text style={[styles.headerTitle, { color: theme.text.primary }]}>Nouveau Moment</Text>
                    <Pressable
                        onPress={handleSubmit}
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? (
                            <ActivityIndicator color={theme.primary} />
                        ) : (
                            <Text style={[
                                styles.headerBtnText,
                                { color: theme.primary, fontWeight: '700', opacity: isFormValid ? 1 : 0.5 }
                            ]}>
                                Publier
                            </Text>
                        )}
                    </Pressable>
                </BlurView>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >



                    {/* Place Search & Selection (Moved to Top) */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.text.secondary }]}>LIEU</Text>

                        <MapboxSearch
                            placeholder="Rechercher un lieu..."
                            onSelect={(place) => {
                                setSearchQuery(place.name);
                                setSelectedPlaceId('new_place_mapbox'); // Placeholder ID
                                console.log('Mapbox Place Selected:', place);
                            }}
                        />

                        {/* Existing list can be kept as "Recent" or "Suggestions" below if desired, 
                            but for now let's just show filter results from our local DB if user types in Mapbox too? 
                            Actually Mapbox search replaces the local filter logic for "New" places. 
                            Let's keep local suggestions below if query matches? 
                            For simplicity, let's toggle: if Mapbox gives a result, we use it. 
                        */}
                    </View>

                    {/* Media Picker */}
                    <Pressable
                        onPress={pickMedia}
                        style={[
                            styles.mediaPreview,
                            { backgroundColor: theme.surface, borderColor: theme.border },
                            !media && { height: 300 }
                        ]}
                    >
                        {media ? (
                            <>
                                <Image source={{ uri: media.uri }} style={[styles.mediaImage, { height: 400 }]} resizeMode="cover" />
                                <View style={styles.mediaOverlay}>
                                    <BlurView intensity={30} style={styles.changeMediaBtn}>
                                        <Ionicons name="camera-reverse" size={20} color="#fff" />
                                        <Text style={styles.changeMediaText}>Modifier</Text>
                                    </BlurView>
                                    {media.type === 'video' && (
                                        <View style={styles.videoIndicator}>
                                            <Ionicons name="videocam" size={24} color="#fff" />
                                        </View>
                                    )}
                                </View>
                            </>
                        ) : (
                            <View style={styles.placeholderContainer}>
                                <View style={[styles.iconCircle, { backgroundColor: theme.surfaceElevated }]}>
                                    <Ionicons name="images" size={40} color={theme.primary} />
                                </View>
                                <Text style={[styles.placeholderTitle, { color: theme.text.primary }]}>Ajouter une photo ou vidéo</Text>
                                <Text style={[styles.placeholderSubtitle, { color: theme.text.secondary }]}>Partagez votre vibe du moment</Text>
                            </View>
                        )}
                    </Pressable>

                    {/* Mood Selection */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.text.secondary }]}>MOOD</Text>
                        <View style={styles.moodRow}>
                            {(['chill', 'festif', 'culturel'] as const).map(mood => {
                                const isSelected = selectedMood === mood;
                                const moodConfig = MOODS[mood];
                                // We need to cast the icon name to satisfy TypeScript since we added a new property that isn't in the original inferred type yet or we just need to be explicit
                                const iconName = (moodConfig as any).icon || 'ellipse';

                                return (
                                    <Pressable
                                        key={mood}
                                        style={[
                                            styles.moodCard,
                                            { backgroundColor: theme.surface, borderColor: theme.border },
                                            isSelected && { backgroundColor: moodConfig.color, borderColor: moodConfig.color }
                                        ]}
                                        onPress={() => setSelectedMood(mood)}
                                    >
                                        <View style={[
                                            styles.iconContainer,
                                            isSelected ? { backgroundColor: 'rgba(255,255,255,0.2)' } : { backgroundColor: theme.surfaceElevated }
                                        ]}>
                                            <Ionicons
                                                name={iconName}
                                                size={24}
                                                color={isSelected ? '#fff' : theme.text.secondary}
                                            />
                                        </View>
                                        <Text style={[
                                            styles.moodLabel,
                                            { color: theme.text.primary },
                                            isSelected && { color: '#fff', fontWeight: '700' }
                                        ]}>
                                            {moodConfig.label}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>

                    {/* Caption Input */}
                    <View style={[styles.section, { borderBottomWidth: 1, borderBottomColor: theme.border, paddingBottom: 20 }]}>
                        <TextInput
                            style={[styles.captionInput, { color: theme.text.primary }]}
                            placeholder="Écrivez une légende..."
                            placeholderTextColor={theme.text.placeholder}
                            multiline
                            value={caption}
                            onChangeText={setCaption}
                            maxLength={200}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                    </View>

                    {/* Bottom Spacer */}
                    <View style={{ height: 100 }} />

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        zIndex: 10,
    },
    headerBtn: {
        padding: 4,
    },
    headerBtnText: {
        fontSize: 16,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
    },
    content: {
        paddingTop: 20,
    },
    mediaPreview: {
        marginHorizontal: 20,
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 30,
    },
    mediaImage: {
        width: '100%',
    },
    mediaOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        padding: 16,
    },
    changeMediaBtn: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        overflow: 'hidden',
    },
    changeMediaText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    videoIndicator: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -25,
        marginTop: -25,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    placeholderTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    placeholderSubtitle: {
        fontSize: 14,
    },
    section: {
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1.2,
        marginBottom: 16,
        opacity: 0.7,
    },
    moodRow: {
        flexDirection: 'row',
        gap: 12,
    },
    moodCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 20,
        borderWidth: 1,
        gap: 8,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    moodLabel: {
        fontSize: 13,
    },
    captionInput: {
        fontSize: 18,
        lineHeight: 26,
        minHeight: 80,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 50,
        borderRadius: 16,
        marginBottom: 16,
        gap: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        height: '100%',
    },
    placesList: {
        paddingRight: 20,
        gap: 10,
    },
    placeChip: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 100,
        borderWidth: 1,
    },
    placeChipText: {
        fontWeight: '600',
        fontSize: 14,
    },
});
