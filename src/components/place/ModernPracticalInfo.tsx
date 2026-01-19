import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';
import { spacing } from '../../design/tokens/spacing';

interface ModernPracticalInfoProps {
    info: Record<string, any>;
    primaryColor: string;
}

// COMPREHENSIVE MAPPING
const INFO_CONFIG: Record<string, { icon: keyof typeof Ionicons.glyphMap, label: string }> = {
    // Original Chartier Keys
    "Meilleur Moment": { icon: "time", label: "MEILLEUR MOMENT" },
    "Moment Culte": { icon: "star", label: "MOMENT CULTE" },
    "L'Ambiance": { icon: "people", label: "L'AMBIANCE" },
    "Ambiance Royale": { icon: "people", label: "AMBIANCE ROYALE" },
    "L'Atmosphère": { icon: "cloud", label: "L'ATMOSPHÈRE" },
    "Le Secret": { icon: "key", label: "LE SECRET" },
    "La Cachette": { icon: "eye-off", label: "LA CACHETTE" },
    "Le Tip": { icon: "bulb", label: "LE TIP" },
    "Le Bon Plan": { icon: "pricetag", label: "LE BON PLAN" },
    "L'Astuce": { icon: "bulb", label: "L'ASTUCE" },

    // Music & Vibe
    "Le Son": { icon: "musical-notes", label: "LE SON" },
    "La Musique": { icon: "musical-notes", label: "LA MUSIQUE" },
    "La Prog": { icon: "calendar", label: "LA PROG" },
    "Le Concert": { icon: "mic", label: "LE CONCERT" },
    "Le Piano": { icon: "musical-note", label: "LE PIANO" },
    "Playlist": { icon: "headset", label: "PLAYLIST" },

    // Food & Drink
    "Le Buffet": { icon: "restaurant", label: "LE BUFFET" },
    "Le Must": { icon: "flame", label: "LE MUST" },
    "Le Goût": { icon: "restaurant", label: "LE GOÛT" },
    "La Signature": { icon: "ribbon", label: "LA SIGNATURE" },
    "Le Brunch": { icon: "cafe", label: "LE BRUNCH" },
    "Le Café": { icon: "cafe", label: "LE CAFÉ" },
    "Torréfaction": { icon: "cafe", label: "TORRÉFACTION" },
    "Le Verre": { icon: "wine", label: "LE VERRE" },
    "Apero": { icon: "beer", label: "L'APÉRO" },
    "La Carte": { icon: "book", label: "LA CARTE" },
    "L'Assiette": { icon: "restaurant", label: "L'ASSIETTE" },
    "La Pizza": { icon: "pizza", label: "LA PIZZA" },

    // Place & Decor
    "Le Concept": { icon: "flash", label: "LE CONCEPT" },
    "Le Décor": { icon: "image", label: "LE DÉCOR" },
    "Le Design": { icon: "color-palette", label: "LE DESIGN" },
    "L'Agencement": { icon: "apps", label: "L'AGENCEMENT" },
    "L'Architecture": { icon: "business", label: "L'ARCHITECTURE" },
    "Architecture": { icon: "business", label: "ARCHITECTURE" },
    "La Vue": { icon: "telescope", label: "LA VUE" },
    "Le Soleil": { icon: "sunny", label: "LE SOLEIL" },
    "La Terrasse": { icon: "leaf", label: "LA TERRASSE" },
    "Place": { icon: "location", label: "LA PLACE" },
    "Le Spot": { icon: "pin", label: "LE SPOT" },
    "L'Open Air": { icon: "leaf", label: "L'OPEN AIR" },
    "Le Rooftop": { icon: "cloud-upload", label: "LE ROOFTOP" },

    // Experience
    "L'Entrée": { icon: "enter", label: "L'ENTRÉE" },
    "La File": { icon: "hourglass", label: "LA FILE" },
    "L'Attente": { icon: "hourglass", label: "L'ATTENTE" },
    "Le Service": { icon: "happy", label: "LE SERVICE" },
    "L'Expérience": { icon: "sparkles", label: "L'EXPÉRIENCE" },
    "Pour Qui ?": { icon: "people-circle", label: "POUR QUI ?" },
    "La Faune": { icon: "people", label: "LA FAUNE" }, // Just in case strictly mapped to practical info

    // Other
    "Le Vrac": { icon: "basket", label: "LE VRAC" },
    "Histoire": { icon: "book", label: "HISTOIRE" },
    "L'Histoire": { icon: "book", label: "L'HISTOIRE" },
    "Culture": { icon: "book", label: "CULTURE" }
};

