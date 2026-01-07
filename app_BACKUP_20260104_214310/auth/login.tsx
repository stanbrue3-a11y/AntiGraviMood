import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../src/design';
import { useUserStore } from '../../src/stores';

export default function LoginScreen() {
    const router = useRouter();
    const { theme, isDark } = useTheme();
    const login = useUserStore(state => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) return;
        setLoading(true);
        try {
            const { success, error } = await login(email, password);
            if (success) {
                router.replace('/(tabs)/map');
            } else {
                console.error("Login failed:", error);
                // TODO: Show error toast
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            {/* Background Ambience */}
            <LinearGradient
                colors={isDark ? ['#1e1b4b', '#000'] : ['#e0e7ff', '#fff']}
                style={StyleSheet.absoluteFill}
            />

            <View style={styles.content}>
                {/* Logo / Header */}
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <View
                            style={[styles.logoBg, { flexDirection: 'row', overflow: 'hidden' }]}
                        >
                            <View style={{ flex: 1, backgroundColor: '#8ccaf7' }} />
                            <View style={{ flex: 1, backgroundColor: '#ffab60' }} />
                            <View style={{ flex: 1, backgroundColor: '#c499ff' }} />

                            <View style={StyleSheet.absoluteFill}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Ionicons name="sparkles" size={32} color="#fff" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.title, { color: theme.text.primary }]} accessibilityRole="header">MoodMap</Text>
                    <Text style={[styles.subtitle, { color: theme.text.secondary }]}>Rejoignez le club.</Text>
                </View>

                {/* Form */}
                <View style={[styles.form, { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)' }]}>
                    <View style={styles.inputGroup}>
                        <Ionicons name="mail" size={20} color={theme.text.muted} style={styles.inputIcon} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={theme.text.muted}
                            style={[styles.input, { color: theme.text.primary }]}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            accessibilityLabel="Adresse email"
                            accessibilityHint="Entrez votre adresse email pour vous connecter"
                        />
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.inputGroup}>
                        <Ionicons name="lock-closed" size={20} color={theme.text.muted} style={styles.inputIcon} />
                        <TextInput
                            placeholder="Mot de passe"
                            placeholderTextColor={theme.text.muted}
                            style={[styles.input, { color: theme.text.primary }]}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            accessibilityLabel="Mot de passe"
                            accessibilityHint="Entrez votre mot de passe"
                        />
                    </View>
                </View>

                {/* Action Button */}
                <Pressable
                    onPress={handleLogin}
                    disabled={loading}
                    style={({ pressed }) => [
                        styles.button,
                        { transform: [{ scale: pressed ? 0.98 : 1 }] }
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel={loading ? "Connexion en cours" : "Se connecter"}
                    accessibilityState={{ disabled: loading }}
                >
                    <View
                        style={[styles.buttonGradient, { backgroundColor: isDark ? '#fff' : '#000' }]}
                    >
                        {loading ? (
                            <ActivityIndicator color={isDark ? '#000' : '#fff'} />
                        ) : (
                            <Text style={[styles.buttonText, { color: isDark ? '#000' : '#fff' }]}>Se connecter</Text>
                        )}
                    </View>
                </Pressable>

                {/* Footer Links */}
                <View style={styles.footer}>
                    <Pressable
                        onPress={() => router.push('/auth/signup')}
                        accessibilityRole="link"
                        accessibilityLabel="Pas encore de compte ? Créer un compte"
                    >
                        <Text style={[styles.link, { color: theme.text.secondary }]}>
                            Pas encore de compte ? <Text style={{ color: '#8ccaf7', fontWeight: '700' }}>Créer</Text>
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => router.replace('/(tabs)/map')}
                        style={{ marginTop: 20 }}
                        accessibilityRole="button"
                        accessibilityLabel="Continuer en mode invité"
                        accessibilityHint="Accéder à l'application sans créer de compte"
                    >
                        <Text style={[styles.linkSmall, { color: theme.text.muted }]}>Continuer en invité</Text>
                    </Pressable>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    header: { alignItems: 'center', marginBottom: 40 },
    logoContainer: {
        marginBottom: 16,
        shadowColor: '#8ccaf7', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10
    },
    logoBg: {
        width: 80, height: 80, borderRadius: 24,
        alignItems: 'center', justifyContent: 'center',
    },
    title: {
        fontSize: 32, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        fontWeight: '800', marginBottom: 8
    },
    subtitle: {
        fontSize: 16, textAlign: 'center'
    },
    form: {
        borderRadius: 24,
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
        marginBottom: 24,
    },
    inputGroup: {
        flexDirection: 'row', alignItems: 'center',
        padding: 16, height: 60,
    },
    inputIcon: { marginRight: 12 },
    input: {
        flex: 1, fontSize: 16, height: '100%'
    },
    divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)' },
    button: {
        height: 56, borderRadius: 28,
        shadowColor: '#c499ff', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, elevation: 8,
        marginBottom: 32,
    },
    buttonGradient: {
        flex: 1, borderRadius: 28, alignItems: 'center', justifyContent: 'center'
    },
    buttonText: {
        color: '#fff', fontSize: 18, fontWeight: '700', letterSpacing: 0.5
    },
    footer: { alignItems: 'center' },
    link: { fontSize: 15 },
    linkSmall: { fontSize: 14, textDecorationLine: 'underline' }
});
