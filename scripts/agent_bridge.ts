import path from 'path';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import metroData from './data/paris_metro_stations.json';

// Ce script est la "Télécommande" exclusive de l'Agent IA (Antigravity).
// Il permet de lire et d'enrichir les fiches Supabase sans générer de fichiers locaux.

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Clés API Supabase manquantes dans le .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  const args = process.argv.slice(2);
  const action = args[0]; // --list, --get, --update, --menu, --audit
  const slug = args[1];

  if (action === '--list') {
    const arrFlagIndex = args.indexOf('--arrondissement');
    const statusFlagIndex = args.indexOf('--status');

    const arr = arrFlagIndex !== -1 ? parseInt(args[arrFlagIndex + 1]) : null;
    const status = statusFlagIndex !== -1 ? args[statusFlagIndex + 1] : null;

    console.log(`📡 Récupération des fiches ${arr ? 'dans le ' + arr + 'ème ' : 'récentes'}...`);
    let query = supabase
      .from('places')
      .select('slug, name, status, dominant_mood, arrondissement')
      .order('created_at', { ascending: false });

    if (arr) {
      query = query.eq('arrondissement', arr);
    }
    if (status) {
      query = query.eq('status', status);
    }

    if (!arr && !status) {
      query = query.limit(10);
    }

    const { data, error } = await query;
    if (error) throw error;
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (!slug && (action === '--get' || action === '--update' || action === '--audit')) {
    console.error(
      '❌ Précisez un slug. Ex: npx tsx scripts/agent_bridge.ts --audit le-cornichon-paris-14',
    );
    process.exit(1);
  }

  if (action === '--audit') {
    const { data: p, error } = await supabase.from('places').select('*').eq('slug', slug).single();
    if (error || !p) {
      console.error(`❌ Fiche "${slug}" introuvable.`);
      process.exit(1);
    }

    // Phase 1 : champs que l'Agent doit remplir (obligatoires avant publication)
    const phase1 = [
      { label: 'description (200 car. min)', ok: !!(p.description && p.description.length >= 200) },
      {
        label: 'insider_tip (3 • min)',
        ok: !!(p.insider_tip && (p.insider_tip.match(/•/g) || []).length >= 3),
      },
      { label: 'dominant_mood', ok: !!p.dominant_mood },
      { label: 'nearest_metro', ok: !!p.nearest_metro },
      { label: 'metro_lines', ok: !!(p.metro_lines && p.metro_lines.length > 0) },
      { label: 'subcategories', ok: !!(p.subcategories && p.subcategories.length > 0) },
      { label: 'has_terrace', ok: p.has_terrace !== null },
      { label: 'reservation_policy', ok: !!p.reservation_policy },
      { label: 'hero_image', ok: !!p.hero_image },
      { label: 'closes_late', ok: p.closes_late !== null },
      {
        label: 'Audit F.I.P.P (Façade #1)',
        ok: !!(
          p.internal_audit_logs &&
          p.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'))
        ),
      },
    ];
    // Phase 2 : champs menu — NORMALEMENT vides jusqu'à réception de la photo du menu
    const phase2 = [
      { label: 'on_mange_quoi_ici', ok: !!p.on_mange_quoi_ici },
      { label: 'plat_median_cents', ok: !!p.plat_median_cents },
    ];

    const p1score = phase1.filter((c) => c.ok).length;
    const p1total = phase1.length;
    const p1pct = Math.round((p1score / p1total) * 100);

    console.log(`\n📋 AUDIT — ${p.name} [${p.status}]`);
    console.log('='.repeat(50));
    console.log('  — PHASE 1 (Enrichissement éditorial) —');
    phase1.forEach((c) => console.log(`  ${c.ok ? '✅' : '❌'} ${c.label}`));
    console.log(`  Score Phase 1 : ${p1score}/${p1total} (${p1pct}%)`);
    console.log('  — PHASE 2 (Menu — requiert photo) —');
    phase2.forEach((c) => console.log(`  ${c.ok ? '✅' : '⏳'} ${c.label}`));
    console.log('='.repeat(50));

    if (p.status === 'SCAFFOLDED' && p1pct < 100) {
      console.log(`  ⚠️  Phase 1 incomplète — ${p1total - p1score} champ(s) manquant(s).`);
    } else if (p.status === 'SCAFFOLDED' && !p.on_mange_quoi_ici) {
      console.log(`  🟡 Phase 1 complète. En attente de la photo du menu (Phase 2).`);
    } else if (p.status === 'PUBLISHED') {
      console.log(`  🟢 Fiche publiée et complète.`);
    }
    return;
  }

  if (action === '--get') {
    const { data, error } = await supabase.from('places').select('*').eq('slug', slug).single();
    if (error) throw error;
    console.log(JSON.stringify(data, null, 2));
  } else if (action === '--update') {
    const payloadStr = args.slice(2).join(' ');
    if (!payloadStr) {
      console.error('❌ Payload JSON manquant pour la mise à jour.');
      process.exit(1);
    }
    const payload = JSON.parse(payloadStr);

    // 🛑 BOUCLIER ANTI-BÊTISE : Interdiction formelle de remplir le plat avant la Phase 2
    if (payload.on_mange_quoi_ici !== undefined) {
      console.error(
        "🛑 ERREUR FATALE (ANTI-BÊTISE) : Il est strictement interdit de remplir 'on_mange_quoi_ici' pendant la Phase 1. Ce champ est réservé à la Phase 2 (Photo du Menu). La transaction a été bloquée pour protéger la base de données.",
      );
      process.exit(1);
    }

    // 🛡️ VALIDATION : Ontologie des sous-catégories
    if (payload.subcategories) {
      const subcatsPath = path.join(__dirname, 'data/subcategories.json');
      if (fs.existsSync(subcatsPath)) {
        const subcatsRef = JSON.parse(fs.readFileSync(subcatsPath, 'utf-8'));
        const allValidSubcats = new Set([
          ...(subcatsRef.format || []),
          ...(subcatsRef.cuisine || []),
          ...(subcatsRef.specialite || []),
        ]);
        for (const subcat of payload.subcategories) {
          if (!allValidSubcats.has(subcat)) {
            console.error(
              `🛑 ERREUR FATALE (ONTOLOGIE) : La sous-catégorie "${subcat}" n'existe pas dans le référentiel strict.`,
            );
            console.error(
              `   👉 Consultez scripts/data/subcategories.json pour choisir parmi les tags autorisés (format, cuisine, specialite).`,
            );
            process.exit(1);
          }
        }
      }
    }

    // 🛑 VALIDATION : Fracture Structurelle de l'insider_tip
    if (payload.insider_tips) {
      if (!Array.isArray(payload.insider_tips) || payload.insider_tips.length !== 3) {
        console.error(
          "🛑 ERREUR FATALE (ÉDITORIAL) : 'insider_tips' DOIT être un tableau JSON strict contenant EXACTEMENT 3 éléments.",
        );
        process.exit(1);
      }
      // 🛑 ANTI-TITRES RIGIDES
      const forbiddenTitles = [/Le Dogme\s*:/i, /Mon conseil\s*:/i, /Timing\s*:/i, /Conseil\s*:/i];
      for (const tip of payload.insider_tips) {
        const foundTitle = forbiddenTitles.find((p) => p.test(tip));
        if (foundTitle) {
          console.error(
            `🛑 ERREUR ÉDITORIALE (RIGIDITÉ) : Ne mettez pas de titres type "${foundTitle.source}" dans l'insider tip. Parlez naturellement.`,
          );
          process.exit(1);
        }
      }
      // Concaténation pour Supabase (qui attend un string)
      payload.insider_tip = payload.insider_tips
        .map((tip: string) => `• ${tip.replace(/^•\s*/, '')}`)
        .join('\n');
      delete payload.insider_tips;
    } else if (payload.insider_tip) {
      console.error(
        "🛑 ERREUR FATALE (ÉDITORIAL) : L'ancien format 'insider_tip' (string) est obsolète. Utilisez 'insider_tips' (tableau strict de 3 éléments).",
      );
      process.exit(1);
    }

    if (payload.description) {
      // 🛑 VALIDATION : Fact-Extract First
      if (
        !payload.raw_facts ||
        !Array.isArray(payload.raw_facts) ||
        payload.raw_facts.length === 0
      ) {
        console.error(
          "🛑 ERREUR FATALE (PROCESS) : Vous devez obligatoirement fournir un tableau 'raw_facts' contenant vos extractions brutes AVANT de rédiger la description.",
        );
        process.exit(1);
      }

      // 🛑 VALIDATION : Champs Sensoriels Obligatoires
      if (!payload.sensory_material || !payload.sensory_noise) {
        console.error(
          "🛑 ERREUR FATALE (SENSORY) : Vous devez fournir 'sensory_material' (ex: 'bois patiné') et 'sensory_noise' (ex: 'brouhaha de brasserie') dans le payload.",
        );
        process.exit(1);
      }

      if (payload.description.length < 200) {
        console.error(
          '❌ ERREUR QUALITÉ : La description est trop courte (min 200 car.). Soyez plus immersif.',
        );
        process.exit(1);
      }
    }

    const combinedText = (payload.description || '') + ' ' + (payload.insider_tip || '');

    // 🛡️ DÉTECTEUR DE RACINES (ANTI-BULLSHIT AMÉLIORÉ)
    const FORBIDDEN_ROOTS = [
      'généreu',
      'authentiq',
      'convivial',
      'traditionnel',
      'pépite',
      'incontournable',
      'chaleur',
      'impeccable',
      'perle rare',
      'vaut le détour',
      'expérience unique',
      'institution',
      'spectaculaire',
      'véritable',
      'écrin',
      'chic',
      'cosy',
      'élégance',
      'parisien',
      'cadre',
      'nostalgi',
    ];
    const foundForbidden = FORBIDDEN_ROOTS.find((root) => {
      const regex = new RegExp(`\\b${root}`, 'i');
      return regex.test(combinedText);
    });
    if (foundForbidden) {
      console.error(
        `🛑 ERREUR ÉDITORIALE (MOTS CREUX) : Votre texte contient des clichés interdits (racine détectée : "${foundForbidden}")`,
      );
      process.exit(1);
    }

    // 🛡️ GARDE-FOU ADN (4.0) — Bloque l'enrichissement si le lieu ne respecte pas le standard
    const { data: ratingData } = await supabase
      .from('places')
      .select('google_rating, name')
      .eq('slug', slug)
      .single();
    if (ratingData && ratingData.google_rating < 4.0) {
      console.error(
        `🛑 REJET ADN (agent_bridge) : "${ratingData.name}" (${ratingData.google_rating}) est en dessous du standard 4.0.`,
      );
      console.error(`   👉 Ce lieu ne peut plus être enrichi éditorialement.`);
      process.exit(1);
    }

    if (payload.description) {
      // 🛡️ DÉTECTEUR DE LYRISME (ANTI-BULLSHIT)
      const LYRISME_PATTERNS = [
        /moment suspendu/i,
        /voyage sensoriel/i,
        /explosion de saveurs/i,
        /éveil des sens/i,
        /sublimer le produit/i,
        /invitation au voyage/i,
        /paradis des gourmets/i,
        /pépite gastronomique/i,
        /magie opère/i,
        /capsule temporelle/i,
        /véritable ambassade/i,
        /escale (levantine|asiatique|italienne)/i,
      ];
      const foundLyrisme = LYRISME_PATTERNS.find((p) => p.test(combinedText));
      if (foundLyrisme) {
        console.error(
          `🛑 ERREUR ÉDITORIALE (LYRISME) : Le texte est trop "marketing" (pattern détecté : "${foundLyrisme.source}"). Soyez plus factuel et naturel.`,
        );
        process.exit(1);
      }

      // 🛡️ DÉTECTEUR CORPORATE / RP / BIOGRAPHIE (ANTI-BULLSHIT)
      const CORPORATE_PATTERNS = [
        /groupe \w+/i,
        /signé par/i,
        /appartenant au/i,
        /nouvelle adresse de/i,
        /petit frère de/i,
        /en face de/i,
        /face à/i,
        /(le|la) chef(fe)?\s+[A-Z][a-z]+/i,
        /(la|sa) cuisine du chef/i,
        /cuisine du chef/i,
        /fondateur/i,
        /propriétaire/i,
        /fondé par/i,
        /créé par/i,
        /ouvert par/i,
        /imaginé par/i,
        /pensé par/i,
        /l'histoire de/i,
      ];
      const foundCorporate = CORPORATE_PATTERNS.find((p) => p.test(combinedText));
      if (foundCorporate) {
        console.error(
          `🛑 ERREUR ÉDITORIALE (CORPORATE/RP/BIO) : Le texte contient du name-dropping, des biographies ou des références externes ("${foundCorporate.source}"). Racontez l'expérience du lieu, pas la vie des fondateurs, et ne citez pas la concurrence.`,
        );
        process.exit(1);
      }

      // 🛡️ DÉTECTEUR DE CONTRADICTION DE MOOD
      if (
        payload.dominant_mood === 'chill' ||
        (!payload.dominant_mood &&
          (await supabase.from('places').select('dominant_mood').eq('slug', slug).single()).data
            ?.dominant_mood === 'chill')
      ) {
        const noisePatterns = [
          /bruyant/i,
          /agité/i,
          /foule/i,
          /complet/i,
          /serré/i,
          /animé/i,
          /anime/i,
          /s'anime/i,
          /vivant/i,
        ];
        const foundNoise = noisePatterns.find((p) => p.test(combinedText));
        if (foundNoise) {
          console.error(
            `🛑 CONTRADICTION DÉTECTÉE : Vous décrivez un lieu "${foundNoise.source}" mais le mood est "chill". Un lieu chill DOIT être calme et posé.`,
          );
          process.exit(1);
        }
      }

      // 🛡️ DÉTECTEUR DE MATIÈRE (SENSORY CHECK)
      const sensoryPatterns = [
        /zinc/i,
        /bois/i,
        /pierre/i,
        /velours/i,
        /bruit/i,
        /odeur/i,
        /vacarme/i,
        /froid/i,
        /chaud/i,
        /matière/i,
        /marbre/i,
        /cuivre/i,
        /céramique/i,
        /brique/i,
        /béton/i,
        /zinc/i,
      ];
      const hasSensory = sensoryPatterns.some((p) => p.test(combinedText));
      if (!hasSensory) {
        console.error(
          `🛑 ERREUR QUALITÉ (SENSORY) : Votre description manque de "matière". Mentionnez au moins un élément physique (zinc, bois, pierre, vacarme, odeur...).`,
        );
        process.exit(1);
      }

      // 🛡️ GARDE-FOU ANTI-HALLUCINATION (DURCI AVEC PREUVE EXACTE)
      const HALLUCINATION_PATTERNS = [
        /même filière/i,
        /même fournisseur/i,
        /approvisionné (chez|par|auprès)/i,
        /livré (en|par|depuis|directement)/i,
        /pêché (en|par|à|dans)/i,
        /élevé (en|par|à|dans)/i,
        /maturation de \d+/i,
        /en provenance de/i,
        /sourcé (chez|auprès|directement)/i,
        /provenance (de|du|des)/i,
        /producteur/i,
        /éleveur/i,
        /maraîcher/i,
        /pêcheur/i,
        /charcutier/i,
        /boulanger/i,
      ];
      const riskyMatch = HALLUCINATION_PATTERNS.find((p) => p.test(combinedText));
      if (riskyMatch && (!payload.dogme_source_ref || !payload.dogme_exact_quote)) {
        console.error(
          `🛑 ERREUR ANTI-HALLUCINATION : Le texte contient une affirmation technique (pattern : "${riskyMatch.source}").`,
        );
        console.error(
          `   ➡️  AJOUTEZ "dogme_source_ref" (URL/ID) ET "dogme_exact_quote" (phrase copiée-collée) pour PROUVER le sourcing.`,
        );
        process.exit(1);
      }
      if (payload.dogme_source_ref) {
        const validRefs = ['GOOGLE_REVIEWS', 'SITE_OFFICIEL', 'MENU_PHOTO'];
        if (
          !validRefs.includes(payload.dogme_source_ref) &&
          !payload.dogme_source_ref.startsWith('http://') &&
          !payload.dogme_source_ref.startsWith('https://')
        ) {
          console.error(
            "🛑 ERREUR ANTI-HALLUCINATION : La source fournie doit être soit une URL valide (http/https), soit l'une des valeurs autorisées (GOOGLE_REVIEWS, SITE_OFFICIEL, MENU_PHOTO).",
          );
          process.exit(1);
        }
      }

      // 🛡️ VÉRIFICATION CRYPTOGRAPHIQUE DE LA CITATION GOOGLE REVIEWS
      if (payload.dogme_source_ref === 'GOOGLE_REVIEWS' && payload.dogme_exact_quote) {
        const { data: placeData } = await supabase
          .from('places')
          .select('google_id')
          .eq('slug', slug)
          .single();
        if (placeData && placeData.google_id) {
          const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
          if (apiKey) {
            try {
              const res = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeData.google_id}&fields=reviews&key=${apiKey}&language=fr`,
              );
              const json = await res.json();
              const reviews = json.result?.reviews || [];

              // Normalisation stricte pour la comparaison (lettres/chiffres uniquement)
              const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
              const normalizedQuote = normalize(payload.dogme_exact_quote);

              // On vérifie si un des 5 derniers avis contient la citation (au moins partiellement, min 10 chars)
              if (normalizedQuote.length > 10) {
                const isQuoteReal = reviews.some((r: any) =>
                  normalize(r.text || '').includes(normalizedQuote),
                );

                if (!isQuoteReal) {
                  console.error(
                    `🛑 ERREUR ANTI-HALLUCINATION FATALE : La citation ("${payload.dogme_exact_quote}") est introuvable dans les avis Google Maps récents !`,
                  );
                  console.error(
                    `   👉 L'IA A HALLUCINÉ LA SOURCE. Vous DEVEZ copier-coller une vraie phrase issue d'un vrai client.`,
                  );
                  process.exit(1);
                }
              }
            } catch (e) {
              console.error(
                "⚠️ Impossible de vérifier la citation avec l'API Google, vérification manuelle requise.",
              );
            }
          }
        }
      }

      // 🛡️ GARDE-FOU GÉOGRAPHIQUE : Anti-Hallucination d'arrondissement
      const { data: placeData } = await supabase
        .from('places')
        .select('arrondissement')
        .eq('slug', slug)
        .single();
      const realArr = placeData?.arrondissement;
      if (realArr) {
        const arrNames = [
          'premier',
          'deuxième',
          'troisième',
          'quatrième',
          'cinquième',
          'sixième',
          'septième',
          'huitième',
          'neuvième',
          'dixième',
          'onzième',
          'douzième',
          'treizième',
          'quatorzième',
          'quinzième',
          'seizième',
          'dix-septième',
          'dix-huitième',
          'dix-neuvième',
          'vingtième',
        ];
        for (let i = 1; i <= 20; i++) {
          if (i === realArr) continue;
          const digitRegex = new RegExp(`\\b${i}\\s*(e|ème|eme)\\b`, 'i');
          if (digitRegex.test(combinedText)) {
            console.error(
              `🛑 CONTRADICTION GÉO : Le texte mentionne le ${i}e arrondissement, mais ce lieu est dans le ${realArr}e.`,
            );
            process.exit(1);
          }
        }
      }
    }

    // 🛡️ GARDE-FOU F.I.P.P (VISUAL AUDIT)
    if (payload.tags && payload.tags.includes('pastille_bleue')) {
      const hasAuditLog =
        payload.internal_audit_logs &&
        payload.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'));
      const { data: existing } = await supabase
        .from('places')
        .select('internal_audit_logs')
        .eq('slug', slug)
        .single();
      const alreadyHasAudit =
        existing?.internal_audit_logs &&
        existing.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'));

      if (!hasAuditLog && !alreadyHasAudit) {
        console.error(
          `🛑 ERREUR QUALITÉ (F.I.P.P) : La pastille_bleue exige un audit visuel systématique.`,
        );
        console.error(
          `   ➡️  Ajoutez "[AUDIT F.I.P.P OK] Ordre validé : [X, Y, Z]" dans vos internal_audit_logs.`,
        );
        console.error(
          `   👉 RAPPEL ORDRE : 1. Façade -> 2. Intérieur -> 3. Plats (Ne jamais mettre un plat en 2ème si un intérieur est dispo).`,
        );
        process.exit(1);
      }
    }

    // 🛑 VALIDATION : Enum Dominant Mood
    const validMoods = ['chill', 'festif', 'culturel'];
    if (payload.dominant_mood !== undefined && !validMoods.includes(payload.dominant_mood)) {
      console.error(
        `🛑 ERREUR FATALE (ENUM) : dominant_mood doit être l'un de : ${validMoods.join(', ')}`,
      );
      process.exit(1);
    }

    if (payload.tags && payload.tags.includes('pastille_bleue') && !payload.dominant_mood) {
      const { data: existingPlace } = await supabase
        .from('places')
        .select('dominant_mood')
        .eq('slug', slug)
        .single();
      if (!existingPlace?.dominant_mood) {
        console.error(
          "🛑 ERREUR QUALITÉ : Impossible de certifier (pastille_bleue) sans définir un 'dominant_mood'.",
        );
        process.exit(1);
      }
    }

    // 🛑 VALIDATION : Garde-Fou Titan (Anti-Omission)
    // Si l'agent enrichit l'éditorial (Phase 1 bis), il DOIT obligatoirement auditer le métro, la terrasse et les sous-catégories.
    if (payload.description || payload.insider_tip) {
      if (
        !payload.subcategories ||
        !Array.isArray(payload.subcategories) ||
        payload.subcategories.length === 0
      ) {
        console.error(
          "🛑 ERREUR FATALE (TITAN) : Le tableau 'subcategories' est obligatoire (ex: ['brunch', 'coffee_shop']).",
        );
        process.exit(1);
      }
      if (payload.nearest_metro === undefined || !Array.isArray(payload.metro_lines)) {
        console.error(
          "🛑 ERREUR FATALE (TITAN) : L'audit du métro (nearest_metro et metro_lines en tableau) est OBLIGATOIRE lors de l'enrichissement éditorial !",
        );
        process.exit(1);
      }
      if (payload.has_terrace === undefined) {
        console.error(
          "🛑 ERREUR FATALE (TITAN) : L'audit visuel de la terrasse (has_terrace en boolean) est OBLIGATOIRE ! Ne vous fiez pas aveuglément à Google.",
        );
        process.exit(1);
      }
    }

    // 🛑 VALIDATION : Ontologie Stricte (subcategories.json) toujours exécutée si subcategories est fourni
    if (payload.subcategories) {
      const subcatRefPath = path.join(__dirname, 'data/subcategories.json');
      if (fs.existsSync(subcatRefPath)) {
        const subcatData = JSON.parse(fs.readFileSync(subcatRefPath, 'utf8'));
        const allowedSubcats = [
          ...subcatData.format,
          ...subcatData.cuisine,
          ...subcatData.specialite,
        ];
        const invalidSubcat = payload.subcategories.find(
          (s: string) => !allowedSubcats.includes(s),
        );
        if (invalidSubcat) {
          console.error(
            `🛑 ERREUR FATALE (ONTOLOGIE) : La sous-catégorie "${invalidSubcat}" n'existe pas dans le référentiel strict.`,
          );
          console.error(
            `   👉 Consultez scripts/data/subcategories.json pour choisir parmi les tags autorisés (format, cuisine, specialite).`,
          );
          process.exit(1);
        }
      } else {
        console.error(
          "⚠️ Fichier data/subcategories.json introuvable. Validation de l'ontologie ignorée.",
        );
      }
    }

    // 🛑 VALIDATION : Enum Category
    const validCategories = ['restaurant', 'bar', 'café'];
    if (payload.category && !validCategories.includes(payload.category)) {
      console.error(
        `🛑 ERREUR FATALE (ADN) : Un lieu DOIT être l'un de : ${validCategories.join(', ')}. Pas de club, boulangerie ou autre !`,
      );
      process.exit(1);
    }

    // 🛑 VALIDATION : Enum Reservation Policy
    const validResa = ['sans_resa', 'resa_conseillee', 'resa_obligatoire'];
    if (payload.reservation_policy && !validResa.includes(payload.reservation_policy)) {
      console.error(
        `🛑 ERREUR FATALE (ENUM) : reservation_policy doit être l'un de : ${validResa.join(', ')}`,
      );
      process.exit(1);
    }

    // 🛑 VALIDATION : Métro parisien — source : paris_metro_stations.json (250+ stations, 0 appel API)
    const METRO_MAP = (metroData as any).stations as Record<string, string[]>;
    if (payload.nearest_metro && !METRO_MAP[payload.nearest_metro]) {
      console.error(
        `🛑 ERREUR GÉO : Station "${payload.nearest_metro}" inconnue dans le référentiel RATP.`,
      );
      console.error(
        `   Vérifiez l'orthographe exacte (accents inclus). Ex: "Châtelet", "Denfert-Rochereau".`,
      );
      process.exit(1);
    }
    if (payload.metro_lines && payload.nearest_metro && METRO_MAP[payload.nearest_metro]) {
      const validLines = METRO_MAP[payload.nearest_metro];
      const invalidLines = payload.metro_lines.filter((l: string) => !validLines.includes(l));
      if (invalidLines.length > 0) {
        console.error(
          `🛑 ERREUR GÉO : La ligne ${invalidLines.join(', ')} ne dessert pas "${payload.nearest_metro}". Lignes valides : ${validLines.join(', ')}.`,
        );
        process.exit(1);
      }
    }

    // 🛡️ GARDE-FOU F.I.P.P (Protocole Média Titan)
    // La hero_image et google_photos sont traités séparément par le frontend (maxwidth=1600 vs maxwidth=800).
    // On s'assure donc que la hero_image N'EST PAS dans google_photos pour éviter les doublons UI.
    if (payload.hero_image && payload.google_photos && Array.isArray(payload.google_photos)) {
      if (payload.google_photos.includes(payload.hero_image)) {
        payload.google_photos = payload.google_photos.filter(
          (p: string) => p !== payload.hero_image,
        );
        console.log(
          '📸 [F.I.P.P] Auto-correction : hero_image retirée de google_photos pour éviter les doublons UI.',
        );
      }
    }

    // 🛡️ AUTO-TAGGING : Marquage automatique des lots pour l'UI
    const { data: current } = await supabase
      .from('places')
      .select('tags')
      .eq('slug', slug)
      .single();
    let existingTags = current?.tags || [];
    let incomingTags = payload.tags || [];

    // On fusionne les tags existants et les nouveaux en évitant les doublons
    let finalTags = Array.from(new Set([...existingTags, ...incomingTags]));

    // On ajoute new_lot et pastille_rouge par défaut UNIQUEMENT si aucune pastille spécifique n'est présente
    if (
      finalTags.length === 0 ||
      (!finalTags.includes('new_lot') &&
        !finalTags.includes('pastille_bleue') &&
        !finalTags.includes('pastille_rouge'))
    ) {
      finalTags.push('new_lot', 'pastille_rouge');
    }
    payload.tags = finalTags;

    // 🛡️ GARDE-FOU ANTI-HALLUCINATION : Persistance de la Preuve dans les logs
    if (payload.dogme_source_ref && payload.dogme_exact_quote) {
      const { data: logData } = await supabase
        .from('places')
        .select('internal_audit_logs')
        .eq('slug', slug)
        .single();
      const existingLogs = logData?.internal_audit_logs || [];
      const proofLog = `[DOGME PROOF] Ref: ${payload.dogme_source_ref} | Citation exacte: "${payload.dogme_exact_quote}"`;
      payload.internal_audit_logs = [
        ...existingLogs,
        ...(payload.internal_audit_logs || []),
        proofLog,
      ];
    }

    // 🧹 Nettoyage : champs de validation locale, pas des colonnes Supabase
    delete payload.dogme_source;
    delete payload.dogme_source_ref;
    delete payload.dogme_exact_quote;
    delete payload.raw_facts;
    delete payload.sensory_material;
    delete payload.sensory_noise;

    const { data, error } = await supabase.from('places').update(payload).eq('slug', slug).select();

    if (error) throw error;
    if (!data || data.length === 0) {
      console.error(
        `❌ ERREUR FATALE : Aucun lieu trouvé avec le slug "${slug}". La mise à jour a échoué (0 ligne affectée). Vérifiez le slug !`,
      );
      process.exit(1);
    }
    console.log(`✅ [ANTIGRAVITY] Mise à jour éditoriale réussie pour ${slug}`);
    console.log(JSON.stringify(data[0], null, 2));
  } else if (action === '--menu') {
    // [Titan-V4 Relational Menus Ingestion]
    const payloadStr = args.slice(2).join(' ');
    const payload = JSON.parse(payloadStr);

    if (!payload.on_mange_quoi_ici) {
      console.error("❌ La commande --menu exige le champ 'on_mange_quoi_ici'.");
      process.exit(1);
    }

    // Validation du format on_mange_quoi_ici (Standard Titan / Workflow Surgical Data Entry)
    const onMangeQuoiPattern = /^Cuisine\s+[^.]+\.\s+[^&]+\s+&\s+[^&]+\.$/;
    if (!onMangeQuoiPattern.test(payload.on_mange_quoi_ici.trim())) {
      console.error(
        `🛑 ERREUR FATALE (FORMAT DU MENU) : Le champ 'on_mange_quoi_ici' ne respecte pas le format du workflow : "Cuisine [adjectif/type]. [Plat 1] & [Plat 2]."\n` +
        `Reçu : "${payload.on_mange_quoi_ici}"\n` +
        `Exemple valide : "Cuisine tibétaine. Sha momos au bœuf & Then Thuk."`
      );
      process.exit(1);
    }

    if (
      !payload.Url_Photos_Menu ||
      !Array.isArray(payload.Url_Photos_Menu) ||
      payload.Url_Photos_Menu.length === 0
    ) {
      console.error(
        "🛑 ERREUR FATALE (ANTI-HALLUCINATION) : Passage en Phase 2 refusé. Vous DEVEZ fournir la preuve visuelle dans 'Url_Photos_Menu'. Pas de photo = pas de publication.",
      );
      process.exit(1);
    }

    // --- SÉCURITÉ STRUCTURELLE : Les menus doivent provenir de localhost:4500 / Supabase Storage place-media/menus/[slug]
    const bucketPrefix = `/storage/v1/object/public/place-media/menus/${slug}/`;
    for (const url of payload.Url_Photos_Menu) {
      const isSupabaseUrl = url.startsWith(SUPABASE_URL || '');
      const containsBucketPath = url.includes(bucketPrefix);
      if (!isSupabaseUrl || !containsBucketPath) {
        console.error(`🛑 SÉCURITÉ : L'URL du menu est invalide ou externe : "${url}".`);
        console.error(`   Tous les menus doivent être téléversés via le dashboard à l'adresse http://localhost:4500.`);
        process.exit(1);
      }
    }

    // Fetch place details
    const { data: currentPlace, error: fetchErr } = await supabase
      .from('places')
      .select('id, description, insider_tip')
      .eq('slug', slug)
      .single();
    if (fetchErr || !currentPlace) {
      console.error(`❌ ERREUR : Lieu avec le slug "${slug}" introuvable.`);
      process.exit(1);
    }
    if (!currentPlace.description || !currentPlace.insider_tip) {
      console.error(
        "❌ ERREUR : Impossible de publier (PUBLISHED). La Phase 1 (Description + Insider Tip) doit être complétée d'abord.",
      );
      process.exit(1);
    }

    const placeId = currentPlace.id;
    const payloadCategories = payload.menu_items || [];

    // Fetch existing categories and items on Supabase for inflation logging
    const { data: dbCategories } = await supabase
      .from('menu_categories')
      .select('*')
      .eq('place_id', placeId);
    const { data: dbItems } = await supabase.from('menu_items').select('*').eq('place_id', placeId);

    const categoryIdsToKeep = new Set<string>();
    const itemIdsToKeep = new Set<string>();

    console.log(`⛓️  [TITAN V4] Ingestion relationnelle en cours pour ${slug}...`);

    let sortOrder = 1;
    for (const payCat of payloadCategories) {
      const catType = payCat.category_type;
      const displayLabel = payCat.display_label;

      let dbCat = dbCategories?.find(
        (c) => c.category_type === catType && c.display_label === displayLabel,
      );
      let categoryId: string;

      if (dbCat) {
        categoryId = dbCat.id;
        categoryIdsToKeep.add(categoryId);
        // Sync sort order
        await supabase
          .from('menu_categories')
          .update({ sort_order: sortOrder })
          .eq('id', categoryId);
      } else {
        const { data: newCat, error: catErr } = await supabase
          .from('menu_categories')
          .insert({
            place_id: placeId,
            category_type: catType,
            display_label: displayLabel,
            sort_order: sortOrder,
          })
          .select()
          .single();
        if (catErr) throw catErr;
        categoryId = newCat.id;
        categoryIdsToKeep.add(categoryId);
      }
      sortOrder++;

      for (const payItem of payCat.items || []) {
        const itemName = payItem.name;
        const newPrice = payItem.price_cents || null;
        const newHhPrice = payItem.happy_hour_price_cents || null;
        const description = payItem.description || null;
        const isHighlight = payItem.is_highlight || false;

        let dbItem = dbItems?.find(
          (i) => i.name.toLowerCase().trim() === itemName.toLowerCase().trim(),
        );
        let itemId: string;

        if (dbItem) {
          itemId = dbItem.id;
          itemIdsToKeep.add(itemId);

          const oldPrice = dbItem.price_cents;

          // Inflation Ledger Logging
          if (oldPrice !== newPrice) {
            await supabase.from('menu_price_history').insert({
              menu_item_id: itemId,
              place_id: placeId,
              item_name: itemName,
              old_price_cents: oldPrice,
              new_price_cents: newPrice,
            });
            console.log(
              `📈 [INFLATION] Prix modifié pour "${itemName}" chez ${slug} : ${oldPrice ? oldPrice / 100 : 'null'}€ -> ${newPrice ? newPrice / 100 : 'null'}€`,
            );
          }

          // Update item details
          const { error: itemUpdateErr } = await supabase
            .from('menu_items')
            .update({
              category_id: categoryId,
              price_cents: newPrice,
              happy_hour_price_cents: newHhPrice,
              description: description,
              is_highlight: isHighlight,
            })
            .eq('id', itemId);
          if (itemUpdateErr) throw itemUpdateErr;
        } else {
          // Create new item
          const { data: newItem, error: itemErr } = await supabase
            .from('menu_items')
            .insert({
              category_id: categoryId,
              place_id: placeId,
              name: itemName,
              description: description,
              price_cents: newPrice,
              happy_hour_price_cents: newHhPrice,
              is_highlight: isHighlight,
            })
            .select()
            .single();
          if (itemErr) throw itemErr;

          itemId = newItem.id;
          itemIdsToKeep.add(itemId);

          // Initial price entry in ledger
          await supabase.from('menu_price_history').insert({
            menu_item_id: itemId,
            place_id: placeId,
            item_name: itemName,
            old_price_cents: null,
            new_price_cents: newPrice,
          });
        }
      }
    }

    // Clean orphaned items & categories
    if (dbItems) {
      for (const dbItem of dbItems) {
        if (!itemIdsToKeep.has(dbItem.id)) {
          const { error: delItemErr } = await supabase
            .from('menu_items')
            .delete()
            .eq('id', dbItem.id);
          if (delItemErr) throw delItemErr;
          console.log(`🧹 Plat orphelin supprimé : ${dbItem.name}`);
        }
      }
    }
    if (dbCategories) {
      for (const dbCat of dbCategories) {
        if (!categoryIdsToKeep.has(dbCat.id)) {
          const { error: delCatErr } = await supabase
            .from('menu_categories')
            .delete()
            .eq('id', dbCat.id);
          if (delCatErr) throw delCatErr;
          console.log(`🧹 Catégorie orpheline supprimée : ${dbCat.display_label}`);
        }
      }
    }

    // Compute plat_median_cents from main dishes
    const mainDishesPrices = payloadCategories
      .filter((c: any) => c.category_type === 'main')
      .flatMap((c: any) => c.items || [])
      .map((i: any) => i.price_cents)
      .filter((p: any) => typeof p === 'number' && p > 0)
      .sort((a: number, b: number) => a - b);

    let calculatedMedianCents: number | null = null;
    if (mainDishesPrices.length > 0) {
      const mid = Math.floor(mainDishesPrices.length / 2);
      if (mainDishesPrices.length % 2 !== 0) {
        calculatedMedianCents = mainDishesPrices[mid];
      } else {
        calculatedMedianCents = Math.round((mainDishesPrices[mid - 1] + mainDishesPrices[mid]) / 2);
      }
    }

    // Build Cache Values
    const finalMedianCents =
      calculatedMedianCents ||
      payload.plat_median_cents ||
      (payload.dish_price ? Math.round(payload.dish_price * 100) : null);

    let pintPriceCents = payload.pint_price ? Math.round(payload.pint_price * 100) : null;
    if (!pintPriceCents) {
      // Helper function to extract volume in cl
      const extractVolumeCl = (text: string): number | null => {
        const regex = /\b(\d+(?:[.,]\d+)?)\s*(cl|ml|l)\b/i;
        const match = text.match(regex);
        if (match) {
          const val = parseFloat(match[1].replace(',', '.'));
          const unit = match[2].toLowerCase();
          if (unit === 'cl') return val;
          if (unit === 'ml') return val / 10;
          if (unit === 'l') return val * 100;
        }
        return null;
      };

      const beerKeywords = /\b(?:bières?|beers?|pression|draft|cervoise|stout|pils|lager|blonde|blanche|brune|ipa|ale|asahi|kirin|singha|tsingtao|heineken|1664|almaza|corona|budweiser|carlsberg|guinness|leffe|duvel|chimay|chouffe|desperados)\b/i;
      const realPintPrices: number[] = [];

      const alcoholCategory = payloadCategories.find((c: any) => c.category_type === 'alcohol_drink');
      if (alcoholCategory && alcoholCategory.items) {
        for (const item of alcoholCategory.items) {
          const name = item.name || '';
          const desc = item.description || '';
          const fullText = `${name} ${desc}`;
          
          if (beerKeywords.test(fullText)) {
            const price = item.price_cents;
            if (typeof price === 'number' && price > 0) {
              const volumeCl = extractVolumeCl(fullText);
              const hasPintKeyword = /\b(?:pinte|pint)\b/i.test(fullText);
              
              // Standard Pint is 50cl. We ONLY consider it a pint if:
              // - It explicitly specifies 50cl (or 500ml / 0.5l)
              // - Or it explicitly contains the keyword "pinte" or "pint" AND does not specify a different volume (like 25cl, 33cl, etc.)
              const isExplicit50cl = volumeCl === 50;
              const isPintByName = hasPintKeyword && (volumeCl === null || volumeCl === 50);

              if (isExplicit50cl || isPintByName) {
                realPintPrices.push(price);
              }
            }
          }
        }
      }

      if (realPintPrices.length > 0) {
        pintPriceCents = Math.min(...realPintPrices);
        console.log(`🍺 [PINT] Found real pint price on the menu: ${pintPriceCents / 100}€ (${pintPriceCents} cents)`);
      }
    }

    const cocktailPriceCents = payload.cocktail_price
      ? Math.round(payload.cocktail_price * 100)
      : null;
    const coffeePriceCents = payload.coffee_price ? Math.round(payload.coffee_price * 100) : null;
    const wineGlassCents = payload.wine_glass ? Math.round(payload.wine_glass * 100) : null;

    // Update Places Table (Caches & Status)
    const { error: updatePlaceErr } = await supabase
      .from('places')
      .update({
        on_mange_quoi_ici: payload.on_mange_quoi_ici,
        plat_median_cents: finalMedianCents,
        pint_price_cents: pintPriceCents,
        cocktail_price_cents: cocktailPriceCents,
        coffee_price_cents: coffeePriceCents,
        wine_glass_cents: wineGlassCents,
        Url_Photos_Menu: payload.Url_Photos_Menu,
        menu_verified_at: new Date().toISOString(),
        status: 'PUBLISHED',
      })
      .eq('slug', slug);

    if (updatePlaceErr) throw updatePlaceErr;

    console.log(
      `✅ [PHASE 2] Menu ingéré de manière relationnelle, caches mis à jour, et fiche PUBLIÉE pour ${slug} !`,
    );
  } else if (action === '--delete') {
    const { error } = await supabase.from('places').delete().eq('slug', slug);
    if (error) throw error;
    console.log(`🗑️ [ANTIGRAVITY] Lieu supprimé avec succès : ${slug}`);
  }
}

main().catch(console.error);
