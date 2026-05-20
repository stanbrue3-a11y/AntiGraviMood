const { execFileSync } = require('child_process');

const payload = {
    nearest_metro: 'Montparnasse - Bienvenüe',
    metro_lines: ['4', '6', '12', '13'],
    has_terrace: true,
    subcategories: ['bistrot_moderne', 'brunch'],
    raw_facts: [
        'boulevard haussmannien de la fin XIXe siècle',
        'terrasse avec chaises en rotin bleu',
        'colonnes couvertes de bougainvilliers fuchsia',
        'parquet en bois clair',
        'banquettes tapissées de rayures',
        'murs en brique blanche',
        'suspensions cuivrées industrielles',
        'poulet pané panko et pièce de bœuf sur ardoise'
    ],
    sensory_material: 'le parquet en bois clair et les banquettes rayées sous des suspensions cuivrées industrielles',
    sensory_noise: 'le brouhaha de la terrasse de boulevard aux beaux jours',
    description: "À l'angle du boulevard haussmannien que les artistes des Années Folles arpentaient pour rejoindre le Dôme ou La Coupole, Harper's s'annonce d'abord par sa terrasse : des chaises en rotin bleu encadrent des colonnes entièrement couvertes de bougainvilliers fuchsia. À l'intérieur, le parquet en bois clair, les banquettes tapissées de rayures et les murs en brique blanche composent un décor de brasserie sous des suspensions cuivrées industrielles. La carte alterne plats réconfortants soignés — poulet pané panko, pièce de bœuf sur ardoise — et quelques touches plus travaillées à la truffe.",
    internal_audit_logs: [
        "[AUDIT F.I.P.P OK] Photos vérifiées : terrasse bougainvilliers, chaises rotin bleu, intérieur brique/parquet/cuivre, assiettes chicken panko et bœuf ardoise.",
        "[CORRECTION MÉTRO] Pasteur corrigé → Montparnasse-Bienvenüe (L4/6/12/13) — distance réelle ~120m vs 700m.",
        "[RÉVISION ÉDITORIALE] Dimension historique ajoutée : boulevard des Années Folles, bâtiment haussmannien fin XIXe."
    ]
};

try {
    console.log("Correcting Harper's metro + historical dimension...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'harper-s', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed.', e.message);
}
