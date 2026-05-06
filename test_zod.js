const Database = require('better-sqlite3');
const { z } = require('zod');

const PlacePricingSchema = z.object({
    menu_items: z.array(
        z.object({
          category_type: z.enum(['starter', 'main', 'dessert', 'sharing', 'drink', 'tasting_menu', 'other']),
          display_label: z.string(),
          items: z.array(
            z.object({
              name: z.string(),
              price_cents: z.number().int().optional().nullable(),
              description: z.string().optional().nullable(),
              is_highlight: z.boolean().optional().nullable(),
              format: z.enum(['assiette', 'verre', 'bouteille', 'planche']).optional().nullable(),
            }).passthrough()
          ),
        }).passthrough()
      ).optional().nullable().default([]),
  }).passthrough();

const RealTalkSchema = z.object({
  text: z.string().min(1).optional(),
}).passthrough();

const PlaceEditorialSchema = z.object({
  terrace: z.boolean().optional(),
}).passthrough();

const db = new Database('moodmap.db');
const rows = db.prepare('SELECT id, name, pricing_json, real_talk_json, editorial_json, mood_scores_json FROM places').all();

let errorCount = 0;
for (const row of rows) {
    if (row.pricing_json) {
        const parsed = JSON.parse(row.pricing_json);
        const res = PlacePricingSchema.safeParse(parsed);
        if (!res.success) {
            console.error('Pricing Error on', row.name, JSON.stringify(res.error.format()));
            errorCount++;
            break;
        }
    }
}
console.log('Total errors:', errorCount);
