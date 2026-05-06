import fs from 'fs';
import { execSync } from 'child_process';

const batchFile = process.argv[2];

if (!batchFile || !batchFile.endsWith('.txt')) {
    console.error('❌ Provide a valid .txt file. Ex: npx tsx scripts/industrial_batch.ts batch.txt');
    process.exit(1);
}

if (!fs.existsSync(batchFile)) {
    console.error(`❌ File ${batchFile} does not exist.`);
    process.exit(1);
}

const lines = fs.readFileSync(batchFile, 'utf-8').split('\n').map(l => l.trim()).filter(l => l.length > 0);

console.log(`📦 Lancement du mode BATCH : ${lines.length} restaurants à traiter.`);
console.log(`(Pause anti-spam intégrée : 5 secondes entre chaque)`);
console.log('='.repeat(60));

for (let i = 0; i < lines.length; i++) {
    const resto = lines[i];
    console.log(`\n⏳ [${i+1}/${lines.length}] Traitement de : "${resto}"`);
    try {
        execSync(`npx tsx scripts/industrial_add.ts "${resto}"`, { stdio: 'inherit' });
    } catch (e) {
        console.error(`❌ Échec pour : ${resto}. On passe au suivant.`);
    }
    
    if (i < lines.length - 1) {
        console.log(`💤 Pause de 5 secondes...`);
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5000);
    }
}

console.log('\n✅ BATCH TERMINÉ. Vous pouvez maintenant lancer la commande des médias :');
console.log('👉 npx tsx scripts/migrate_registry_media.ts');
