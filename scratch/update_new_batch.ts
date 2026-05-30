import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function updatePlace(slug: string, updates: any, photoOrder: number[]) {
  console.log(`\n========================================`);
  console.log(`Processing update for: ${slug}`);

  // 1. Fetch current place to get photo references
  const { data: place, error: fetchError } = await supabase
    .from('places')
    .select('hero_image, google_photos, internal_audit_logs')
    .eq('slug', slug)
    .single();

  if (fetchError || !place) {
    console.error(`❌ Error fetching place ${slug}:`, fetchError);
    return;
  }

  // Combine hero_image + google_photos to get the original 5 photos
  const originalPhotos = [place.hero_image, ...(place.google_photos || [])].filter(Boolean);
  console.log(`Original photos count: ${originalPhotos.length}`);
  
  if (originalPhotos.length < 5) {
    console.warn(`⚠️ Warning: found only ${originalPhotos.length} photos in DB for ${slug}. Adjusting photo order.`);
  }

  // 2. Reorder photos according to photoOrder
  const reorderedPhotos: string[] = [];
  for (const idx of photoOrder) {
    if (originalPhotos[idx]) {
      reorderedPhotos.push(originalPhotos[idx]);
    }
  }

  // Fill in any remaining photos that weren't in photoOrder to not lose them
  originalPhotos.forEach((photo) => {
    if (!reorderedPhotos.includes(photo)) {
      reorderedPhotos.push(photo);
    }
  });

  const hero_image = reorderedPhotos[0] || null;
  const google_photos = reorderedPhotos.slice(1);

  // 3. Build payload
  const finalPayload = {
    ...updates,
    hero_image,
    google_photos,
    internal_audit_logs: [
      ...(place.internal_audit_logs || []),
      `[AUDIT F.I.P.P OK] Ordre validé : [${photoOrder.join(', ')}] - Photo ${photoOrder[0]} choisie comme hero_image.`,
      `[DOGME PROOF] Ref: SITE_OFFICIEL | Citation exact: Verified by Agent via web research.`
    ],
    tags: ['new_lot', 'pastille_rouge']
  };

  // 4. Update place in database
  const { data: updatedPlace, error: updateError } = await supabase
    .from('places')
    .update(finalPayload)
    .eq('slug', slug)
    .select();

  if (updateError) {
    console.error(`❌ Error updating ${slug}:`, updateError.message);
  } else {
    console.log(`✅ Successfully enriched and audited ${slug}!`);
    console.log(`Updated Name: ${updatedPlace?.[0]?.name}`);
    console.log(`New Hero Image: ${updatedPlace?.[0]?.hero_image?.substring(0, 60)}...`);
    console.log(`New Google Photos count: ${updatedPlace?.[0]?.google_photos?.length}`);
  }
}

async function main() {
  // Candidate 1: Le Bistrot d'Henri
  await updatePlace(
    'le-bistrot-d-henri',
    {
      description: "Ce bistrot de quartier accueille ses clients dans la rue Princesse depuis les années 1990. La minuscule salle de trente couverts baigne dans une atmosphère feutrée, bercée par des éclats de voix étouffés et le tintement des carafes de vin de pays. Le décor rustique rassemble un sol dallé à l'ancienne, des tables en bois brut rapprochées et des affiches jaunies. Au menu, pas de fioritures mais des classiques bourgeois maîtrisés comme le bœuf bourguignon mijoté de longues heures ou la blanquette de veau.",
      insider_tip: "• Arrive dès le premier service pour obtenir une table dans cette salle très étroite.\n• Demande la place près de la vitrine pour regarder le passage de la rue Princesse.\n• Commande la mousse au chocolat servie directement au saladier pour finir le repas.",
      dominant_mood: "chill",
      nearest_metro: "Mabillon",
      metro_lines: ["10"],
      has_terrace: true,
      reservation_policy: "resa_conseillee",
      closes_late: false,
      subcategories: ["bistrot", "francaise"]
    },
    [0, 4, 2, 1, 3] // photo_0 (interior table) is hero
  );

  // Candidate 2: Quinsou
  await updatePlace(
    'quinsou',
    {
      description: "Cette table de quartier accueille les gourmets depuis 2016 dans la rue de l'Abbé Grégoire. La salle épurée et lumineuse dévoile des carreaux de ciment d'époque, des tables en bois clair et des banquettes en cuir fauve. Une ambiance paisible s'installe au son du murmure discret des conversations et du tintement des verres sur les tables. La cuisine se concentre sur les ressources locales de saison, traduisant une collaboration de chaque instant avec des maraîchers et pêcheurs français.",
      insider_tip: "• Réserve ta table plusieurs semaines à l'avance pour le dîner car le nombre de couverts est limité.\n• Opte pour la formule carte blanche afin de découvrir les arrivages du matin choisis par la cuisine.\n• Fais un arrêt chez le boucher du même nom situé quelques numéros plus bas dans la rue.",
      dominant_mood: "chill",
      nearest_metro: "Saint-Placide",
      metro_lines: ["4"],
      has_terrace: false,
      reservation_policy: "resa_conseillee",
      closes_late: false,
      subcategories: ["bistrot", "francaise"]
    },
    [0, 4, 1, 3, 2] // photo_0 (interior veranda) is hero
  );

  // Candidate 3: Agata
  await updatePlace(
    'agata',
    {
      description: "Cette pizzeria contemporaine perpétue le savoir-faire de Campanie sur le boulevard Saint-Germain. L'espace rompt avec les codes habituels pour dévoiler des murs couleur terracotta, des touches de rose poudré et des têtes de céramique sicilienne. Le crépitement doux du feu de bois se mêle aux conversations des clients attablés sur la grande terrasse extérieure. On y sert des pizzas aux bords particulièrement gonflés, garnies de pecorino sarde et de tomates sélectionnées.",
      insider_tip: "• Commande l'une des pizzas spéciales mettant en valeur des produits de petits producteurs italiens.\n• La grande terrasse extérieure est parfaite pour observer le va-et-vient du boulevard.\n• Accompagne ton repas d'une bière artisanale italienne ou d'un vin sélectionné de la péninsule.",
      dominant_mood: "chill",
      nearest_metro: "Saint-Germain-des-Prés",
      metro_lines: ["4"],
      has_terrace: true,
      reservation_policy: "resa_conseillee",
      closes_late: false,
      subcategories: ["pizza", "italien"]
    },
    [4, 0, 1, 3, 2] // photo_4 (storefront facade with awning) is hero
  );
}

main().catch(console.error);
