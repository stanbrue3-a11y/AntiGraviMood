const { execFileSync } = require('child_process');

const payload = {
    dominant_mood: 'festif',
    has_terrace: false,
    closes_late: false,
    nearest_metro: 'Edgar Quinet',
    metro_lines: ['6'],
    reservation_policy: 'sans_resa',
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'Excellent barbecue coréen avec viandes bien marinées',
    raw_facts: [
        'façade en bois foncé',
        'grand store rouge',
        'grils intégrés aux tables',
        'hottes cuivrées suspendues',
        'plats traditionnels et barbecue coréen'
    ],
    sensory_material: 'les hottes cuivrées suspendues et les tables équipées de grils intégrés',
    sensory_noise: 'le crépitement continu des viandes marinées sur le métal brûlant',
    description: "Derrière sa grande devanture en bois sombre couverte d'un store écarlate, cette adresse offre une plongée directe dans l'art du barbecue coréen. On s'y retrouve autour de tables noires mates équipées de grils ronds pour y faire dorer soi-même des lamelles de bœuf, sous l'œil attentif des imposantes hottes métalliques. Les effluves de viandes caramélisées et la multitude de petits bols de banchan qui encombrent la table rythment un dîner hautement interactif.",
    insider_tips: [
        "Le menu barbecue est l'essence même du lieu, parfait à partager à plusieurs pour picorer toutes les viandes.",
        "Le dolsot bibimbap, servi dans son bol en pierre brûlant qui fait croustiller le riz, est une excellente alternative au gril.",
        "Attendez-vous à repartir avec des vêtements fortement parfumés par la fumée des grillades, cela fait partie de l'immersion."
    ],
    subcategories: ['barbecue_coreen', 'cuisine_coreenne'],
    tags: ['new_lot'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photo 0: Façade en bois foncé avec grand store rouge. Hottes cuivrées visibles à travers la vitrine."]
};

try {
    console.log("Updating Koko Grill...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'koko-grill', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed to update.', e);
}
