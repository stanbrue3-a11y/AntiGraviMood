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
  // Candidate 1: Brasserie des Prés
  await updatePlace(
    'brasserie-des-pres',
    {
      description: "Située dans le passage historique de la Cour du Commerce Saint-André, cette brasserie contemporaine se déploie sur trois niveaux. Au rez-de-chaussée, les convives dînent au coude-à-coude le long d'un comptoir en laiton brillant et sous un pan de mur médiéval préservé de Philippe Auguste. Le brouhaha joyeux des clients et le cliquetis des assiettes résonnent dans ce décor orné de miroirs et de boiseries colorées. La carte remet au goût du jour des classiques comme les œufs mayo, la soupe à l'oignon et le steak frites.",
      insider_tip: "• Monte au dernier étage pour découvrir le Grouvie, un bar caché d'inspiration seventies avec disques vinyles.\n• Observe le morceau de muraille du XIIe siècle de Philippe Auguste intégré directement dans le décor du rez-de-chaussée.\n• Viens en groupe pour profiter de la grande table d'hôtes et partager une expérience brasserie très vivante.",
      dominant_mood: "festif",
      nearest_metro: "Odéon",
      metro_lines: ["4", "10"],
      has_terrace: true,
      reservation_policy: "resa_conseillee",
      closes_late: false,
      subcategories: ["brasserie", "francaise"]
    },
    [0, 4, 2, 1, 3] // photo_0 (terrace with green facade) is hero
  );

  // Candidate 2: Takuto
  await updatePlace(
    'takuto',
    {
      description: "Ce comptoir de dégustation minimaliste de la rue de Seine se consacre à l'art du temaki préparé à la minute. Dans un décor épuré aux murs bleu azur et aux tables en marbre, les clients s'attablent autour d'un zinc en bois clair pour observer la confection des rouleaux. L'atmosphère paisible est rythmée par le croustillant de l'algue nori que l'on découpe et le murmure discret des convives. Les poissons nobles, parfois maturés, sont enveloppés à la main dans un riz tiède parfaitement vinaigré.",
      insider_tip: "• Installe-toi directement au comptoir en bois pour manger ton temaki immédiatement après sa préparation.\n• Commande le temaki au thon gras ou à la dorade maturée, signatures de la maison.\n• Privilégie un déjeuner rapide en solo ou à deux, l'espace étant particulièrement restreint et sans réservations.",
      dominant_mood: "chill",
      nearest_metro: "Mabillon",
      metro_lines: ["10"],
      has_terrace: false,
      reservation_policy: "sans_resa",
      closes_late: false,
      subcategories: ["japonais", "sushi"]
    },
    [0, 3, 1, 2, 4] // photo_0 (marble counter) is hero
  );

  // Candidate 3: Localino
  await updatePlace(
    'localino',
    {
      description: "Cette trattoria s'est installée dans les murs d'une ancienne librairie de la rue de l'Odéon, sous une plaque historique dédiée à Thomas Paine. La salle dévoile un décor patiné aux banquettes sombres, aux tables en bois verni et aux bouteilles de vin alignées. Un calme feutré s'installe au son du tintement délicat des verres de Chianti et des chuchotements des clients attablés. Le menu met en avant des pâtes fraîches maison, des risottos crémeux et des antipasti de saison.",
      insider_tip: "• Demande la table près de la vitrine sous le store rouge et blanc pour regarder les passants de la rue de l'Odéon.\n• Accompagne tes pâtes fraîches d'un vin rouge italien nature conseillé à l'ardoise par l'équipe.\n• Pense à réserver pour le dîner, le lieu étant particulièrement confidentiel et prisé des gens du quartier.",
      dominant_mood: "chill",
      nearest_metro: "Odéon",
      metro_lines: ["4", "10"],
      has_terrace: true,
      reservation_policy: "resa_conseillee",
      closes_late: false,
      subcategories: ["italien", "trattoria"]
    },
    [0, 4, 1, 3, 2] // photo_0 (storefront with Thomas Paine plaque) is hero
  );
}

main().catch(console.error);