const IGNORED_KEYS = new Set([
    'price_info', 'price_range', 'website', 'google_maps_url', 'phone',
    'reservation_required', 'accessibility', 'outdoor_seating', 'happy_hour',
    'Horaires', 'opening_hours', 'address', 'id', 'name', 'slug', 'category',
    'subcategory', 'location', 'mood_scores', 'vibes', 'ui_theme', 'social_preview',
    'discovery_radius_meters', 'min_stay_time_minutes', 'media', 'metadata', 'description',
    'ai_insights'
]);

// Helper to get config case-insensitively
const getIdConfig = (key: string): { icon: keyof typeof Ionicons.glyphMap; label: string } => {
    // 1. Try exact match
    if (INFO_CONFIG[key]) return INFO_CONFIG[key];

    // 2. Try Title Case match (e.g. "le son" -> "Le Son")
    const titleCase = key.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    if (INFO_CONFIG[titleCase]) return INFO_CONFIG[titleCase];

    // 3. Try Upper Case (e.g. "le son" -> "LE SON" - unlikely keys are uppercase in config but good safety)
    // Actually my config keys are Title Case or Special. 

    // 4. Try matching partial words for robustness
    const lower = key.toLowerCase();
    if (lower.includes('prix') || lower.includes('cost')) return { icon: "wallet", label: key.toUpperCase() };
    if (lower.includes('amour') || lower.includes('date') || lower.includes('romant') || lower.includes('sexy')) return { icon: "heart", label: key.toUpperCase() };
    if (lower.includes('famille') || lower.includes('enfant')) return { icon: "happy", label: key.toUpperCase() };
    if (lower.includes('jardin') || lower.includes('vert') || lower.includes('nature')) return { icon: "leaf", label: key.toUpperCase() };
    if (lower.includes('art') || lower.includes('culture') || lower.includes('expo')) return { icon: "color-palette", label: key.toUpperCase() };

    // Default fallback
    return { icon: "information-circle", label: key.toUpperCase() };
};

export const ModernPracticalInfo: React.FC<ModernPracticalInfoProps> = ({ info, primaryColor }) => {
    // Filter and map keys
    const validKeys = Object.keys(info).filter(key => {
        if (IGNORED_KEYS.has(key)) return false;
        // Ignore very short strings or non-string values (unless number)
        const val = info[key];
        if (typeof val !== 'string' && typeof val !== 'number') return false;
        if (typeof val === 'string' && val.length < 2) return false;
        return true;
    });

    if (validKeys.length === 0) return null;

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.sectionHeader}>
                <Ionicons name="information-circle-outline" size={18} color={primaryColor} style={{ marginRight: 8 }} />
                <Text style={styles.sectionTitle}>INFOS PRATIQUES</Text>
            </View>

            {validKeys.map((key) => {
                const config = getIdConfig(key);
                const content = info[key];

                return (
                    // Dynamic light background matching the mood
                    <View key={key} style={[styles.card, { backgroundColor: primaryColor + '12' }]}>
                        <View style={styles.header}>
                            <Ionicons name={config.icon} size={16} color={primaryColor} />
                            <Text style={[styles.headerText, { color: primaryColor }]}>{config.label}</Text>
                        </View>
                        <Text style={[styles.content, { color: '#111827' }]}>
                            {content}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: spacing[4],
        gap: spacing[3],
        marginTop: spacing[4],
        marginBottom: spacing[6],
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing[1],
        marginTop: spacing[2],
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#111827', // Black/Dark
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    card: {
        borderRadius: 16,
        padding: spacing[4],
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing[2],
        gap: spacing[2],
    },
    headerText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FF9F5A', // Orange-ish
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    content: {
        fontSize: 15,
        lineHeight: 24,
        fontFamily: 'Georgia', // Serif as requested
        fontStyle: 'italic',
        fontWeight: '400',
    }
});
