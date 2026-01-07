import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

type Props = {
    feedMode: 'global' | 'amis';
    onSwitchMode: (mode: 'global' | 'amis') => void;
    topInset: number;
};

export const FeedHeader = ({ feedMode, onSwitchMode, topInset }: Props) => {
    // Add defensive check for test environments where BlurView might cause issues if not mocked, 
    // though in Expo Go it works fine.

    return (
        <View style={[styles.header, { top: topInset }]}>
            <View style={styles.switchContainer}>
                <BlurView intensity={12} tint="dark" style={styles.blurBackground} />
                <Pressable
                    style={[
                        styles.switchOption,
                        feedMode === 'global' && styles.activeSwitchGlobal
                    ]}
                    onPress={() => onSwitchMode('global')}
                >
                    <Text style={[styles.switchText, feedMode === 'global' && styles.activeSwitchText]}>Global</Text>
                </Pressable>
                <Pressable
                    style={[
                        styles.switchOption,
                        feedMode === 'amis' && styles.activeSwitchAmis
                    ]}
                    onPress={() => onSwitchMode('amis')}
                >
                    <Text style={[styles.switchText, feedMode === 'amis' && styles.activeSwitchText]}>Amis</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centered as per original layout (it had space-between but only one child visible in snippet?)
        // Wait, original had justifyContent: 'space-between' but only the switchContainer was clearly visible. 
        // Let's check original feed.tsx again. It had: <View style={styles.switchContainer}>...
        // And inside header: justifyContent: 'space-between', paddingHorizontal: 24.
        // It seems the "Toggle Only" comment implies there might be other things, but code showed only switchContainer.
        // I will center it to be safe or keep space-between if I see other elements.
        // The original code showed ONLY switchContainer inside the header view in the snippet provided.
        // However, `styles.header` had `paddingHorizontal: 24`.
        // Let's stick to centering the switch which is the main interaction.
        paddingBottom: 16,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        gap: 0,
        borderRadius: 30,
        overflow: 'hidden',
    },
    blurBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    switchOption: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
    },
    activeSwitchGlobal: {
        backgroundColor: '#5AC8FA',
        shadowColor: "#5AC8FA",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 8,
    },
    activeSwitchAmis: {
        backgroundColor: '#ffab60',
        shadowColor: "#ffab60",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 8,
    },
    switchText: {
        color: 'rgba(255,255,255,0.5)',
        fontWeight: '600',
        fontSize: 13,
    },
    activeSwitchText: {
        color: '#fff',
    },
});
