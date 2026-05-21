import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
  dominant_mood: 'chill',
  dogme_source:
    'cuisine kabyle authentique, spécialité Laghmoudh (fèves et lait caillé), semoule aérienne, devanture bleue guinguette',
  description:
    "Une devanture bleu électrique et des guirlandes guinguette marquent l'entrée du Petit Amazigh, une enclave kabyle sincère au cœur de la rue de la Tombe Issoire. Ici, le couscous se décline dans une version aérienne rare, notamment le 'Laghmoudh' (servi dans des plats en terre cuite, sans bouillon, avec fèves fraîches), accompagné comme il se doit d'un verre de Raïb (lait caillé). Le vacarme joyeux de la salle et les effluves de cumin font de ce lieu une adresse de quartier précieuse.",
  insider_tip:
    "• Testez absolument le Laghmoudh, ce couscous kabyle sec aux fèves qui surprend par sa légèreté et son goût unique.\n• Aux beaux jours, demandez l'une des petites tables en terrasse sous les lampions pour profiter de l'ambiance de village du quartier.\n• Accompagnez votre repas d'un verre de Château Tellagh, un vin algérien sélectionné avec soin par le patron.",
  nearest_metro: 'Alésia',
  metro_lines: ['4'],
  has_terrace: true,
  reservation_policy: 'resa_conseillee',
  tags: ['new_lot', 'pastille_bleue'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Photo 1 confirme le Laghmoudh et le Raïb. Validation sensorielle OK.',
  ],
};

try {
  execFileSync(
    'npx',
    ['tsx', 'scripts/agent_bridge.ts', '--update', 'le-petit-amazigh', JSON.stringify(payload)],
    {
      cwd: path.join(process.cwd()),
      stdio: 'inherit',
    },
  );
} catch (e) {
  console.error('Erreur lors de la mise à jour.');
}
