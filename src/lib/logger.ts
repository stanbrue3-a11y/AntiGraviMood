/**
 * Logger Utility
 * Conditional logging based on environment.
 * In production, logs are disabled to improve performance.
 */

const isDev = __DEV__;

/**
 * Silicon Valley Grade Logger
 * - Dev: Verbose console logs
 * - Prod: Error capturing & Telemetry Ready
 */
export const logger = {
    log: (...args: any[]) => {
        if (isDev) console.log('💬', ...args);
    },

    warn: (...args: any[]) => {
        if (isDev) console.warn('⚠️', ...args);
    },

    error: (error: any, context?: string) => {
        console.error('🚨', context ? `[${context}]` : '', error);
        if (!isDev) {
            // REMOTE SINK (e.g. Sentry/Bugsnag hook)
            // Sentry.captureException(error);
        }
    },

    info: (...args: any[]) => {
        if (isDev) console.info('ℹ️', ...args);
    },

    debug: (...args: any[]) => {
        if (isDev) console.debug('🪲', ...args);
    },

    /**
     * TELEMETRY (SV Best Practice)
     * Track key user actions or system events.
     */
    trackEvent: (event: string, properties?: Record<string, any>) => {
        if (isDev) {
            console.info('📈 [Telemetry]', event, properties);
        } else {
            // Remote Telemetry (e.g. PostHog/Amplitude hook)
            // analytics.track(event, properties);
        }
    }
};

export default logger;
