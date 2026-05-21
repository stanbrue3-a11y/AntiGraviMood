const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: false,
  closes_late: false,
  nearest_metro: 'Gaîté',
  metro_lines: ['13'],
  reservation_policy: 'resa_conseillee',
  subcategories: ['cuisine_japonaise', 'teppanyaki', 'sushi'],
  raw_facts: [
    'cuisine interactive japonaise préparée sur plaque chauffante',
    'long comptoir en marbre noir marbré de blanc',
    'plafond habillé de fines lattes de bois clair',
    'salle épurée aux teintes gris ardoise',
    'plaques teppanyaki intégrées et hottes en inox',
    'saumon teriyaki et bœuf grillé servis sur assiettes en céramique',
  ],
  sensory_material:
    'le comptoir en marbre noir et les lattes de bois clair sous des hottes en inox',
  sensory_noise:
    'le grésillements discret des viandes sur la plaque et les conversations étouffées',
  description:
    "À quelques minutes de la gare Montparnasse, Ayako Teppanyaki offre une immersion moderne et intime dans la gastronomie japonaise sur plaque chauffante. Dans une salle épurée aux teintes gris ardoise, un long comptoir en marbre noir marbré de blanc fait face aux plaques de cuisson intégrées, surmontées de hottes en inox. Sous un plafond habillé de fines lattes de bois clair, les convives s'installent pour observer le chef orchestrer les cuissons en direct. Les viandes émincées et les légumes grillés grésillent doucement sous les yeux des clients, créant une ambiance feutrée et captivante, idéale pour un dîner à la fois calme et hypnotique dans sa simplicité.",
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote:
    'Nous étions installés autour du teppanyaki, la plaque de cuisson, avec la cuisine réalisée en direct devant nous',
  insider_tips: [
    'Choisissez absolument une place au comptoir pour profiter du spectacle de la cuisson en direct.',
    'Testez le pavé de saumon teriyaki grillé à la plaque, la caramélisation de la sauce y est parfaite.',
    "Pensez à réserver plusieurs jours à l'avance, le nombre de places assises autour du teppanyaki étant très limité.",
  ],
  tags: ['new_lot', 'pastille_rouge'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : magnifique comptoir en marbre noir devant les plaques teppanyaki (Index #0), pavés de saumon et bœuf saisis à la plaque, salle feutrée aux murs gris ardoise. Pas de terrasse extérieure.',
  ],
};

try {
  console.log('Updating Ayako Teppanyaki...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'ayako-teppanyaki', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed.', e.message);
}
