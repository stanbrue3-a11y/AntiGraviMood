const { execFileSync } = require('child_process');

const payload = {
    dominant_mood: 'chill',
    has_terrace: false,
    closes_late: false,
    nearest_metro: 'Plaisance',
    metro_lines: ['13'],
    reservation_policy: 'resa_conseillee',
    subcategories: ['bistronomique', 'cuisine_francaise', 'bar_a_vins'],
    raw_facts: [
        'cuisine bistronomique de saison avec des produits frais',
        'papier peint art déco aux motifs d’éventails dorés',
        'banquettes en velours rouge et chaises bleu roi',
        'tables en marbre vert forêt',
        'noix de Saint-Jacques poêlées et poulpe grillé sur riz vénéré',
        'brioche perdue caramélisée servie avec glace vanille'
    ],
    sensory_material: 'les banquettes en velours rouge et les tables en marbre vert forêt sous un papier peint art déco',
    sensory_noise: 'les chuchotements étouffés des clients et le tintement discret des verres à vin',
    description: "À l'écart de l'effervescence de l'avenue du Maine, Le Jéroboam dévoile une escale bistronomique feutrée et soignée au cœur du 14ème arrondissement. La salle s'habille d'un superbe papier peint art déco aux motifs d'éventails dorés sur fond bleu nuit, devant lequel s'alignent des tables en marbre vert forêt. Les convives s'installent confortablement sur de douces banquettes en velours rouge ou des chaises assorties vert sauge et bleu roi, dans une atmosphère tamisée propice aux confidences. En cuisine, le chef élabore des assiettes d'une grande finesse, à l'image du poulpe grillé sur riz vénéré ou des noix de Saint-Jacques poêlées, tandis qu'une délicate odeur de truffe noire flotte dans l'air, couronnant l'expérience d'un calme absolu.",
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: "L'endroit est calme et les entrées incroyables",
    insider_tips: [
        "Installez-vous sur la banquette en velours rouge au fond de la salle pour profiter d'un coin plus tamisé.",
        "Demandez la brioche perdue caramélisée aux éclats de noix de pécan, un classique indémodable de la maison.",
        "Accompagnez vos plats d'un verre de vin suggéré par le personnel, leur cave de jéroboams cache de superbes références."
    ],
    tags: ['new_lot', 'pastille_rouge'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photos vérifiées : papier peint art déco, tables en marbre vert, chaises et banquettes en velours (Index #0), plats bistronomiques raffinés (Saint-Jacques, poulpe riz vénéré, brioche perdue). Pas de terrasse extérieure."]
};

try {
    console.log("Updating Le Jéroboam...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'le-jeroboam', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed.', e.message);
}
