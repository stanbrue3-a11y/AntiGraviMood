import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
  dominant_mood: 'culturel',
  dogme_source:
    'institution bretonne, galettes pur beurre, spécialité Le Couple (double étage), décor boiseries et dentelles',
  description:
    "C'est le phare de la rue du Montparnasse. Depuis des décennies, la Crêperie de Josselin attire les foules pour ses galettes de blé noir généreusement beurrées et sa spécialité maison, 'Le Couple', une galette à deux étages. Le décor, inchangé, déploie ses boiseries sombres, ses faïences bretonnes et ses rideaux de dentelle, créant une atmosphère nostalgique et bouillonnante où l'on s'attable au coude-à-coude.",
  insider_tip:
    "• Prévoyez des espèces, la maison a la réputation historique de ne pas accepter la carte bancaire.\n• Sans réservations, l'attente est quasi-systématique : arrivez dès l'ouverture pour éviter la file d'attente qui s'étire sur le trottoir.",
  nearest_metro: 'Edgar Quinet',
  metro_lines: ['6'],
  has_terrace: true,
  reservation_policy: 'sans_resa',
  tags: ['new_lot', 'pastille_bleue'],
  internal_audit_logs: ['[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]'],
};

try {
  execFileSync(
    'npx',
    [
      'tsx',
      'scripts/agent_bridge.ts',
      '--update',
      'la-creperie-de-josselin',
      JSON.stringify(payload),
    ],
    {
      cwd: path.join(process.cwd()),
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Erreur lors de la mise à jour.');
}
