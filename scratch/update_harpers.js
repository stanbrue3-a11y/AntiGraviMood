const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'festif',
  has_terrace: true,
  closes_late: false,
  nearest_metro: 'Pasteur',
  metro_lines: ['6', '12'],
  reservation_policy: 'resa_conseillee',
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: "Petit restaurant de quartier à l'ambiance très agréable",
  raw_facts: [
    'terrasse avec chaises en rotin bleu',
    'colonnes couvertes de bougainvilliers fuchsia',
    'parquet en bois clair',
    'banquettes tapissées rayées',
    'murs en brique blanche',
    'suspensions cuivre industrielles',
    'carte tapas et plats réconfortants',
  ],
  sensory_material:
    'le parquet en bois clair et les banquettes rayées sous des suspensions cuivrées',
  sensory_noise: "le brouhaha d'une terrasse de quartier animée les jours de beau temps",
  description:
    "À l'angle du boulevard, Harper's s'annonce d'abord par sa terrasse : des chaises en rotin bleu encadrent des colonnes entièrement couvertes de bougainvilliers fuchsia. À l'intérieur, le parquet en bois clair, les banquettes tapissées de rayures et les murs en brique blanche composent un décor de brasserie sous des suspensions cuivrées industrielles. La carte alterne plats réconfortants soignés — poulet pané panko, pièce de bœuf sur ardoise — et quelques touches plus travaillées à la truffe.",
  insider_tips: [
    'Le brunch du week-end attire du monde, mieux vaut réserver pour ne pas patienter.',
    "Le moelleux coulant au chocolat est la conclusion canonique d'un dîner ici.",
    'La terrasse fleurie de bougainvilliers est la plus photographiée du 15ème en été.',
  ],
  subcategories: ['bistrot_moderne', 'brunch'],
  tags: ['new_lot'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : terrasse bougainvilliers, chaises rotin bleu, intérieur brique/parquet/cuivre, assiettes chicken panko et bœuf ardoise.',
  ],
};

try {
  console.log("Updating Harper's Paris...");
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'harper-s', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed to update.', e.message);
}
