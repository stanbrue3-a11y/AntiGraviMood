import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
    dominant_mood: 'culturel',
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'Ils refusent toujours la carte bleue, prévoyez du liquide.',
    raw_facts: [
        "décor avec boiseries sombres et dentelles",
        "galettes pur beurre de blé noir",
        "spécialité Le Couple à deux étages",
        "historiquement pas de carte bancaire",
        "file d'attente fréquente sur le trottoir",
        "annexe Le Petit Josselin au numéro 59"
    ],
    sensory_material: "boiseries sombres et carrelage d'époque",
    sensory_noise: "vacarme de brasserie vivant",
    description: "C'est le phare de la rue du Montparnasse. Sous ses plafonds bas, le décor est resté figé : boiseries sombres patinées, carrelage d'époque et rideaux de dentelle. On y vient pour ses galettes de blé noir fortement beurrées et sa spécialité, 'Le Couple' (une galette à deux étages), servie dans un vacarme de brasserie vivant où l'on s'attable au coude-à-coude.",
    insider_tips: [
        "Prévoyez du liquide : la maison refuse historiquement la carte bancaire.",
        "Sans réservations, l'attente est quasi-systématique : visez l'ouverture pour éviter la file d'attente sur le trottoir.",
        "Si le n°67 est bondé, tentez votre chance au Petit Josselin au n°59 : c'est la maison jumelle, la même carte, et parfois quelques minutes de queue en moins."
    ],
    nearest_metro: 'Edgar Quinet',
    metro_lines: ['6'],
    has_terrace: true,
    reservation_policy: 'sans_resa',
    tags: ['new_lot', 'pastille_bleue'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photo 0 = Petit Josselin (Annexe n°59), Photo 1 = Galettes traditionnelles. Validation visuelle ok."]
};

try {
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'la-creperie-de-josselin', JSON.stringify(payload)], {
        cwd: path.join(process.cwd()),
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Erreur lors de la mise à jour.');
}
