import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../src/design';
import { ScaleButton } from '../../src/components/ui/ScaleButton';

const { width, height } = Dimensions.get('window');

// Premium "Mood" Colors
const MOOD_GRADIENTS = {
    chill: ['#8ccaf7', '#4a90e2'],
    festif: ['#ffab60', '#ff7e5f'],
    culturel: ['#c499ff', '#8e44ad'],
};

export default function WelcomeScreen() {
    const router = useRouter();
    const { theme, isDark } = useTheme();

    return (
        <View style={styles.container}>
            {/* 1. Background Image / Vibes */}
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?q=80&w=2532&auto=format&fit=crop' }}
                    style={StyleSheet.absoluteFill}
                    contentFit="cover"
                />
                {/* Overlay Gradient for readability */}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.95)']}
                    locations={[0, 0.5, 1]}
                    style={StyleSheet.absoluteFill}
                />
            </View>

            {/* 2. Content */}
            <View style={styles.content}>

                {/* Logo Area */}
                <View style={styles.logoArea}>
                    <View style={styles.floatingIcons}>
                        <View style={[styles.moodBubble, { backgroundColor: MOOD_GRADIENTS.chill[0], top: 0, left: 20 }]}>
                            <Ionicons name="cafe" size={24} color="#fff" />
                        </View>
                        <View style={[styles.moodBubble, { backgroundColor: MOOD_GRADIENTS.festif[0], top: 40, right: 30 }]}>
                            <Ionicons name="wine" size={24} color="#fff" />
                        </View>
                        <View style={[styles.moodBubble, { backgroundColor: MOOD_GRADIENTS.culturel[0], bottom: -20, left: '40%' }]}>
                            <Ionicons name="color-palette" size={24} color="#fff" />
                        </View>
                    </View>

                    <Text style={styles.title}>MoodMap</Text>
                    <Text style={styles.city}>PARIS</Text>
                </View>

                {/* Text Area */}
                <View style={styles.textArea}>
                    <Text style={styles.mainHeading}>
                        Vivez Paris selon your{' '}
                        <Text style={{ color: '#ffab60', fontStyle: 'italic' }}>mood.</Text>
                    </Text>
                    <Text style={styles.description}>
                        Découvrez les lieux qui matchent votre ambiance. Chill, festif ou culturel, Paris s'adapte à vous.
                    </Text>
                </View>

                {/* Actions */}
                <View style={styles.actions}>
                    <ScaleButton
                        onPress={() => router.push('/auth/signup')}
                        style={styles.primaryBtn}
                    >
                        <Text style={styles.primaryBtnText}>Commencer</Text>
                        <Ionicons name="arrow-forward" size={20} color="#000" />
                    </ScaleButton>

                    <ScaleButton
                        onPress={() => router.push('/auth/login')}
                        style={styles.secondaryBtn}
                    >
                        <Text style={styles.secondaryBtnText}>J'ai déjà un compte</Text>
                    </ScaleButton>

                    <ScaleButton
                        onPress={() => router.replace('/(tabs)/map')}
                        style={styles.guestBtn}
                    >
                        <Text style={styles.guestBtnText}>Explorer en invité</Text>
                    </ScaleButton>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 60,
        justifyContent: 'flex-end',
    },
    logoArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    floatingIcons: {
        width: 200, height: 120,
        position: 'relative',
        marginBottom: 20,
    },
    moodBubble: {
        position: 'absolute',
        width: 56, height: 56, borderRadius: 28,
        alignItems: 'center', justifyContent: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8
    },
    title: {
        fontSize: 48,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: -1,
        fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    },
    city: {
        fontSize: 14,
        fontWeight: '900',
        color: '#fff',
        opacity: 0.6,
        letterSpacing: 4,
        marginTop: 4,
    },
    textArea: {
        marginBottom: 40,
    },
    mainHeading: {
        fontSize: 36,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 42,
        marginBottom: 16,
    },
    description: {
        fontSize: 17,
        lineHeight: 24,
        color: 'rgba(255,255,255,0.7)',
    },
    actions: {
        gap: 16,
    },
    primaryBtn: {
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    primaryBtnText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
    secondaryBtn: {
        height: 56,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    secondaryBtnText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#fff',
    },
    guestBtn: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
    },
    guestBtnText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.5)',
        textDecorationLine: 'underline',
    }
});
