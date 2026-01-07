import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';

export interface User {
    id: string;
    username: string;
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    plan: 'free' | 'plus';
}

export interface Friend {
    id: string;
    name: string;
    username: string;
    avatar: string;
    status: string;
}

interface UserState {
    user: User | null;
    session: Session | null;
    friends: Friend[];
    isAuthenticated: boolean;
    isLoading: boolean;

    // Actions
    login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
    signup: (name: string, email: string, pass: string) => Promise<{ success: boolean; data?: any; error?: string }>;
    logout: () => Promise<void>;
    checkSession: () => Promise<void>;
    updateProfile: (updates: Partial<User>) => Promise<void>;

    // Friends Actions (Real)
    incomingRequests: Friend[];
    refreshFriends: () => Promise<void>;
    fetchIncomingRequests: () => Promise<void>;
    searchUsers: (query: string) => Promise<User[]>;
    sendFriendRequest: (userId: string) => Promise<{ success: boolean; error?: string }>;
    acceptFriendRequest: (requestId: string) => Promise<void>;
    rejectFriendRequest: (requestId: string) => Promise<void>;

    // Legacy (Mock)
    addFriend: (friend: Friend) => void;
    removeFriend: (id: string) => void;
    simulateAddFriend: () => void;
}

// MOCK FRIENDS (Available to add)
export const MOCK_FRIENDS_POOL: Friend[] = [
    { id: '1', name: 'Léa', username: '@lea_paris', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', status: 'En ligne' },
    { id: '2', name: 'Thomas', username: '@tom_h', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', status: 'Il y a 2h' },
    { id: '3', name: 'Sarah', username: '@sarah_v', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', status: 'Hier' },
    { id: '4', name: 'Hugo', username: '@hugo_boss', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', status: 'En ligne' },
    { id: '5', name: 'Camille', username: '@cam_ille', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', status: 'Il y a 5m' },
];

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            session: null,
            friends: [],
            isAuthenticated: false,
            isLoading: false,

            incomingRequests: [],

            checkSession: async () => {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    const { user } = session;
                    let { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();

                    if (!profile) {
                        const newProfile = {
                            id: user.id,
                            username: user.user_metadata?.username || `user_${user.id.substr(0, 5)}`,
                            name: user.user_metadata?.name || 'Explorer',
                            avatar_url: user.user_metadata?.avatar,
                            plan: 'free'
                        };
                        const { data: inserted } = await supabase.from('profiles').insert(newProfile).select().single();
                        profile = inserted;
                    }

                    // Refresh friends and requests
                    get().refreshFriends();
                    get().fetchIncomingRequests();

                    set({
                        session,
                        isAuthenticated: true,
                        user: {
                            id: user.id,
                            email: user.email!,
                            name: profile?.name || user.user_metadata?.name,
                            username: profile?.username || user.user_metadata?.username,
                            avatar: profile?.avatar_url || user.user_metadata?.avatar,
                            bio: profile?.bio,
                            plan: profile?.plan || 'free'
                        }
                    });
                } else {
                    set({ session: null, isAuthenticated: false, user: null });
                }
            },

            login: async (email, pass) => {
                set({ isLoading: true });

                // DEV BACKDOOR
                if (email === 'dev' && pass === 'dev') {
                    const mockUser: User = {
                        id: 'dev-user-id',
                        email: 'dev@moodmap.com',
                        username: '@dev_user',
                        name: 'Developer',
                        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
                        plan: 'plus'
                    };
                    set({
                        isLoading: false,
                        isAuthenticated: true,
                        user: mockUser,
                        session: { access_token: 'mock', refresh_token: 'mock', expires_in: 3600, token_type: 'bearer', user: { id: 'dev-user-id', aud: '', email: '', created_at: '' } } as any
                    });
                    return { success: true };
                }

                const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });

                if (error) {
                    set({ isLoading: false });
                    return { success: false, error: error.message };
                }

                if (data.session) {
                    await get().checkSession();
                    set({ isLoading: false });
                    return { success: true };
                }

                set({ isLoading: false });
                return { success: false, error: "No session created" };
            },

            signup: async (name, email, pass) => {
                set({ isLoading: true });
                const username = `@${name.toLowerCase().replace(/\s+/g, '_')}`;
                const { data, error } = await supabase.auth.signUp({
                    email, password: pass,
                    options: { data: { name, username, avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150' } }
                });

                if (error) {
                    set({ isLoading: false });
                    return { success: false, error: error.message };
                }

                if (data.session) {
                    await get().checkSession();
                    set({ isLoading: false });
                    return { success: true, data };
                }
                set({ isLoading: false });
                return { success: true, data };
            },

            logout: async () => {
                await supabase.auth.signOut();
                set({ user: null, session: null, isAuthenticated: false, friends: [], incomingRequests: [] });
            },

            updateProfile: async (updates) => {
                const { user } = get();
                if (!user) return;
                const { error } = await supabase.from('profiles').update({ name: updates.name, bio: updates.bio }).eq('id', user.id);
                if (error) throw error;
                set((state) => ({ user: state.user ? { ...state.user, ...updates } : null }));
            },

            // --- REAL FRIEND LOGIC ---

            refreshFriends: async () => {
                const { user } = get();
                if (!user) return;

                const { data, error } = await supabase
                    .from('friendships')
                    .select(`
                        id,
                        status,
                        user:profiles!friendships_user_id_fkey(id, name, username, avatar_url),
                        friend:profiles!friendships_friend_id_fkey(id, name, username, avatar_url)
                    `)
                    .or(`user_id.eq.${user.id},friend_id.eq.${user.id}`)
                    .eq('status', 'accepted');

                if (error) { console.error("Error fetching friends:", error); return; }

                const friendsList: Friend[] = data.map((item: any) => {
                    const isMeUser = item.user.id === user.id;
                    const friendProfile = isMeUser ? item.friend : item.user;
                    return { id: friendProfile.id, name: friendProfile.name, username: friendProfile.username, avatar: friendProfile.avatar_url, status: 'Amis' };
                });

                set({ friends: friendsList });
            },

            fetchIncomingRequests: async () => {
                const { user } = get();
                if (!user) return;

                const { data, error } = await supabase
                    .from('friendships')
                    .select(`
                        id,
                        user:profiles!friendships_user_id_fkey(id, name, username, avatar_url)
                    `)
                    .eq('friend_id', user.id)
                    .eq('status', 'pending');

                if (!error && data) {
                    const reqsFixed = data.map((item: any) => ({
                        id: item.user.id,
                        name: item.user.name,
                        username: item.user.username,
                        avatar: item.user.avatar_url,
                        status: item.id // Storing Friendship UUID here for easy access
                    }));
                    set({ incomingRequests: reqsFixed });
                }
            },

            acceptFriendRequest: async (friendshipId) => {
                const { error } = await supabase.from('friendships').update({ status: 'accepted' }).eq('id', friendshipId);
                if (!error) {
                    await get().fetchIncomingRequests();
                    await get().refreshFriends();
                }
            },

            rejectFriendRequest: async (friendshipId) => {
                const { error } = await supabase.from('friendships').delete().eq('id', friendshipId);
                if (!error) await get().fetchIncomingRequests();
            },

            searchUsers: async (query) => {
                if (query.length < 2) return [];
                const { data } = await supabase
                    .from('profiles')
                    .select('id, name, username, avatar_url, bio, plan')
                    .or(`username.ilike.%${query}%,name.ilike.%${query}%`)
                    .limit(20);

                if (!data) return [];
                return data.map((p: any) => ({
                    id: p.id,
                    name: p.name,
                    username: p.username,
                    email: '',
                    avatar: p.avatar_url,
                    bio: p.bio,
                    plan: p.plan
                } as User));
            },

            sendFriendRequest: async (targetUserId) => {
                const { user } = get();
                if (!user) return { success: false, error: 'Not logged in' };
                const { error } = await supabase.from('friendships').insert({ user_id: user.id, friend_id: targetUserId, status: 'pending' });
                if (error) return { success: false, error: error.message };
                return { success: true };
            },

            addFriend: (friend) => set((state) => ({ friends: [...state.friends, friend] })),
            removeFriend: (id) => set((state) => ({ friends: state.friends.filter(f => f.id !== id) })),
            simulateAddFriend: () => set((state) => {
                const candidates = MOCK_FRIENDS_POOL.filter(p => !state.friends.find(f => f.id === p.id));
                if (candidates.length === 0) return {};
                return { friends: [...state.friends, candidates[0]] };
            }),
        }),
        {
            name: 'moodmap-user',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
