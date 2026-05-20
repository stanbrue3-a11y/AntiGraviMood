import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
    dominant_mood: 'chill',
    dogme_source: 'bistronomique, retour de marché, produits de saison, terrasse, ambiance cosy',
    description: "Sur la vibrante avenue Denfert-Rochereau, La Contre Allée offre un îlot de calme. Cette adresse à l'ambiance feutrée décline une carte bistronomique exigeante, construite autour du retour de marché. L'ardoise évolue au gré des saisons, mariant viandes sourcées, poissons du moment et classiques indémodables. Un repaire élégant aux assises de velours qui coche toutes les cases du parfait déjeuner.",
    insider_tip: "• Aux beaux jours, demandez une table sur leur belle terrasse pour déjeuner à l'abri du tumulte.\n• Laissez-vous tenter par leurs desserts classiques, souvent plébiscités par les habitués du quartier.",
    nearest_metro: 'Denfert-Rochereau',
    metro_lines: ['4', '6'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    tags: ['new_lot', 'pastille_bleue'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]"]
};

try {
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'la-contre-allee', JSON.stringify(payload)], {
        cwd: path.join(process.cwd()),
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Erreur lors de la mise à jour.');
}
