import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, KeyboardAvoidingView, Platform, FlatList, TextInput, Dimensions, Animated, Keyboard, PanResponder } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../src/design';
import { useUserStore } from '../../src/stores/useUserStore';

const { width, height } = Dimensions.get('window');

interface Comment {
    id: string;
    username: string;
    avatar: string;
    text: string;
    time: string;
}

const MOCK_COMMENTS: Comment[] = [
    { id: '1', username: '@lea_paris', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', text: 'Trop stylé ! 😍', time: '2 min' },
    { id: '2', username: '@tom_h', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', text: 'C\'est où exactement ? Ça a l\'air incroyable.', time: '1 h' },
    { id: '3', username: '@sarah_v', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', text: 'J\'adore la vibe ✨ Il faut qu\'on y aille ce week-end !', time: '3 h' },
    { id: '4', username: '@mehdi_b', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', text: 'Les couleurs sont folles 🎨', time: '5 h' },
    { id: '5', username: '@julie_m', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', text: 'C\'est noté pour ma prochaine visite ! 📍', time: '1 j' },
    { id: '6', username: '@alex_kz', avatar: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=150', text: 'Merci pour le partage 🔥', time: '1 j' },
    { id: '7', username: '@pierre_dup', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', text: 'Top !', time: '2 j' },
];

export default function CommentsScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { user } = useUserStore();

    const [comments, setComments] = useState(MOCK_COMMENTS);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef<FlatList>(null);

    // Animation specific
    const slideAnim = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        // Slide Up on Mount
        Animated.spring(slideAnim, {
            toValue: 0,
            useNativeDriver: true,
            damping: 20,
            stiffness: 150,
        }).start();
    }, []);

    const handleClose = () => {
        // Keyboard.dismiss(); // Removed to prevent layout jump glitch
        Animated.timing(slideAnim, {
            toValue: height,
            duration: 200,
            useNativeDriver: true,
        }).start(() => router.back());
    };

    // Pan Responder for Pull-To-Dismiss
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => false, // Let clicks pass through (e.g. Input focus)
            onMoveShouldSetPanResponder: (_, gestureState) => {
                // Only capture vertical drag if moved > 10px significantly
                return Math.abs(gestureState.dy) > 10;
            },
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    slideAnim.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 120 || gestureState.vy > 0.8) {
                    handleClose();
                } else {
                    Animated.spring(slideAnim, {
                        toValue: 0,
                        useNativeDriver: true,
                        bounciness: 4
                    }).start();
                }
            }
        })
    ).current;

    const handleSubmit = () => {
        if (!inputText.trim()) return;
        const newComment: Comment = {
            id: Date.now().toString(),
            username: user?.username || '@moi',
            avatar: user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
            text: inputText.trim(),
            time: 'À l\'instant'
        };
        setComments(prev => [...prev, newComment]);
        setInputText('');
        setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    };

    return (
        <View style={styles.backdrop}>
            {/* Transparent Pressable Overlay to Close by tapping outside */}
            <Pressable style={StyleSheet.absoluteFill} onPress={handleClose}>
                <View style={{ flex: 1, backgroundColor: 'transparent' }} />
            </Pressable>

            {/* Draggable Sheet Wrapper */}
            <Animated.View
                style={[
                    styles.sheetContainer,
                    { transform: [{ translateY: slideAnim }] }
                ]}
                {...panResponder.panHandlers} // Attach Gesture Handler to the ENTIRE SHEET CONTAINER
            >
                {/* Visual Backgrounds (Blur + Tint) */}
                <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill} />
                <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(5,5,5,0.85)' }]} />

                {/* Content */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.keyboardContainer}
                // Important: KeyboardAvoidingView must be inside the Animated View
                >
                    {/* Header (Drag Handle) */}
                    <View style={styles.header}>
                        <View style={styles.grabber} />
                        <Text style={styles.title}>Commentaires</Text>
                    </View>

                    {/* List */}
                    <FlatList
                        ref={flatListRef}
                        data={comments}
                        keyExtractor={(item: any) => item.id}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.commentRow}>
                                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                                <View style={styles.commentContent}>
                                    <View style={styles.commentHeader}>
                                        <Text style={styles.username}>{item.username}</Text>
                                        <Text style={styles.time}>{item.time}</Text>
                                    </View>
                                    <Text style={styles.text}>{item.text}</Text>
                                </View>
                            </View>
                        )}
                    />

                    {/* Input Area */}
                    <View style={[styles.inputContainer, { paddingBottom: insets.bottom + 10 }]}>
                        <Image source={{ uri: user?.avatar }} style={styles.inputAvatar} />
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={[styles.input, Platform.OS === 'android' && { textAlignVertical: 'center' }]} // Fix alignment
                                placeholder="Ajouter un commentaire..."
                                placeholderTextColor="rgba(255,255,255,0.4)"
                                value={inputText}
                                onChangeText={setInputText}
                                returnKeyType="send"
                                onSubmitEditing={handleSubmit}
                            />
                        </View>
                        {inputText.trim().length > 0 && (
                            <Pressable onPress={handleSubmit} style={styles.sendBtn}>
                                <Ionicons name="arrow-up" size={18} color="#fff" />
                            </Pressable>
                        )}
                    </View>
                </KeyboardAvoidingView>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns children to bottom
    },
    sheetContainer: {
        height: '60%', // Reduced height
        width: '100%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    keyboardContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    header: {
        height: 44,
        alignItems: 'center',
        paddingTop: 12,
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
        zIndex: 10,
    },
    grabber: {
        width: 36,
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 2,
        marginBottom: 8,
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.5,
        opacity: 0.9,
    },
    listContent: {
        padding: 20,
    },
    commentRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        marginRight: 12,
        backgroundColor: '#333',
    },
    commentContent: {
        flex: 1,
        paddingTop: 2,
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 4,
    },
    username: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 13,
        marginRight: 8,
    },
    time: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 11,
    },
    text: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14,
        lineHeight: 19,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: 'rgba(0,0,0,0.9)', // Almost opaque for better contrast
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.08)',
    },
    inputAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
        backgroundColor: '#333'
    },
    inputWrapper: {
        flex: 1,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: 20,
        paddingHorizontal: 14,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 14,
        paddingVertical: 0,
    },
    sendBtn: {
        marginLeft: 10,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#5AC8FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
