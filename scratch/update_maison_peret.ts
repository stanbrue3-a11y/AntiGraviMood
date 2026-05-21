import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
  dogme_source: 'bistrot, brasserie historique 1908, rue piétonne, vin, viandes, terrasse',
  description:
    "Une adresse centenaire posée sur la piétonne rue Daguerre. Maison Péret, c'est le bistrot dans son jus depuis 1908 : boiseries, globes lumineux et chaises en rotin. On y vient pour l'atmosphère vibrante, l'impressionnante carte des vins (bistrot à vins oblige) et des assiettes de terroir franches. La souris d'agneau et la charcuterie sont des incontournables, à dévorer sous la grande verrière ou sur la terrasse qui regarde passer le 14ème.",
  insider_tip:
    "• Demandez une table sous la verrière ou sur la rue pour profiter de l'ambiance village de la rue Daguerre.\n• Ne repartez pas sans avoir goûté le fameux 'Maçon blanc', le classique de la maison.",
  nearest_metro: 'Denfert-Rochereau',
  metro_lines: ['4', '6'],
  has_terrace: true,
  reservation_policy: 'resa_conseillee',
  tags: ['viandard', 'pastille_rouge'],
};

try {
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'maison-peret', JSON.stringify(payload)],
    {
      cwd: path.join(process.cwd()),
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Erreur lors de la mise à jour.');
}
