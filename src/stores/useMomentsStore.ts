
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Moment {
    id: string;
    placeId: string;
    placeName: string;
    imageUri: string;
    caption: string;
    type: 'image' | 'video'; // New field
    thumbnailUri?: string; // New field for video thumbnails
    mood: 'chill' | 'festif' | 'culturel';
    verbatimDate: string; // e.g. "À l'instant"
    timestamp: number;
    user: {
        name: string;
        avatar: string;
    };
    likes: number;
    isLikedByMe: boolean;
}

interface MomentsState {
    moments: Moment[];
    addMoment: (moment: Omit<Moment, 'id' | 'likes' | 'isLikedByMe' | 'user' | 'verbatimDate' | 'timestamp'>) => void;
    toggleLike: (momentId: string) => void;
}

export const useMomentsStore = create<MomentsState>()(
    persist(
        (set) => ({
            moments: [],

            addMoment: (newMomentData) => set((state) => {
                const newMoment: Moment = {
                    id: `local-${Date.now()}`,
                    ...newMomentData,
                    user: {
                        name: 'Moi',
                        avatar: '👤' // Placeholder avatar
                    },
                    likes: 0,
                    isLikedByMe: false,
                    verbatimDate: "À l'instant",
                    timestamp: Date.now(),
                };

                // Add new moment at the beginning of the list
                return { moments: [newMoment, ...state.moments] };
            }),

            toggleLike: (momentId) => set((state) => ({
                moments: state.moments.map((m) => {
                    if (m.id !== momentId) return m;

                    const isLiked = !m.isLikedByMe;
                    return {
                        ...m,
                        isLikedByMe: isLiked,
                        likes: isLiked ? m.likes + 1 : m.likes - 1
                    };
                })
            })),
        }),
        {
            name: 'moodmap-moments',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
