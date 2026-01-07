import { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useUserStore } from '../src/stores';

export default function Index() {
    const { isAuthenticated, checkSession } = useUserStore();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Init session check
        checkSession().then(() => setIsReady(true));
    }, []);

    if (!isReady) {
        return (
            <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    // If logged in, go to Map. If not, go to Welcome.
    const href = isAuthenticated ? "/(tabs)/map" : "/auth/welcome";
    return <Redirect href={href} />;
}
