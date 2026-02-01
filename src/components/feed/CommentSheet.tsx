
import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../design';
import { useUserStore } from '../../stores/userStore';

interface Comment {
    id: string;
    username: string;
    avatar: string;
    text: string;
    time: string;
}

const MOCK_COMMENTS: Comment[] = [
    { id: '1', username: '@lea_paris', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', text: 'Trop stylé ! 😍', time: '2m' },
    { id: '2', username: '@tom_h', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', text: 'C\'est où exactement ?', time: '1h' },
    { id: '3', username: '@sarah_v', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', text: 'J\'adore la vibe ✨', time: '3h' },
];

interface CommentSheetProps {
    visible: boolean;
    onClose: () => void;
}

export const CommentSheet = React.forwardRef<BottomSheet, CommentSheetProps>(({ visible, onClose }, ref) => {
    const { theme } = useTheme();
    const snapPoints = useMemo(() => ['60%'], []);
    const [comments, setComments] = useState(MOCK_COMMENTS);
    const [inputText, setInputText] = useState('');
    const { user } = useUserStore();

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            onClose();
        }
    }, [onClose]);

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                opacity={0.5}
            />
        ),
        []
    );

    const handleSubmit = () => {
        if (!inputText.trim()) return;

        const newComment: Comment = {
            id: Date.now().toString(),
            username: user?.username || '@moi',
            avatar: user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
            text: inputText.trim(),
            time: 'À l\'instant'
        };

        setComments(prev => [newComment, ...prev]);
        setInputText('');
    };

    // If not visible, we can handle it via parent logic calling .close() or conditionally rendering.
    // However, BottomSheet usually stays mounted.
    // Here we rely on the parent to manage the Ref to open/close.

    return (
        <BottomSheet
            ref={ref}
            index={-1} // Closed by default
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ backgroundColor: '#ffffff30' }}
            backgroundStyle={{ backgroundColor: '#1A1A1A' }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Commentaires</Text>

                <FlatList
                    data={comments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.commentRow}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} />
                            <View style={styles.bubble}>
                                <View style={styles.bubbleHeader}>
                                    <Text style={styles.username}>{item.username}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={styles.listContent}
                    inverted // Show newest at bottom if chat style, but typically IG shows Top-Down. Let's keep Standard but insert at top.
                // Wait, standard comments are Top-Down.
                />

                {/* Input Area */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
                    style={styles.inputContainer}
                >
                    <Image source={{ uri: user?.avatar }} style={styles.inputAvatar} />
                    <BottomSheetTextInput
                        style={styles.input}
                        placeholder="Ajouter un commentaire..."
                        placeholderTextColor="#9CA3AF"
                        value={inputText}
                        onChangeText={setInputText}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    {inputText.length > 0 && (
                        <Pressable onPress={handleSubmit} style={styles.sendBtn}>
                            <Ionicons name="arrow-up-circle" size={32} color={theme.primary} />
                        </Pressable>
                    )}
                </KeyboardAvoidingView>
            </View>
        </BottomSheet>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)'
    },
    listContent: {
        padding: 16,
        paddingBottom: 80,
    },
    commentRow: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 12,
        backgroundColor: '#333'
    },
    bubble: {
        flex: 1,
    },
    bubbleHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 4,
    },
    username: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
        marginRight: 8,
    },
    time: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 11,
    },
    text: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14,
        lineHeight: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
        backgroundColor: '#1A1A1A',
    },
    inputAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
        backgroundColor: '#333'
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#333',
        borderRadius: 20,
        paddingHorizontal: 16,
        color: '#fff',
        fontSize: 14,
    },
    sendBtn: {
        marginLeft: 8,
    }
});
