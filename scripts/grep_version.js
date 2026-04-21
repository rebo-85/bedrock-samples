const fs = require('fs');
const path = process.argv[2];
if (!path) { console.error('Usage: node grep_version.js <file>'); process.exit(1); }
const s = fs.readFileSync(path, 'utf8');
s.split(/\r?\n/).forEach((l,i)=>{ if (l.includes('"version"')) console.log((i+1)+': '+l); });
