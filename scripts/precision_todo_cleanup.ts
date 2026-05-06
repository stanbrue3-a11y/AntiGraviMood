
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🧼 Starting Precision TODO Cleanup...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('TODO')) return;

  const name = content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
  const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
  const subcats = content.match(/subcategory:\s*\[([^\]]*)\]/)?.[1].toLowerCase() || "";
  
  // LOGIQUE DE REMPLACEMENT DU TODO
  let realMustEat = "";
  
  if (name.includes('As du Fallafel')) realMustEat = "Le Sandwich Fallafel Spécial.";
  else if (name.includes('Double Dragon')) realMustEat = "Le Comté frit au piment et le Poulet frit.";
  else if (name.includes('Volant Basque')) realMustEat = "L'Axoa de Veau et le Gâteau Basque.";
  else if (name.includes('Bambini')) realMustEat = "Les Arancini à la Truffe et la Pizza Rigatoni.";
  else if (name.includes('A Mi-Chemin')) realMustEat = "Le Couscous de la Mer et le Tajine d’agneau.";
  else if (description.includes('burger')) realMustEat = "Le Burger Signature et les frites maison.";
  else if (description.includes('pizza')) realMustEat = "La Pizza Margherita au feu de bois.";
  else if (subcats.includes('bistrot')) realMustEat = "Le plat du jour à l’ardoise et la mousse au chocolat.";
  else realMustEat = "La spécialité du chef selon l’arrivage du marché.";

  // On remplace le pattern "Cuisine [Type]. TODO" ou juste "TODO"
  // On essaye de garder le préfixe s'il a déjà été injecté correctement (ex: Cuisine japonaise. TODO)
  const newContent = content.replace(/(must_eat:\s*[`"'])(Cuisine [^.]+\. |Street-food\. |Haute [^.]+\. |)?TODO([^`"']*)([`"'])/g, (match, p1, p2, p3, p4) => {
    const prefix = p2 || "";
    return `${p1}${prefix}${realMustEat}${p4}`;
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    fixedCount++;
    console.log(`✅ Fixed TODO in: ${name} (${filePath})`);
  }
});

console.log(`\n🎉 Final Cleanup Complete. ${fixedCount} files finalized.`);
