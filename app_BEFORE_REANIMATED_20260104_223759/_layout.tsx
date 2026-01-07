/**
 * MoodMap Paris - Root Layout (Expo Go Compatible)
// (Force Reload)
 */

import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from '../src/design';
import { ErrorBoundary } from '../src/components/common/ErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Cacher le splash screen immédiatement
SplashScreen.hideAsync();

function RootLayoutNav() {
    const { isDark, theme } = useTheme();

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <StatusBar style={isDark ? 'light' : 'dark'} />
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: theme.background },
                    }}
                >
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen
                        name="place/[id]"
                        options={{
                            headerShown: false,
                            presentation: 'transparentModal',
                            animation: 'fade',
                        }}
                    />
                    <Stack.Screen
                        name="post/create"
                        options={{
                            headerShown: false,
                            presentation: 'modal',
                        }}
                    />
                    <Stack.Screen
                        name="auth/login"
                        options={{
                            headerShown: false,
                            presentation: 'modal', // Or card
                            animation: 'slide_from_bottom',
                        }}
                    />
                    <Stack.Screen
                        name="auth/signup"
                        options={{
                            headerShown: false,
                            presentation: 'card',
                            animation: 'slide_from_right',
                        }}
                    />
                    <Stack.Screen
                        name="auth/welcome"
                        options={{
                            headerShown: false,
                            animation: 'fade',
                        }}
                    />
                    <Stack.Screen
                        name="edit-profile"
                        options={{
                            headerShown: false,
                            presentation: 'modal',
                        }}
                    />
                    <Stack.Screen
                        name="comments/[id]"
                        options={{
                            headerShown: false,
                            presentation: 'transparentModal',
                            animation: 'none', // Manual animation inside component to prevent "refresh" glitch
                            contentStyle: { backgroundColor: 'transparent' },
                        }}
                    />
                </Stack>
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider>
                <ThemeProvider initialMode="smart">
                    <RootLayoutNav />
                </ThemeProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
