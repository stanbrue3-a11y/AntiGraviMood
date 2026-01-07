import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Dimensions, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { useUserStore } from '../src/stores';
import { useTheme } from '../src/design';
import { ScaleButton } from '../src/components/ui/ScaleButton';

const { width } = Dimensions.get('window');
const SERIF_FONT = Platform.select({ ios: 'Georgia', android: 'serif' });

export default function EditProfileScreen() {
    const router = useRouter();
    const { theme, isDark } = useTheme();
    const { user, updateProfile } = useUserStore();

    // Local State
    const [name, setName] = useState(user?.name || '');
    const [bio, setBio] = useState(user?.bio || '');
    const [loading, setLoading] = useState(false);

    // Focus State for inputs (for subtle glow effect)
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const handleSave = async () => {
        if (!name.trim()) {
            Alert.alert("Erreur", "Le nom ne peut pas être vide.");
            return;
        }

        setLoading(true);
        try {
            await updateProfile({ name, bio });
            router.back();
        } catch (e) {
            Alert.alert("Erreur", "Impossible de mettre à jour le profil.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* 1. IMMERSIVE BACKGROUND */}
            {/* We reuse the login vibe or a blurred map/gradient */}
            <LinearGradient
                colors={isDark ? ['#1e1b4b', '#000'] : ['#e0e7ff', '#fff']}
                style={StyleSheet.absoluteFill}
            />
            {/* Ambient Blobs */}
            <View style={[styles.blob, { backgroundColor: '#8ccaf7', top: -100, left: -50, opacity: 0.2 }]} />
            <View style={[styles.blob, { backgroundColor: '#c499ff', bottom: -100, right: -50, opacity: 0.15 }]} />

            {/* HEADER */}
            <View style={styles.header}>
                <ScaleButton onPress={() => router.back()} style={[styles.iconButton, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
                    <Ionicons name="close" size={24} color={isDark ? '#fff' : '#000'} />
                </ScaleButton>
                <Text style={[styles.headerTitle, { color: isDark ? '#fff' : '#000' }]}>Modifier</Text>
                <ScaleButton onPress={handleSave} disabled={loading} style={styles.saveBtn}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.saveText}>Enregistrer</Text>
                    )}
                </ScaleButton>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {/* 2. AVATAR SECTION */}
                <View style={styles.avatarSection}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: user?.avatar }} style={styles.avatar} contentFit="cover" transition={300} />
                        <BlurView intensity={40} tint="dark" style={styles.editBadge}>
                            <Ionicons name="camera" size={16} color="#fff" />
                        </BlurView>
                    </View>
                    <Text style={[styles.changeKeyText, { color: theme.text.secondary }]}>Changer la photo de profil</Text>
                </View>

                {/* 3. FORM CONTAINER (Glassmorphism) */}
                <View style={styles.formContainer}>
                    <BlurView intensity={Platform.OS === 'ios' ? 30 : 0} tint={isDark ? "dark" : "light"} style={styles.blurContainer}>
                        {/* Android Fallback for Blur */}
                        <View style={[StyleSheet.absoluteFill, { backgroundColor: isDark ? 'rgba(20,20,30,0.6)' : 'rgba(255,255,255,0.8)' }]} />

                        {/* Name Input */}
                        <View style={styles.inputWrapper}>
                            <Text style={[styles.label, { color: theme.text.secondary }]}>NOM D'AFFICHAGE</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    { color: theme.text.primary, borderBottomColor: focusedInput === 'name' ? '#c499ff' : 'rgba(150,150,150,0.2)' }
                                ]}
                                value={name}
                                onChangeText={setName}
                                onFocus={() => setFocusedInput('name')}
                                onBlur={() => setFocusedInput(null)}
                                placeholder="Votre nom"
                                placeholderTextColor={theme.text.placeholder}
                            />
                        </View>

                        {/* Username (Read Only for now or Editable) */}
                        <View style={styles.inputWrapper}>
                            <Text style={[styles.label, { color: theme.text.secondary }]}>USERNAME</Text>
                            <View style={[styles.input, { borderBottomWidth: 0, justifyContent: 'center' }]}>
                                <Text style={{ color: theme.text.secondary, fontSize: 16 }}>@{user?.username}</Text>
                            </View>
                        </View>

                        {/* Bio Input */}
                        <View style={[styles.inputWrapper, { marginTop: 8 }]}>
                            <Text style={[styles.label, { color: theme.text.secondary }]}>BIO</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    {
                                        color: theme.text.primary,
                                        borderBottomColor: focusedInput === 'bio' ? '#c499ff' : 'rgba(150,150,150,0.2)',
                                        height: 100,
                                        textAlignVertical: 'top'
                                    }
                                ]}
                                value={bio}
                                onChangeText={setBio}
                                onFocus={() => setFocusedInput('bio')}
                                onBlur={() => setFocusedInput(null)}
                                placeholder="Dites quelque chose sur vos vibes..."
                                placeholderTextColor={theme.text.placeholder}
                                multiline
                            />
                        </View>

                    </BlurView>
                </View>

                {/* 4. FOOTER INFO */}
                <Text style={[styles.footerText, { color: theme.text.muted }]}>
                    Votre profil est visible par vos amis et sur les lieux que vous commentez.
                </Text>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    blob: {
        position: 'absolute',
        width: 300, height: 300, borderRadius: 150,
        filter: 'blur(80px)', // Web style, check native support or remove if needed, usually requires special View or image
    },

    // Header
    header: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 20, paddingTop: 60, paddingBottom: 10,
        zIndex: 10,
    },
    headerTitle: {
        fontFamily: SERIF_FONT, fontSize: 18, fontWeight: '700',
    },
    iconButton: {
        width: 44, height: 44, borderRadius: 22,
        alignItems: 'center', justifyContent: 'center',
    },
    saveBtn: {
        backgroundColor: '#4a90e2',
        paddingHorizontal: 20, paddingVertical: 10, borderRadius: 24,
    },
    saveText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },

    // Content
    scrollContent: {
        paddingTop: 20, paddingBottom: 50,
    },

    // Avatar
    avatarSection: { alignItems: 'center', marginBottom: 40 },
    avatarContainer: { position: 'relative', shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 5 } },
    avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#333' },
    editBadge: {
        position: 'absolute', bottom: 0, right: 0,
        width: 32, height: 32, borderRadius: 16, overflow: 'hidden',
        alignItems: 'center', justifyContent: 'center',
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
    },
    changeKeyText: { marginTop: 12, fontSize: 14, fontWeight: '600' },

    // Form
    formContainer: {
        paddingHorizontal: 20,
    },
    blurContainer: {
        borderRadius: 24,
        overflow: 'hidden',
        padding: 24,
        position: 'relative',
    },
    inputWrapper: { marginBottom: 24 },
    label: {
        fontSize: 11, fontWeight: '700', letterSpacing: 1, marginBottom: 8, opacity: 0.7
    },
    input: {
        fontSize: 17, fontWeight: '500',
        paddingVertical: 8,
        borderBottomWidth: 1,
    },

    footerText: {
        textAlign: 'center', marginTop: 30, fontSize: 13, paddingHorizontal: 40, lineHeight: 18
    }
});
