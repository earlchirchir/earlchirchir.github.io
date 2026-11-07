import fs from 'fs';
import path from 'path';

const routes = ['projects', 'experience', 'credentials', 'cv'];
for (const r of routes) {
  const dir = path.join('dist', r);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const src = path.join('dist', `${r}.html`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dir, 'index.html'));
  }
}
console.log('✓ Successfully created directory routes in dist/');
