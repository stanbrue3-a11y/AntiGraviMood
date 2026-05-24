import fs from 'fs';
import path from 'path';

const dir = path.join(__dirname, 'ocr_results');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.txt'));

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').slice(0, 40);
  console.log(`\n=========================================`);
  console.log(`FILE: ${file} (${content.length} bytes, ${content.split('\n').length} lines)`);
  console.log(`=========================================`);
  console.log(lines.join('\n'));
}
