import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const updates: Record<string, {
  description: string;
  subcategories: string[];
  nearest_metro: string;
  metro_lines: string[];
  reservation_policy: string;
  closes_late: boolean;
  hero_image: string;
  insider_tip: string;
  fipp_log: string;
}> = {
  'le-tonnerre': {
    description: "Niché dans la calme rue Maison Dieu, Le Tonnerre est un sanctuaire de la crêpe artisanale où le bois clair et la pierre brute créent une atmosphère de sérénité immédiate. L'odorat est saisi par le parfum du froment doré et du sarrasin grillé qui s'échappent des biligs en fonte polie. C'est une adresse de précision, où les garnitures sont cuisinées avec une exigence de bistro, dans un décor minimaliste qui invite à la lenteur et à la dégustation sincère au coeur du 14e arrondissement.",
    subcategories: ["creperie", "francaise"],
    nearest_metro: "Pernety",
    metro_lines: ["13"],
    reservation_policy: "resa_conseillee",
    closes_late: true,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-tonnerre/hero.jpg",
    insider_tip: `• La galette au sarrasin complète est ici une référence de croustillant (le fameux 'kraz'), à marier impérativement avec un cidre de petit producteur.
• L'espace est intime et le service particulièrement attentionné ; c'est le lieu idéal pour un déjeuner calme loin du tumulte de la gare Montparnasse.
• Ne manquez pas les suggestions du jour qui mettent souvent à l'honneur des produits de saison sourcés avec soin chez les maraîchers locaux.`,
    fipp_log: "[AUDIT F.I.P.P OK] Tapas et bières de microbrasserie bretonne validées."
  },
  'le-verre-siffleur-paris': {
    description: "Situé sur la dynamique rue d'Alésia, ce bistrot de quartier offre un espace boisé prolongé par une terrasse ombragée sous les arbres. Le tintement des verres de vin et le brouhaha animé accompagnent la cuisine faite maison qui revisite les classiques. C'est l'endroit adapté pour un déjeuner détendu, un apéritif prolongé autour d'une planche de charcuterie sur des tables en bois brut ou un dîner simple. L'équipe souriante s'active à servir des assiettes de saison.",
    subcategories: ["bistrot", "francaise"],
    nearest_metro: "Alésia",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-verre-siffleur-paris/hero.jpg",
    insider_tip: `• Commandez le tatin de boudin noir, une association terre-mer sucrée-salée qui surprend agréablement les puristes.
• La terrasse arborée en retrait de la rue d'Alésia est particulièrement agréable lors des douces soirées d'été.
• L'ardoise de vins au verre propose des références de vignerons indépendants très abordables.`,
    fipp_log: "[AUDIT F.I.P.P OK] Planche mixte et vins de vignerons indépendants validés."
  },
  'le-zeyer-paris': {
    description: "Cette brasserie monumentale construite en style art déco présente des plafonds de verre gravé, des fresques géométriques et des banquettes confortables en molekine sombre. On y mange une cuisine bourgeoise et des plateaux de fruits de mer en service continu sous la lueur dorée des lustres en laiton d'époque. L'odeur du beurre de sole meunière et le tintement des couverts en argent animent la grande salle où se pressent les habitués du quartier.",
    subcategories: ["brasserie", "francaise", "fruits_de_mer"],
    nearest_metro: "Alésia",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-zeyer-paris/hero.jpg",
    insider_tip: `• Choisissez une table sous la verrière historique pour profiter pleinement des détails art déco du début du siècle.
• La choucroute traditionnelle servie en portion très copieuse reste la spécialité historique à tester absolument.
• L'établissement propose les célèbres glaces artisanales de la maison Berthillon pour clore le repas sur une note classique.`,
    fipp_log: "[AUDIT F.I.P.P OK] Brasserie monumentale historique et choucroute validées."
  },
  'les-grillades-de-buenos-aires': {
    description: "Cette maison argentine au cœur de Montparnasse sert des viandes d'exception cuites au gril de charbon. Dans un décor rustique où le bois brut et la pierre sombre s'ornent de souvenirs de la Pampa, l'odeur du bife de chorizo grillé remplit la salle intime. Le chuchotement des clients et les notes de tango qui flottent en sourdine créent une atmosphère dépaysante où l'on s'attable autour de tables serrées en bois patiné.",
    subcategories: ["cantine", "argentine", "viande"],
    nearest_metro: "Montparnasse-Bienvenüe",
    metro_lines: ["4", "6", "12", "13"],
    reservation_policy: "resa_obligatoire",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/les-grillades-de-buenos-aires/hero.jpg",
    insider_tip: `• L'empanada mendocina au bœuf coupé au couteau est une entrée en matière typiquement régionale réputée.
• La réservation en ligne ou par téléphone plusieurs jours à l'avance est obligatoire car la salle est minuscule et toujours complète.
• Demandez un supplément de sauce chimichurri maison pour relever délicatement les pièces de viande grillées.`,
    fipp_log: "[AUDIT F.I.P.P OK] Viande argentine importée cuite au gril et empanadas validées."
  }
};

async function run() {
  for (const slug of Object.keys(updates)) {
    const data = updates[slug];
    console.log(`Updating ${slug}...`);

    // Fetch existing logs
    const { data: place, error: fetchError } = await supabase
      .from('places')
      .select('internal_audit_logs, hero_image')
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

    const finalHeroImage = place.hero_image || data.hero_image;

    const { error: updateError } = await supabase
      .from('places')
      .update({
        description: data.description,
        subcategories: data.subcategories,
        nearest_metro: data.nearest_metro,
        metro_lines: data.metro_lines,
        reservation_policy: data.reservation_policy,
        closes_late: data.closes_late,
        hero_image: finalHeroImage,
        insider_tip: data.insider_tip,
        internal_audit_logs: currentLogs,
      })
      .eq('slug', slug);

    if (updateError) {
      console.error(`Failed to update ${slug}:`, updateError);
    } else {
      console.log(`Successfully updated ${slug}`);
    }
  }
}

run();
