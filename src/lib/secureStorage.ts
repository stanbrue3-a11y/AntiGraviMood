import * as SecureStore from 'expo-secure-store';

/**
 * Custom storage adapter for Supabase to use Expo SecureStore.
 * This ensures JWT tokens are encrypted at the OS level (Keychain/Keystore).
 */
export class SecureAuthStorage {
    async getItem(key: string): Promise<string | null> {
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            console.error('SecureStore Error (getItem):', error);
            return null;
        }
    }

    async setItem(key: string, value: string): Promise<void> {
        try {
            await SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error('SecureStore Error (setItem):', error);
        }
    }

    async removeItem(key: string): Promise<void> {
        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.error('SecureStore Error (removeItem):', error);
        }
    }
}

export const secureAuthStorage = new SecureAuthStorage();
