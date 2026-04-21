const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'metadata', 'script_modules', '@minecraft');
if (!fs.existsSync(dir)) { console.error('Dir not found', dir); process.exit(1); }
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
let changed = 0;
for (const f of files) {
  const p = path.join(dir, f);
  try {
    const raw = fs.readFileSync(p, 'utf8');
    const j = JSON.parse(raw);
    const suffixMatch = f.match(/_(.*)\.json$/);
    const suffix = suffixMatch ? suffixMatch[1] : undefined;
    const baseName = f.replace(/_(.*)\.json$/, '');
    const expectedName = '@minecraft/' + baseName;
    let updated = false;
    if (!('version' in j) && suffix) { j.version = suffix; updated = true; }
    if (!('minecraft_version' in j)) { j.minecraft_version = '1.20.0'; updated = true; }
    if (!('name' in j)) { j.name = expectedName; updated = true; }
    if (!('module_type' in j) && ('classes' in j || f.startsWith('server') || f.startsWith('server-bindings'))) { j.module_type = 'script'; updated = true; }
    if (updated) {
      fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n', 'utf8');
      console.log('Updated', f);
      changed++;
    }
  } catch (e) {
    console.error('ERR', f, e.message);
  }
}
console.log('Done. Files changed:', changed);
