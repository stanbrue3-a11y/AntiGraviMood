const { execFileSync } = require('child_process');

const payload = {
    on_mange_quoi_ici: "Les brochettes yakitori au feu de bois et le chirashi assortiment bien frais.",
    plat_median_cents: 1350
};

try {
    console.log("Publishing Yaki (Phase 2)...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--menu', 'yaki', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed.', e.message);
}
