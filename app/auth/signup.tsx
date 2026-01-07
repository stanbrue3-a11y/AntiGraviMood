import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, palette } from '../../src/design';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema, SignupFormValues } from '../../src/schemas/auth';
import { useUserStore } from '../../src/stores';

export default function SignupScreen() {
    const router = useRouter();
    const { theme, isDark } = useTheme();
    const signup = useUserStore(state => state.signup);

    const { control, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<SignupFormValues>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (data: SignupFormValues) => {
        try {
            const { success, error, data: authData } = await signup(data.name, data.email, data.password);
            if (success) {
                if (authData?.session) {
                    router.replace('/(tabs)/map');
                } else {
                    alert('Compte créé ! Vérifie tes emails pour confirmer.');
                    // Optionally redirect to login or stay here
                    router.replace('/auth/login');
                }
            } else {
                console.error("Signup failed:", error);
                // TODO: Show error toast
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <LinearGradient
                colors={isDark ? ['#1e1b4b', '#000'] : ['#e0e7ff', '#fff']}
                style={StyleSheet.absoluteFill}
            />

            <View style={styles.headerArea}>
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color={theme.text.primary} />
                </Pressable>
            </View>

            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.text.primary }]}>Créer un compte</Text>
                <Text style={[styles.subtitle, { color: theme.text.secondary }]}>Commencez votre exploration.</Text>

                <View style={[styles.form, { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)' }]}>
                    {/* Name Input */}
                    <View style={styles.inputContainer}>
                        <View style={styles.inputGroup}>
                            <Ionicons name="person" size={20} color={errors.name ? palette.error : theme.text.muted} style={styles.inputIcon} />
                            <Controller
                                control={control}
                                name="name"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Prénom"
                                        placeholderTextColor={theme.text.muted}
                                        style={[styles.input, { color: theme.text.primary }]}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />
                        </View>
                        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                    </View>

                    <View style={styles.divider} />

                    {/* Email Input */}
                    <View style={styles.inputContainer}>
                        <View style={styles.inputGroup}>
                            <Ionicons name="mail" size={20} color={errors.email ? palette.error : theme.text.muted} style={styles.inputIcon} />
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor={theme.text.muted}
                                        style={[styles.input, { color: theme.text.primary }]}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                    />
                                )}
                            />
                        </View>
                        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                    </View>

                    <View style={styles.divider} />

                    {/* Password Input */}
                    <View style={styles.inputContainer}>
                        <View style={styles.inputGroup}>
                            <Ionicons name="lock-closed" size={20} color={errors.password ? palette.error : theme.text.muted} style={styles.inputIcon} />
                            <Controller
                                control={control}
                                name="password"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Mot de passe"
                                        placeholderTextColor={theme.text.muted}
                                        style={[styles.input, { color: theme.text.primary }]}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry
                                    />
                                )}
                            />
                        </View>
                        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                    </View>
                </View>

                <Pressable
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting || !isValid}
                    style={({ pressed }) => [
                        styles.button,
                        (!isValid || isSubmitting) && styles.buttonDisabled,
                        { transform: [{ scale: pressed ? 0.98 : 1 }] }
                    ]}
                >
                    <View
                        style={[
                            styles.buttonGradient,
                            { backgroundColor: isDark ? '#fff' : '#000' },
                            (!isValid || isSubmitting) && { backgroundColor: theme.text.muted }
                        ]}
                    >
                        {isSubmitting ? (
                            <ActivityIndicator color={isDark ? '#000' : '#fff'} />
                        ) : (
                            <Text style={[styles.buttonText, { color: isDark ? '#000' : '#fff' }]}>S'inscrire</Text>
                        )}
                    </View>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerArea: { marginTop: 60, paddingHorizontal: 20 },
    backBtn: { width: 40, height: 40, justifyContent: 'center' },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        marginTop: -60 // Pull up slightly
    },
    title: {
        fontSize: 32, fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
        fontWeight: '800', marginBottom: 8
    },
    subtitle: {
        fontSize: 16, marginBottom: 32
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
    },
    buttonDisabled: {
        shadowOpacity: 0, elevation: 0, opacity: 0.7
    },
    buttonGradient: {
        flex: 1, borderRadius: 28, alignItems: 'center', justifyContent: 'center'
    },
    buttonText: {
        color: '#fff', fontSize: 18, fontWeight: '700', letterSpacing: 0.5
    },
    inputContainer: {
        paddingVertical: 4
    },
    errorText: {
        color: '#ef4444', fontSize: 12, marginLeft: 52, marginBottom: 8
    }
});
