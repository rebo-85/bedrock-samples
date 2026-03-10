const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_MCV = "1.20.0";
const TARGET_DIRS = [
  { dir: path.join(ROOT, "metadata", "script_modules"), type: "script" },
  { dir: path.join(ROOT, "metadata", "command_modules"), type: "commands" },
  { dir: path.join(ROOT, "metadata", "vanilladata_modules"), type: "vanilla_data" },
  { dir: path.join(ROOT, "metadata", "engine_modules"), type: "after_events_ordering" },
];

function walk(dir, cb) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

let changed = 0;

for (const t of TARGET_DIRS) {
  walk(t.dir, (filePath) => {
    if (!filePath.endsWith(".json")) return;
    const raw = fs.readFileSync(filePath, "utf8");
    let obj;
    try {
      obj = JSON.parse(raw);
    } catch (e) {
      return;
    }
    if (!obj || typeof obj !== "object") return;

    let updated = false;
    if (typeof obj.minecraft_version !== "string") {
      obj.minecraft_version = DEFAULT_MCV;
      updated = true;
    }
    if (typeof obj.module_type !== "string") {
      obj.module_type = t.type;
      updated = true;
    }

    if (updated) {
      const bak = filePath + ".manifest.bak";
      if (!fs.existsSync(bak)) fs.writeFileSync(bak, raw, "utf8");
      fs.writeFileSync(filePath, JSON.stringify(obj, null, 2) + "\n", "utf8");
      console.log("Patched:", path.relative(ROOT, filePath));
      changed++;
    }
  });
}

console.log("\nDone. Patched files:", changed);
