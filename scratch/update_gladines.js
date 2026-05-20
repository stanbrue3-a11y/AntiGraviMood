const { execFileSync } = require('child_process');

const payload = {
    dominant_mood: 'festif',
    has_terrace: false,
    nearest_metro: "Place d'Italie",
    metro_lines: ['5', '6', '7'],
    reservation_policy: 'sans_resa',
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'generous, "belt-busting" portions of southwestern French specialties',
    raw_facts: [
        'façade aux boiseries rouges et pochoirs',
        'nappes à carreaux rouges et blancs',
        'cuisine basque',
        'salades dans des saladiers en inox',
        'escalope montagnarde et pommes de terre croustillantes',
        'pas de réservation et file d\'attente'
    ],
    sensory_material: 'boiseries rouges de la devanture et nappes à carreaux',
    sensory_noise: 'joyeux vacarme des tablées au coude-à-coude',
    description: "Au cœur de la Butte-aux-Cailles, cette façade d'angle aux boiseries rouges et aux pochoirs marqués cache le repaire basque le plus couru du quartier. À l'intérieur, les célèbres nappes à carreaux plantent le décor d'un bistrot où l'on dîne au coude-à-coude dans un joyeux vacarme. On vient s'y frotter aux immenses salades servies dans des saladiers en inox et à l'escalope montagnarde, le tout largement arrosé de vin du Sud-Ouest.",
    insider_tips: [
        "L'adresse est très prisée et ne prend aucune réservation : prévoyez d'arriver très tôt ou d'attendre votre tour sur le trottoir.",
        "L'escalope montagnarde avec ses fameuses pommes de terre croustillantes est le plat incontesté des habitués.",
        "Le lieu est parfait pour les grandes tablées si vous acceptez l'ambiance très sonore et la promiscuité."
    ],
    subcategories: ['bistrot', 'cuisine_francaise'],
    tags: ['new_lot', 'pastille_rouge'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photo 0 est la façade rouge emblématique."]
};

try {
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'chez-gladines-butte-aux-cailles', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed to update.');
}
