import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const updates: Record<string, {
  description?: string;
  insider_tip?: string;
  subcategories?: string[];
  nearest_metro?: string;
  metro_lines?: string[];
  reservation_policy?: string;
  new_log?: string;
}> = {
  'pny-gaite': {
    new_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Burger (#2) -> Frites (#3)."
  },
  'ramen-wang-take-away-ramen': {
    subcategories: ["ramen", "japonaise", "cantine"],
    reservation_policy: "sans_resa",
    description: "L'art du bouillon poussé à son paroxysme. Ramen Wang est une enclave d'effervescence où la vapeur dense s'échappe des grandes marmites en inox où les bouillons mijotent plus de douze heures. Derrière le comptoir en bois brut, le geste du chef est précis, étirant et plongeant les nouilles artisanales fabriquées sur place. L'espace est contenu, centré sur l'essentiel : le silence gourmand de ceux qui savourent un Tonkotsu dense et crémeux dans des bols en grès épais. Les arômes de soja, de gingembre et de porc braisé enveloppent le visiteur, promettant une expérience thermique et gustative d'une grande honnêteté.",
    new_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Ramen (#2) -> Gyoza (#3)."
  },
  'restaurant-14-juillet': {
    nearest_metro: "Plaisance",
    metro_lines: ["13"],
    subcategories: ["bistrot", "francaise"],
    reservation_policy: "resa_conseillee",
    description: "Derrière sa façade de quartier, le 14 Juillet offre une halte rustique. La salle s'articule autour de murs laqués de rouge sombre, de chaises de bistrot en bois patiné et d'une cuisine à moitié ouverte d'où s'échappent les parfums des plats mijotés. Ici, la cuisine bourgeoise est servie brute et sans artifice. Les mijotés de terroir s'accompagnent du tintement des carafes de vin sur les tables épaisses, offrant un moment d'honnêteté culinaire."
  },
  'restaurant-a-mi-chemin-paris-14-eme': {
    reservation_policy: "resa_conseillee",
    description: "À Mi-Chemin est un carrefour culinaire vibrant où les influences de la Tunisie rencontrent les produits de caractère de la Bretagne. La cuisine de fusion y est habitée, mariant les épices et les produits marins dans une salle intime aux tables de bois clair et banquettes de velours. Les parfums de coriandre et de beurre noisette s'y croisent sous une lumière tamisée, créant un métissage culinaire singulier.",
    insider_tip: "• Laissez-vous tenter par le couscous de la mer aux coquilles Saint-Jacques.\n• La salle de taille modeste se remplit vite, la réservation y est fortement recommandée.\n• L'association des épices de Tunisie et des produits bretons crée une signature unique dans le quartier Boulard.",
    new_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Couscous (#2)."
  },
  'restaurant-aiyara': {
    new_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Plats (#2)."
  },
  'restaurant-korean-barbecue': {
    reservation_policy: "sans_resa",
    description: "Cette adresse de la rue Delambre est dédiée aux grillades coréennes. L'expérience y est interactive : chaque table en bois sombre dispose de son propre gril de fonte intégré pour saisir les viandes marinées. L'ambiance est vive, portée par le grésillement des braises, le bruit métallique des baguettes et les parfums de sésame grillé et de soja qui enrobent la salle.",
    new_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Grillades (#2)."
  }
};

async function run() {
  for (const slug of Object.keys(updates)) {
    console.log(`Updating Phase 1 details for ${slug}...`);
    const updateData = updates[slug];

    // Fetch existing log array
    const { data: place, error: fetchErr } = await supabase
      .from('places')
      .select('internal_audit_logs')
      .eq('slug', slug)
      .single();

    if (fetchErr || !place) {
      console.error(`❌ Failed to fetch logs for ${slug}:`, fetchErr);
      continue;
    }

    const currentLogs: string[] = place.internal_audit_logs || [];
    if (updateData.new_log && !currentLogs.some(l => l.includes('[AUDIT F.I.P.P OK]'))) {
      currentLogs.push(updateData.new_log);
    }

    const updateFields: any = {
      internal_audit_logs: currentLogs,
    };

    if (updateData.description !== undefined) updateFields.description = updateData.description;
    if (updateData.insider_tip !== undefined) updateFields.insider_tip = updateData.insider_tip;
    if (updateData.subcategories !== undefined) updateFields.subcategories = updateData.subcategories;
    if (updateData.nearest_metro !== undefined) updateFields.nearest_metro = updateData.nearest_metro;
    if (updateData.metro_lines !== undefined) updateFields.metro_lines = updateData.metro_lines;
    if (updateData.reservation_policy !== undefined) updateFields.reservation_policy = updateData.reservation_policy;

    const { error: updateErr } = await supabase
      .from('places')
      .update(updateFields)
      .eq('slug', slug);

    if (updateErr) {
      console.error(`❌ Failed to update ${slug}:`, updateErr);
    } else {
      console.log(`✅ Successfully updated ${slug}`);
    }
  }
  console.log('🏁 All Phase 1 edits applied!');
}

run().catch(console.error);
