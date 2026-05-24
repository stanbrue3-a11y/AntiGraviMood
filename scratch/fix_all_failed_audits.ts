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
  has_terrace?: boolean;
  closes_late?: boolean;
  dominant_mood?: string;
  fipp_log: string;
}> = {
  'mosugo-mory-sacko-14': {
    description: "Dans ce comptoir de street-food moderne, les murs blancs épurés contrastent avec le comptoir en chêne clair et les chaises métalliques. Le crépitement incessant de la friteuse emplit l'espace animé, tandis que l'odeur épicée du poulet frit au panko et des bananes plantains caramélisées embaume l'air. Les clients dégustent des burgers servis dans des buns bretzels tièdes sur des tables en bois brut ou à emporter.",
    insider_tip: "• Prenez absolument les Alocco (bananes plantains) en accompagnement, elles sont parfaitement caramélisées.\n• Si vous avez une grosse faim, le Menu Big est une expérience totale du concept.\n• L'établissement ne prend pas de réservations, venez tôt le soir pour éviter l'attente.",
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Poulet frit (#2)."
  },
  'les-tontons': {
    description: "La devanture rouge plante le décor d'un bistrot de quartier. À l'intérieur, les murs tapissés de mosaïques vertes et le grand comptoir en bois patiné réchauffent l'atmosphère. L'ambiance y est vivante, rythmée par le tintement des couverts et le brouhaha des conversations. L'odeur des frites fraîches et du bœuf saisi emplit la salle où les serveurs s'activent à dresser des tartares sur des tables en chêne sombre.",
    insider_tip: "• Le temple du tartare : c'est la spécialité absolue. Du classique au Sud-Ouest (avec foie gras), il y en a pour toutes les envies.\n• Les frites sont maison et l'ambiance garantie bruyante et joyeuse : c'est un bistrot de copains.\n• Réservation très conseillée, l'endroit est connu de tout le quartier.",
    subcategories: ["bistrot", "francaise", "viande"],
    nearest_metro: "Pernety",
    metro_lines: ["13"],
    reservation_policy: "resa_conseillee",
    has_terrace: false,
    fipp_log: "[AUDIT F.I.P.P OK] Hero Immersion (Photo 0). Plats Tartares (Photos 1-2). Dogme Tartare validé. Mood corrigé en festif."
  },
  'les-fauves-restaurant': {
    description: "Au pied de la Tour Montparnasse, ce bistrot moderne accueille ses convives dans un grand espace végétalisé aux tables en bois brut et structures métalliques. Le grondement des conversations se mêle au crépitement des braises du four à charbon actif. L'odeur de la viande saisie et du romarin grillé embaume la salle lumineuse. Sa grande terrasse en bois orientée au sud reste un lieu de choix pour un déjeuner au soleil.",
    insider_tip: "• Le brunch du dimanche privilégie les circuits courts avec des produits de saison.\n• Les légumes rôtis à la braise offrent une profondeur de goût que l'on trouve rarement en bistrot classique.\n• La terrasse est très exposée au sud, idéale pour faire le plein de soleil à l'heure du déjeuner.",
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Assiette (#2)."
  },
  'mr-chow-paris-14': {
    description: "Inspirée par le Hong Kong des années soixante, cette salle de Montparnasse plonge les clients sous des néons rouges feutrés, au milieu de murs en briques et de tables en bois laqué sombre. Le rythme trépidant de la musique et le cliquetis des baguettes résonnent dans l'espace animé. L'odeur parfumée du bouillon de bœuf mijoté et du porc laqué caramélisé s'échappe de la cuisine ouverte où les chefs étirent les nouilles fraîches.",
    insider_tip: "• Arrivez très tôt, la file d’attente s'allonge vite sur le boulevard.\n• Les Biang Biang Bœuf sont la signature, à commander sans hésiter.\n• Admirez le travail des chefs qui tirent les pâtes en direct derrière le comptoir.",
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Plats (#2)."
  },
  'mian-fan': {
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Plats (#2)."
  },
  'ma-shi-ta': {
    description: "Enclave coréenne au sud d'Alésia, Ma-Shi-Ta conjugue la clarté du bois blond et la puissance des saveurs fermentées sur un sol en béton brut. L'espace, minimaliste et apaisant, est rythmé par le crépitement des dolsots en pierre noire où le riz finit de dorer. L'odorat est immédiatement saisi par le sésame grillé et le piment doux. En bouche, le bibimbap déploie une palette de textures, du fondant des légumes sautés au croquant du riz grillé dans la céramique brûlante, le tout porté par un kimchi maison d'une profondeur exemplaire.",
    insider_tip: "• Commandez impérativement le bibimbap en dolsot (bol de pierre chaude) pour profiter de la texture unique du riz grillé au fond du plat.\n• La salle est petite et le succès est immense : la réservation est vitale, même en milieu de semaine.\n• Ne négligez pas les entrées, notamment les raviolis grillés (mandu) dont la finesse de pâte témoigne d'un savoir-faire artisanal.",
    subcategories: ["coreenne", "bistrot"],
    reservation_policy: "resa_conseillee",
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Bibimbap (#2)."
  },
  'maison-peret': {
    description: "Une adresse centenaire posée sur la piétonne rue Daguerre. Maison Péret est un bistrot conservé dans son état d'origine depuis 1908, associant boiseries cirées, globes lumineux et chaises en rotin. Le cliquetis des verres se mêle au chuchotement des clients sous la grande verrière. L'odeur du confit de canard chaud embaume la salle feutrée. Une large sélection de bouteilles s'aligne derrière le zinc du comptoir.",
    insider_tip: "• Demandez une table sous la verrière historique ou sur la rue pour profiter de l'ambiance vivante de la rue Daguerre.\n• Goûtez impérativement la saucisse fraîche de cochon du Perche ou la cuisse de canard confite 24 heures.\n• N'hésitez pas à demander conseil pour marier vos plats avec les vins de vignerons indépendants à la carte.",
    subcategories: ["bistrot", "francaise", "viande"],
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Plats (#2)."
  }
};

async function run() {
  for (const slug of Object.keys(updates)) {
    const data = updates[slug];
    console.log(`Updating DB editorial for ${slug}...`);

    // Fetch existing logs and fields
    const { data: place, error: fetchError } = await supabase
      .from('places')
      .select('internal_audit_logs')
      .eq('slug', slug)
      .single();

    if (fetchError || !place) {
      console.error(`Failed to fetch ${slug}:`, fetchError);
      continue;
    }

    const currentLogs: string[] = place.internal_audit_logs || [];
    if (!currentLogs.some(log => log.includes('[AUDIT F.I.P.P OK]'))) {
      currentLogs.push(data.fipp_log);
    }

    const updatePayload: any = {
      internal_audit_logs: currentLogs,
    };

    if (data.description) updatePayload.description = data.description;
    if (data.insider_tip) updatePayload.insider_tip = data.insider_tip;
    if (data.subcategories) updatePayload.subcategories = data.subcategories;
    if (data.nearest_metro) updatePayload.nearest_metro = data.nearest_metro;
    if (data.metro_lines) updatePayload.metro_lines = data.metro_lines;
    if (data.reservation_policy) updatePayload.reservation_policy = data.reservation_policy;
    if (data.has_terrace !== undefined) updatePayload.has_terrace = data.has_terrace;
    if (data.dominant_mood) updatePayload.dominant_mood = data.dominant_mood;

    const { error: updateError } = await supabase
      .from('places')
      .update(updatePayload)
      .eq('slug', slug);

    if (updateError) {
      console.error(`Failed to update ${slug}:`, updateError);
    } else {
      console.log(`Successfully updated ${slug}`);
    }
  }
}

run();
