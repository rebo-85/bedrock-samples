const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'metadata', 'script_modules', '@minecraft');
if (!fs.existsSync(dir)) { console.error('Dir not found', dir); process.exit(1); }
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
for (const f of files) {
  const p = path.join(dir, f);
  try {
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    const name = j.name || ('@minecraft/' + f.replace(/_(.*)\.json$/, ''));
    const version = j.version || (f.match(/_(.*)\.json$/) ? f.match(/_(.*)\.json$/)[1] : 'MISSING');
    const mc = j.minecraft_version || 'MISSING';
    const keys = Object.keys(j).slice(0,8).join(', ');
    console.log(`${f} -> name=${name} version=${version} mc=${mc} keys=[${keys}]`);
  } catch (e) {
    console.error('ERR reading', f, e.message);
  }
}
