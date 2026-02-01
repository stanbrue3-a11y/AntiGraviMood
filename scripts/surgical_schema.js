const { z } = require('zod');

/**
 * FIXED SURGICAL SCHEMA v3.1 🏛️💎
 * Corrects the 'stripping' issue of primary_status.
 */

const CoordinatesSchema = z.object({
    lat: z.number(),
    lng: z.number()
});

const LocationSchema = z.object({
    address: z.string().min(5),
    arrondissement: z.number().min(1).max(20),
    coordinates: CoordinatesSchema,
    nearest_metro: z.string().min(2).optional(),
});

const MoodScoreSchema = z.object({
    overall: z.number().min(0).max(30),
    criteria: z.record(z.string(), z.number()).optional().default({})
});

const PracticalInfoSchema = z.object({
    primary_status: z.enum(['sans_resa', 'resa_conseillee', 'resa_obligatoire']).nullable(),
    tags: z.array(z.string()).min(0),
    main_action: z.object({
        type: z.enum(['book', 'shotgun', 'site']),
        url: z.string(),
        label: z.string()
    }).nullable(),
    accessibility: z.boolean(),
    wifi_available: z.boolean(),
    opening_hours: z.string().min(5),
    price_range: z.number().min(1).max(3),
    smart_tip: z.string().min(15),
});

const SurgicalPlaceSchema = z.object({
    id: z.string().regex(/^poi-\d+$/),
    name: z.string().min(2),
    slug: z.string().min(2),
    category: z.enum(['bar', 'restaurant', 'café', 'club', 'museum', 'exhibition', 'parc', 'monument', 'culture']),
    location: LocationSchema,
    mood_scores: z.record(z.string(), MoodScoreSchema),
    practical_info: PracticalInfoSchema,
    description: z.string().min(20),
    pricing: z.object({
        budget_avg: z.number(),
        is_free: z.boolean(),
    }).optional()
}).superRefine((data, ctx) => {
    // CATEGORY SPECIFIC RULES
    if (data.category === 'parc') {
        const hasLawn = data.practical_info.tags.some(t => t === 'pelouse_autorisee' || t === 'pelouse_interdite');
        if (!hasLawn) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "CRITICAL: Lawn policy tag missing", path: ['practical_info', 'tags'] });
        }
    }
    if (['bar', 'restaurant', 'café', 'club'].includes(data.category)) {
        if (data.category === 'bar') {
            const hasHH = data.practical_info.tags.some(t => t === 'happy_hour' || t === 'no_happy_hour');
            if (!hasHH) {
                ctx.addIssue({ code: z.ZodIssueCode.custom, message: "CRITICAL: Happy Hour tag mandatory", path: ['practical_info', 'tags'] });
            }
        }
    }
    if (['museum', 'exhibition'].includes(data.category)) {
        const hasFee = data.practical_info.tags.some(t => t === 'gratuit' || t === 'payant' || t === 'gratuit_moins_26');
        if (!hasFee) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "CRITICAL: Entry fee policy tag missing", path: ['practical_info', 'tags'] });
        }
    }
});

module.exports = { SurgicalPlaceSchema };
