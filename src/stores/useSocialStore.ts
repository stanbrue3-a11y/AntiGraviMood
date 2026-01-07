import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, Friend } from './useUserStore'; // Importing types from user store for now

// Extended Friend type for Search Results
export interface SearchResult extends Friend {
    isAdded?: boolean;
    isPending?: boolean;
}

interface SocialState {
    searchResults: SearchResult[];
    sentRequests: string[]; // List of user IDs

    // Actions
    searchUsers: (query: string) => Promise<void>;
    sendFriendRequest: (user: SearchResult) => void;
    cancelRequest: (userId: string) => void;
    clearSearch: () => void;
}

// MOCK USER POOL FOR SEARCH
const MOCK_DATABASE: SearchResult[] = [
    { id: '10', name: 'Thomas P', username: '@tom_paris', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', status: 'En ligne' },
    { id: '11', name: 'Sophie M', username: '@sophie_art', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', status: 'Hier' },
    { id: '12', name: 'Lucas V', username: '@lucas_v', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150', status: 'Il y a 1h' },
    { id: '13', name: 'Emma Rose', username: '@emma_r', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', status: 'En ligne' },
    { id: '14', name: 'David B', username: '@dave_br', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', status: 'Il y a 2j' },
    { id: '15', name: 'Julie N', username: '@julie_nyc', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150', status: 'En ligne' },
];

export const useSocialStore = create<SocialState>()(
    persist(
        (set, get) => ({
            searchResults: [],
            sentRequests: [],

            searchUsers: async (query) => {
                if (!query || query.length < 2) {
                    set({ searchResults: [] });
                    return;
                }

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 500));

                const lowerQuery = query.toLowerCase();
                const results = MOCK_DATABASE.filter(user =>
                    user.name.toLowerCase().includes(lowerQuery) ||
                    user.username.toLowerCase().includes(lowerQuery)
                );

                set({ searchResults: results });
            },

            sendFriendRequest: (user) => {
                set((state) => ({
                    sentRequests: [...state.sentRequests, user.id]
                }));
            },

            cancelRequest: (userId) => {
                set((state) => ({
                    sentRequests: state.sentRequests.filter(id => id !== userId)
                }));
            },

            clearSearch: () => set({ searchResults: [] }),
        }),
        {
            name: 'moodmap-social',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
