// Builds the GitHub Pages output: a redirect to the live portfolio on Lovable.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('redirect', 'dist', { recursive: true });
console.log('dist ready');
