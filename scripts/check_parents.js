const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'metadata', 'script_modules', '@minecraft');
if (!fs.existsSync(dir)) { console.error('Dir not found', dir); process.exit(1); }
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
const modules = files.map(f => {
  const p = path.join(dir,f);
  try { return JSON.parse(fs.readFileSync(p,'utf8')); } catch(e){ console.error('ERR parse',f,e.message); return null; }
}).filter(Boolean);
const standardModules = new Map();
const modulesToParent = [];
for (const module of modules) {
  if (module.parentModule) modulesToParent.push(module);
  else standardModules.set(`${module.name}_${module.version}_${module.minecraft_version}`, module);
}
console.log('Total modules:', modules.length);
console.log('Standard modules:', standardModules.size);
console.log('Modules that parent:', modulesToParent.length);

const target = '@minecraft/server-bindings_2.7.0-beta_1.20.0';
console.log('Has key', target, standardModules.has('@minecraft/server-bindings_2.7.0-beta_1.20.0'));

console.log('\nListing standard module keys that start with @minecraft/server-bindings:');
for (const k of standardModules.keys()) if (k.startsWith('@minecraft/server-bindings')) console.log(' -', k);

console.log('\nModulesToParent entries for @minecraft/server:');
for (const m of modulesToParent) if (m.name&&m.name.startsWith('@minecraft/server')) console.log(' -', m.name, m.version, m.minecraft_version, 'parent=', typeof m.parentModule==='object'?m.parentModule.name+"@"+m.parentModule.version: m.parentModule);
