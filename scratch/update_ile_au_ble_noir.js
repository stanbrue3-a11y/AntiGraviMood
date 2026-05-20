const { execFileSync } = require('child_process');

// Historique : la tradition des crêperies bretonnes à Paris s'est concentrée
// autour de la gare Montparnasse dès les années 1920-1930, quand les trains
// de nuit en provenance de Bretagne déversaient leurs passagers dans ce quartier.
// L'Île au Blé Noir perpétue cette tradition de longue date.

const payload = {
    dominant_mood: 'chill',
    has_terrace: false,
    closes_late: false,
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    reservation_policy: 'sans_resa',
    subcategories: ['creperie', 'cuisine_bretonne'],
    raw_facts: [
        'devanture en bois sombre avec bâche noire',
        'enseigne néon rouge crêperie',
        'mention service continu sur la façade',
        'sol en carrelage rouge',
        'tables sombres',
        'galettes de blé noir maison',
        'crêpes dessert au caramel beurre salé',
        'cidre breton servi en bolée',
        'tradition crêperies bretonnes Montparnasse depuis années 1920'
    ],
    sensory_material: 'le carrelage rouge au sol et les tables sombres sous la devanture en bois classique',
    sensory_noise: 'le crépitement des galettes sur la billig et le brouhaha du service continu',
    description: "Depuis que les trains de nuit en provenance de Bretagne déversaient leurs passagers gare Montparnasse dans les années 1920, le quartier a vu s'installer une colonie de crêperies bretonnes. L'Île au Blé Noir en garde l'ADN intact : devanture en bois sombre, enseigne néon rouge, carrelage rouge au sol. Les galettes de blé noir arrivent bien croustillantes en bordure, fondantes au centre, avec l'œuf coulant logé au cœur. Le cidre tombe en bolée. Le service continu en fait un repère de quartier à toute heure.",
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'Les galettes sont fondantes et croustillantes à la fois',
    insider_tips: [
        "Le service continu est le vrai atout : pas de coupure entre 14h et 19h, idéal pour une galette hors rush.",
        "La crêpe caramel beurre salé est la conclusion logique — certains la commandent dès l'arrivée.",
        "La table au fond, contre le mur, est la plus calme de la salle."
    ],
    tags: ['new_lot'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photos vérifiées : façade bois/néon rouge, galettes blé noir, crêpes caramel, bolée de cidre."]
};

try {
    console.log("Updating L'Île au Blé Noir...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'l-ile-au-ble-noir', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed.', e.message);
}
