import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const TARGET_DIRS = ['src'];
const TARGET_FILES = [
  'next.config.mjs',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'eslint.config.mjs',
  'vitest.config.ts',
  'playwright.config.ts',
  'components.json'
];

const EXTENSIONS = ['.ts', '.tsx', '.mjs', '.js'];

function removeComments(content, ext) {
  if (ext === '.json') return content; 

  let newContent = content;

  newContent = newContent.replace(/\/\*[\s\S]*?\*\//g, '');

  newContent = newContent.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

  newContent = newContent.split('\n').map(line => {
    const commentIndex = line.indexOf('//');
    if (commentIndex !== -1) {
      const before = line.substring(0, commentIndex);
      if (!before.trim() || !before.match(/https?:$/)) {
         if (!isInsideString(line, commentIndex)) {
            return before.trimEnd();
         }
      }
    }
    return line;
  }).join('\n');

  return newContent;
}

function isInsideString(line, index) {
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inBacktick = false;
  for (let i = 0; i < index; i++) {
    const char = line[i];
    if (char === "'" && !inDoubleQuote && !inBacktick) inSingleQuote = !inSingleQuote;
    if (char === '"' && !inSingleQuote && !inBacktick) inDoubleQuote = !inDoubleQuote;
    if (char === '`' && !inSingleQuote && !inDoubleQuote) inBacktick = !inBacktick;
  }
  return inSingleQuote || inDoubleQuote || inBacktick;
}

function processFile(filePath) {
  const ext = extname(filePath);
  const content = readFileSync(filePath, 'utf8');
  const cleaned = removeComments(content, ext);
  if (content !== cleaned) {
    writeFileSync(filePath, cleaned, 'utf8');
    console.log(`Cleaned: ${filePath}`);
  }
}

function walk(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        walk(fullPath);
      }
    } else {
      if (EXTENSIONS.includes(extname(fullPath))) {
        processFile(fullPath);
      }
    }
  }
}

for (const dir of TARGET_DIRS) {
  if (statSync(dir).isDirectory()) walk(dir);
}

for (const file of TARGET_FILES) {
  try {
    if (statSync(file).isFile()) processFile(file);
  } catch (e) {
  }
}
