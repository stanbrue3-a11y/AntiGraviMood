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
import { usePlacesStore } from '../src/stores/placesStore';
import { useMomentsStore } from '../src/stores/momentsStore';
import { useUserStore } from '../src/stores/userStore';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const queryClient = new QueryClient();

// Keep splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
    const { isDark, theme } = useTheme();
    const isPlacesReady = usePlacesStore(state => state.isInitialized);
    const initPlaces = usePlacesStore(state => state.init);
    const isMomentsReady = useMomentsStore(state => state.isInitialized);
    const initMoments = useMomentsStore(state => state.init);
    const isUserReady = !useUserStore(state => state.isLoading); // checkSession is async but not blocking usually
    const checkSession = useUserStore(state => state.checkSession);

    const appOpacity = useSharedValue(0);

    useEffect(() => {
        const prepare = async () => {
            const timeoutId = setTimeout(() => {
                console.warn('⚠️ [Init] Hydration taking too long. Force releasing splash screen...');
                SplashScreen.hideAsync();
                appOpacity.value = withTiming(1, { duration: 600 });
            }, 10000); // 10s safety net

            try {
                console.log('🚀 [Init] Sequence Started...');

                console.time('PlacesInit');
                await initPlaces();
                console.timeEnd('PlacesInit');

                console.time('MomentsInit');
                await initMoments();
                console.timeEnd('MomentsInit');

                console.time('UserSession');
                await checkSession();
                console.timeEnd('UserSession');

                console.log('🏁 App Infrastructure Hydrated.');
                clearTimeout(timeoutId);
            } catch (e) {
                console.error('❌ Error during app init:', e);
                clearTimeout(timeoutId);
                // Fallback show
                SplashScreen.hideAsync();
                appOpacity.value = withTiming(1, { duration: 600 });
            }
        };

        prepare();
    }, []);

    const onLayoutRootView = useEffect(() => {
        if (isPlacesReady && isMomentsReady && isUserReady) {
            // Give a tiny buffer for the first paint
            setTimeout(async () => {
                await SplashScreen.hideAsync();
                appOpacity.value = withTiming(1, { duration: 600 });
            }, 100);
        }
    }, [isPlacesReady, isMomentsReady, isUserReady]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: appOpacity.value,
        flex: 1,
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <StatusBar style={isDark ? 'light' : 'dark'} />
                <Animated.View style={animatedStyle}>
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
                                presentation: 'fullScreenModal',
                                animation: 'fade_from_bottom',
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
                </Animated.View>
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider>
                <ThemeProvider initialMode="dark">
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
