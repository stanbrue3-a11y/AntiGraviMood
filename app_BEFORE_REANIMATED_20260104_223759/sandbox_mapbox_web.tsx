import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { usePlacesStore } from '../src/stores';
import { generateMapboxHtml } from '../src/lib/mapboxHtml';
import { Stack } from 'expo-router';

export default function MatrixMapboxWeb() {
    const webViewRef = useRef<WebView>(null);
    const { getFilteredPlaces } = usePlacesStore();
    const places = getFilteredPlaces();

    // Prepare initial data
    const simplePlaces = places.map(p => ({
        id: p.id,
        lat: p.location.coordinates.lat,
        lng: p.location.coordinates.lng,
        category: p.category,
        mood: p.moods?.[0] || 'chill'
    }));

    const htmlContent = generateMapboxHtml(JSON.stringify(simplePlaces));

    const onMessage = (event: any) => {
        try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.t === 's') {
                console.log('Place selected:', data.id);
            }
        } catch (e) { }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Mapbox WebGL', headerTransparent: true, headerTintColor: '#fff' }} />
            <WebView
                ref={webViewRef}
                style={styles.map}
                source={{ html: htmlContent }}
                onMessage={onMessage}
                originWhitelist={['*']}
                scrollEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    map: { flex: 1, backgroundColor: '#000' },
});
