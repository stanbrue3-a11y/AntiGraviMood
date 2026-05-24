import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const updates: Record<string, {
  description?: string;
  subcategories?: string[];
  nearest_metro?: string;
  metro_lines?: string[];
  reservation_policy?: string;
  closes_late?: boolean;
  hero_image?: string;
  fipp_log: string;
}> = {
  'la-coupole': {
    description: "Sous la haute verrière art déco et entre les colonnes peintes en imitation marbre, la salle résonne du tintement des verres et du glissement des plateaux de fruits de mer sur les tables en bois sombre. Les banquettes de velours rouge accueillent une foule compacte venue pour le célèbre curry d'agneau servi au guéridon. L'odeur iodée des huîtres ouvertes à la minute se mêle au fumet des viandes grillées sous le regard des serveurs en tablier blanc.",
    subcategories: ["brasserie", "francaise", "fruits_de_mer"],
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: true,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/la-coupole/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Plats traditionnels de brasserie et plateaux de fruits de mer validés."
  },
  'le-cornichon-paris-14': {
    description: "Dans un décor épuré de bois brut et de métal brossé, Le Cornichon propose une cuisine bistronomique créative de haut vol. Le murmure des conversations et le cliquetis des fourchettes accompagnent la dégustation de plats millimétrés comme le ris de veau croustillant et le soufflé chaud au Grand Marnier. L'odeur du pain chaud et des jus de viande réduits remplit l'espace intime. Une adresse rigoureuse pour les passionnés de produits de saison travaillés avec une précision chirurgicale.",
    subcategories: ["bistronomique", "francaise"],
    nearest_metro: "Mouton-Duvernet",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-cornichon-paris-14/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Hero Immersion Installation Bois. Plats techniques. Dogme Ris de veau et Soufflé validés."
  },
  'le-dome-montparnasse': {
    description: "Sous la verrière lumineuse de style art déco, le restaurant déploie ses banquettes en cuir sombre et ses tables de acajou verni où se pressent les amateurs de poissons sauvages. L'odeur de la sole dorée au beurre meunière embaume l'espace feutré, ponctuée par le tintement des verres de vin blanc sur les tables. Les serveurs glissent sur le sol carrelé, apportant des plateaux de glace pilée chargés de turbots et de langoustines de Bretagne.",
    subcategories: ["brasserie", "francaise", "poisson", "fruits_de_mer"],
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    reservation_policy: "resa_obligatoire",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-dome-montparnasse/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Immersion marine et fraîcheur des poissons sauvages validées."
  },
  'le-duc-paris-14': {
    description: "Le décor rappelle l'intérieur d'un yacht avec ses boiseries en acajou verni et ses fixations en laiton poli. Le Duc s'attache à servir le poisson cru ou à peine saisi, une approche épurée de la mer. Le chuchotement des clients et le frottement des assiettes sur le bois sombre animent la salle. L'odeur marine et le beurre de vodka accompagnant les tranches de bar de ligne soulignent la précision d'une cuisine sans fard.",
    subcategories: ["gastronomique", "francaise", "poisson", "fruits_de_mer"],
    nearest_metro: "Raspail",
    metro_lines: ["4", "6"],
    reservation_policy: "resa_obligatoire",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-duc-paris-14/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Spécialités marines d'exception et découpes parfaites validées."
  },
  'le-florissant': {
    description: "Le décor mêle le bois brut de pin clair et des armatures en métal noir brossé. Cette cantine asiatique sert des ramens fumants au bouillon de porc mijoté durant des heures, des gyozas grillés à la plaque et des bibimbaps grésillant dans des bols de pierre chaude. Le brouhaha de la salle et les effluves de gingembre, d'ail rôti et de sésame grillé créent une atmosphère de quartier dynamique, idéale pour un repas rapide sur des tables serrées.",
    subcategories: ["cantine", "japonaise", "thailandaise", "ramen"],
    nearest_metro: "Alésia",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-florissant/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Ramen maison et spécialités asiatiques validées."
  },
  'le-jeroboam': {
    description: "Entre les murs en brique rouge et les étagères de bois brut chargées de bouteilles de vignerons indépendants, Le Jéroboam cultive l'amour du vin et des assiettes de partage. Les tables de marbre et le comptoir en zinc accueillent les habitués dans un brouhaha animé. Les effluves de charcuterie affinée et de plats bistronomiques, comme le poulpe grillé ou la pluma ibérique, s'échappent de la cuisine ouverte pour un moment de partage au cœur de Pernety.",
    subcategories: ["bistronomique", "francaise", "bar_a_vins"],
    nearest_metro: "Plaisance",
    metro_lines: ["13"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-jeroboam/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Photos vérifiées : papier peint art déco, tables en marbre vert, chaises et banquettes en velours."
  },
  'le-layon': {
    description: "Bistrot d'auteur niché au cœur de Pernety, Le Layon met en avant la cuisine de produit et de saison. L'espace est intime, rythmé par un comptoir en zinc où les habitués s'attablent et par le murmure des conversations qui rebondissent sur les murs de pierre brute. L'odorat est saisi par les jus de viande réduits et les légumes rôtis qui s'échappent de la cuisine ouverte. Chaque assiette est servie sur des tables en bois patiné qui renforcent le caractère sincère de cette adresse de quartier.",
    subcategories: ["bistronomique", "francaise"],
    nearest_metro: "Pernety",
    metro_lines: ["13"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-layon/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Menu d'auteur de saison et sélection de vins naturels validés."
  },
  'le-petit-amazigh': {
    description: "Une devanture bleu électrique et des guirlandes guinguette marquent l'entrée du Petit Amazigh, une enclave kabyle sincère au cœur de la rue de la Tombe Issoire. Ici, le couscous se décline dans une version aérienne rare, notamment le 'Laghmoudh' (servi dans des plats en terre cuite, sans bouillon, avec fèves fraîches), accompagné comme il se doit d'un verre de Raïb (lait caillé). Le vacarme joyeux de la salle et les effluves de cumin font de ce lieu une adresse de quartier précieuse.",
    subcategories: ["cantine", "algerienne", "marocaine"],
    nearest_metro: "Alésia",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-petit-amazigh/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Photo 1 confirme le Laghmoudh et le Raïb. Validation sensorielle OK."
  },
  'le-petit-baigneur': {
    description: "Ce rade traditionnel restitue le décor d'époque avec ses nappes à carreaux rouges, ses vieilles affiches de cabaret et son comptoir en zinc marqué par le temps. Le Petit Baigneur propose une cuisine de bistrot directe : blanquette de veau, escargots au beurre persillé et tartes aux pommes. C'est le refuge des habitués du quartier qui s'attablent sur des banquettes en bois pour des plats qui réconfortent au cœur du 14ème.",
    subcategories: ["bistrot", "francaise"],
    nearest_metro: "Pernety",
    metro_lines: ["13"],
    reservation_policy: "resa_obligatoire",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-petit-baigneur/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Ambiance de rade traditionnel et plats canailles validés."
  },
  'le-petit-broc': {
    description: "Niché sur le boulevard Raspail, Le Petit Broc détonne avec son décor éclectique : comptoir en zinc, banquettes en velours élimé et un lustre façonné à partir de bouteilles vertes renversées. C'est un bistrot de quartier sans prétention où l'on s'installe pour une assiette réconfortante. Si les classiques de brasserie répondent à l'appel, la cuisine prépare surtout un surprenant Tigre qui pleure mariné, servi dans une ambiance sonore décontractée.",
    subcategories: ["bistrot", "bar_a_vins"],
    nearest_metro: "Vavin",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-petit-broc/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]"
  },
  'le-saut-du-crapaud': {
    description: "Ce bistrot de quartier surprend par sa touche fusion franco-mexicaine subtile. Le Saut du Crapaud propose une cuisine de partage où les classiques du zinc rencontrent des piments et des épices d'ailleurs. L'ambiance y est rythmée, le service direct et la carte fait la part belle aux cocktails à base de mezcal artisanal, en faisant un spot adapté pour une soirée autour de grandes tables en bois brut.",
    subcategories: ["bistrot", "fusion", "cocktails"],
    nearest_metro: "Mouton-Duvernet",
    metro_lines: ["4"],
    reservation_policy: "resa_conseillee",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-saut-du-crapaud/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Plats de fusion franco-mexicaine et cocktails mezcal validés."
  },
  'le-plomb-du-cantal-gaite': {
    description: "Un grand poêlon en fonte d’où s’étire un long ruban daligot sous les yeux des convives. Au Plomb du Cantal, la cuisine auvergnate sinstalle sur des tables en bois épais et des banquettes confortables en similicuir rouge. Sous les éclairages doux de la salle, les clients dégustent leurs plats dans une atmosphère de chalet dalpage. Lodeur de la tome fraîche fondue et du lard grillé imprègne lespace rustique aux murs lambrissés, offrant un repas réconfortant au cœur du 14ème.",
    subcategories: ["auberge", "francaise", "viande", "fromages", "charcuterie"],
    nearest_metro: "Gaîté",
    metro_lines: ["13"],
    reservation_policy: "sans_resa",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-plomb-du-cantal-gaite/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Aligot traditionnel filant et charcuteries d'Auvergne validés."
  },
  'le-severo-paris-14': {
    description: "Le temple de la viande de boucherie maturée à Paris. Les bêtes sont sélectionnées avec rigueur, maturées sur carcasse et saisies avec précision. Dans ce bistrot brut aux nappes à carreaux rouges et aux murs boisés, les assiettes de bœuf saignant s'accompagnent de frites croustillantes et de flacons de vins naturels. L'atmosphère est dense, vibrante d'odeurs de viande grillée et de conversations animées.",
    subcategories: ["bistrot", "viande"],
    nearest_metro: "Mouton-Duvernet",
    metro_lines: ["4"],
    reservation_policy: "resa_obligatoire",
    closes_late: false,
    hero_image: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/places/le-severo-paris-14/hero.jpg",
    fipp_log: "[AUDIT F.I.P.P OK] Viandes de boucherie maturées et sélection de vins naturels validées."
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

    // Set a hero image if it's null in DB
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
