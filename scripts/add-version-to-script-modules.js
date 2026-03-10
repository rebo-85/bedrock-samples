const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SCRIPT_DIR = path.join(ROOT, "metadata", "script_modules");
const BACKUP_DIR = path.join(ROOT, "metadata_script_backups_" + Date.now());

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

if (!fs.existsSync(SCRIPT_DIR)) {
  console.error("No script_modules directory at", SCRIPT_DIR);
  process.exit(1);
}
fs.mkdirSync(BACKUP_DIR, { recursive: true });

let changed = 0;

walk(SCRIPT_DIR, (filePath) => {
  if (!filePath.endsWith(".json")) return;
  const rel = path.relative(ROOT, filePath);
  const raw = fs.readFileSync(filePath, "utf8");
  let obj;
  try {
    obj = JSON.parse(raw);
  } catch (e) {
    console.error("JSON parse error", rel, e.message);
    return;
  }
  if (obj && typeof obj === "object" && typeof obj.version === "string") return;

  // infer version from filename (last underscore before .json)
  const base = path.basename(filePath, ".json");
  const idx = base.lastIndexOf("_");
  if (idx === -1) return;
  const ver = base.slice(idx + 1);
  if (!ver || !/^[0-9]/.test(ver)) return;

  // backup original to backup dir preserving relative path
  const bakPath = path.join(BACKUP_DIR, rel + ".bak");
  fs.mkdirSync(path.dirname(bakPath), { recursive: true });
  fs.writeFileSync(bakPath, raw, "utf8");

  obj.version = ver;
  fs.writeFileSync(filePath, JSON.stringify(obj, null, 2) + "\n", "utf8");
  console.log("Added version", ver, "to", rel);
  changed++;
});

console.log("\nDone. Files changed:", changed);
