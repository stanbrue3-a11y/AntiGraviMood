import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    public render() {
        if (this.state.hasError) {
            return (
                <View style={styles.container}>
                    <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill} />
                    <View style={styles.content}>
                        <Ionicons name="warning" size={64} color="#EF4444" style={{ marginBottom: 20 }} />
                        <Text style={styles.title}>Oups !</Text>
                        <Text style={styles.message}>
                            Une erreur inattendue est survenue.{'\n'}
                            Ne t'inquiète pas, c'est juste un petit bug.
                        </Text>
                        <Pressable onPress={this.handleReset} style={styles.button}>
                            <Text style={styles.buttonText}>Essayer de recharger</Text>
                        </Pressable>
                        {__DEV__ && this.state.error && (
                            <View style={styles.debugBox}>
                                <Text style={styles.debugText}>{this.state.error.toString()}</Text>
                            </View>
                        )}
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 32,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        width: '100%',
        maxWidth: 400,
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12,
        fontFamily: 'System', // Or serif if available globally
    },
    message: {
        color: '#ccc',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 30,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    debugBox: {
        marginTop: 24,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 8,
        width: '100%',
    },
    debugText: {
        color: '#ff6b6b',
        fontSize: 12,
        fontFamily: 'Menlo',
    }
});
