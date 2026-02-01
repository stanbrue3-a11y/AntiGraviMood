import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';
import { User } from '../types/model';

export type { User };

interface UserState {
    user: User | null;
    friends: User[];
    incomingRequests: User[];
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    checkSession: () => Promise<void>;
    login: (email: string, pass: string) => Promise<{ success: boolean; error: string | null }>;
    signup: (email: string, pass: string, fullName: string) => Promise<{ success: boolean; error: string | null; data?: any }>;
    logout: () => Promise<void>;
    updateProfile: (updates: Partial<User>) => Promise<void>;
    searchUsers: (query: string) => Promise<User[]>;

    // Social Actions
    sendFriendRequest: (userId: string) => Promise<{ success: boolean; error: string | null }>;
    fetchIncomingRequests: () => Promise<void>;
    acceptFriendRequest: (userId: string) => Promise<void>;
    rejectFriendRequest: (userId: string) => Promise<void>;
    refreshFriends: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
    user: null,
    friends: [],
    incomingRequests: [],
    isAuthenticated: false,
    isLoading: false,
    error: null,

    checkSession: async () => {
        set({ isLoading: true });
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
            set({
                user: {
                    id: session.user.id,
                    email: session.user.email,
                    name: session.user.user_metadata?.full_name || 'Utilisateur',
                    username: session.user.user_metadata?.username || session.user.email?.split('@')[0] || 'user',
                    avatar: session.user.user_metadata?.avatar_url || 'https://i.pravatar.cc/150?u=fake',
                },
                isAuthenticated: true
            });
        }
        set({ isLoading: false });
    },

    login: async (email, pass) => {
        set({ isLoading: true, error: null });
        const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
        if (error) {
            set({ error: error.message, isLoading: false });
            return { success: false, error: error.message };
        }
        if (data.user) {
            set({
                user: {
                    id: data.user.id,
                    email: data.user.email,
                    name: data.user.user_metadata?.full_name || 'Utilisateur',
                    username: data.user.user_metadata?.username || data.user.email?.split('@')[0] || 'user',
                    avatar: data.user.user_metadata?.avatar_url || 'https://i.pravatar.cc/150?u=fake',
                },
                isAuthenticated: true,
                isLoading: false
            });
            return { success: true, error: null };
        }
        return { success: false, error: 'No user data returned' };
    },

    signup: async (email, pass, fullName) => {
        set({ isLoading: true, error: null });
        const { data, error } = await supabase.auth.signUp({
            email,
            password: pass,
            options: { data: { full_name: fullName } }
        });
        if (error) {
            set({ error: error.message, isLoading: false });
            return { success: false, error: error.message };
        }
        if (data.user) {
            set({
                user: {
                    id: data.user.id,
                    email: data.user.email,
                    name: fullName || 'Utilisateur',
                    username: data.user.email?.split('@')[0] || 'user',
                    avatar: 'https://i.pravatar.cc/150?u=new',
                },
                isAuthenticated: true,
                isLoading: false
            });
            return { success: true, error: null, data };
        }
        return { success: true, error: null, data: { user: null } }; // Email confirmation case
    },

    logout: async () => {
        await supabase.auth.signOut();
        set({ user: null, isAuthenticated: false, friends: [] });
    },

    updateProfile: async (updates) => {
        const { error } = await supabase.auth.updateUser({
            data: updates
        });
        if (error) throw error;
        set(state => ({ user: state.user ? { ...state.user, ...updates } : null }));
    },

    searchUsers: async (query) => {
        logger.log('Searching users:', query);
        // Mock return
        return [];
    },

    sendFriendRequest: async (userId) => {
        logger.log('Sending friend request to:', userId);
        return { success: true, error: null };
    },

    fetchIncomingRequests: async () => {
        // Mock
        set({
            incomingRequests: [
                { id: 'req1', name: 'Jean Test', username: 'jean_t', avatar: 'https://i.pravatar.cc/150?u=jean' } as User
            ]
        });
    },

    acceptFriendRequest: async (userId) => {
        logger.log('Accepting:', userId);
        set(state => ({
            friends: [...state.friends, state.incomingRequests.find(u => u.id === userId)!],
            incomingRequests: state.incomingRequests.filter(u => u.id !== userId)
        }));
    },

    rejectFriendRequest: async (userId) => {
        logger.log('Rejecting:', userId);
        set(state => ({
            incomingRequests: state.incomingRequests.filter(u => u.id !== userId)
        }));
    },

    refreshFriends: async () => {
        // Mock refresh
    }
}));
