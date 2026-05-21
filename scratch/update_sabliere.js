const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: true,
  closes_late: false,
  nearest_metro: 'Pernety',
  metro_lines: ['13'],
  reservation_policy: 'resa_conseillee',
  subcategories: ['creperie', 'cuisine_bretonne', 'galettes'],
  raw_facts: [
    'store rouge vif avec enseigne lumineuse',
    'terrasse de trottoir avec chaises en métal rouge',
    'tables en bois sombre avec bolées de cidre en céramique grès',
    'billig visible dans la cuisine semi-ouverte',
    'galette complète sarrasin garnie d’œuf miroir',
    'crêpes sucrées servies sur assiettes artisanales rouges',
  ],
  sensory_material:
    'les tables en bois sombre et les bolées en céramique grès sous un store rouge protecteur',
  sensory_noise: 'les chuchotements discrets des clients et le crépitement lointain du billig',
  description:
    "Au coin de la paisible rue de la Sablière, cette petite crêperie de quartier se signale par son store rouge vif sous lequel s'alignent quelques chaises en métal rouge sur le trottoir. Passé la porte, la petite salle dévoile une atmosphère apaisante où des tables en bois sombre accueillent des bolées en céramique grès prêtes pour le cidre. Derrière l'ouverture menant aux fourneaux, le billig diffuse une odeur de sarrasin grillé qui emplit doucement l'espace. La carte se concentre sur des galettes de blé noir croustillantes et des crêpes sucrées classiques, servies avec simplicité dans un calme bienfaisant, loin du tumulte des grands boulevards.",
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'La crêperie est petite et donne une ambiance intimiste',
  insider_tips: [
    'Installez-vous en terrasse sur le trottoir pour profiter du calme de cette rue peu passante.',
    "Commandez la galette complète classique, le jaune d'œuf miroir y est cuit avec une précision rare.",
    'Pensez à réserver par téléphone au préalable car la salle ne compte que très peu de tables.',
  ],
  tags: ['new_lot', 'pastille_rouge'],
  internal_audit_logs: [
    "[AUDIT F.I.P.P OK] Photos vérifiées : store rouge et terrasse avec chaises rouges à l'extérieur (Index #0), galettes salées/sucrées excellentes et salle en bois/céramique à l'intérieur. Terrasse de trottoir validée.",
  ],
};

try {
  console.log('Updating Crêperie La Sablière...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'creperie-la-sabliere', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed.', e.message);
}
