const { execFileSync } = require('child_process');

const payload = {
  dominant_mood: 'chill',
  has_terrace: false,
  closes_late: false,
  nearest_metro: 'Montparnasse - Bienvenüe',
  metro_lines: ['4', '6', '12', '13'],
  reservation_policy: 'resa_conseillee',
  dogme_source_ref: 'GOOGLE_REVIEWS',
  dogme_exact_quote: 'des pâtes fraîches et faites maison, ça se sent direct',
  raw_facts: [
    'végétation suspendue au plafond',
    'chaises en rotin tressé',
    'mur en zellige vert',
    'pâtes fraîches maison',
    'gnocchis et raviolis',
  ],
  sensory_material: 'les chaises en rotin tressé noir et blanc et le mur tapissé de zelliges verts',
  sensory_noise: 'le murmure des conversations de quartier',
  description:
    "Loin des stéréotypes habituels, cette trattoria cache un décor lumineux noyé sous la végétation suspendue au plafond. Entre les tables en bois, les assises en rotin tressé et le comptoir adossé à un mur de zelliges verts, on vient chercher le réconfort d'une pâte fraîche travaillée sur place. L'endroit crache depuis ses cuisines des assiettes denses de gnocchis et de raviolis farcis, sans triche ni fioritures.",
  insider_tips: [
    'Les portions de gnocchis sont denses, idéales pour les solides appétits.',
    "La prise de commande peut basculer sur QR code quand l'équipe de salle est prise d'assaut.",
    'Le lieu se remplit vite au dîner, il est largement préférable de sécuriser une table en amont.',
  ],
  subcategories: ['cuisine_italienne'],
  tags: ['new_lot'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photos vérifiées : végétation plafond, chaises rotin, assiettes de pâtes et raviolis.',
  ],
};

try {
  console.log('Updating Pastamore...');
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'pastamore', JSON.stringify(payload)],
    {
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Failed to update.', e);
}
