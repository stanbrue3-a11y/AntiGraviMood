import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
  dominant_mood: 'chill',
  dogme_source: 'bistrot de quartier, déco vintage, lustre bouteilles, terrasse, Tigre qui pleure',
  description:
    "Niché sur le boulevard Raspail, Le Petit Broc détonne avec son décor délicieusement éclectique : comptoir en zinc, banquettes en velours et un étonnant lustre façonné à partir de bouteilles renversées. C'est l'archétype du bistrot de quartier chaleureux et sans prétention où l'on se retrouve pour une assiette réconfortante. Si les classiques de brasserie répondent à l'appel, la maison est surtout réputée pour son surprenant 'Tigre qui pleure', servi dans une ambiance hautement décontractée.",
  insider_tip:
    "• Ne passez pas à côté de leur spécialité, le 'Tigre qui pleure', qui fait la renommée du lieu.\n• Privilégiez la terrasse sur le boulevard Raspail, particulièrement agréable pour clore la journée.",
  nearest_metro: 'Vavin',
  metro_lines: ['4'],
  has_terrace: true,
  reservation_policy: 'resa_conseillee',
  tags: ['new_lot', 'pastille_bleue'],
  internal_audit_logs: ['[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]'],
};

try {
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'le-petit-broc', JSON.stringify(payload)],
    {
      cwd: path.join(process.cwd()),
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Erreur lors de la mise à jour.');
}
