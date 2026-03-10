const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const METADATA_DIR = path.join(ROOT, "metadata");
const DEFAULT_MCV = "1.20.0";
const ALLOWED_MODULE_TYPES = new Set(["script", "commands", "after_events_ordering", "vanilla_data", "molang"]);

function inferModuleType(filePath) {
  const p = filePath.replace(/\\/g, "/").toLowerCase();
  if (p.includes("/script_modules/")) return "script";
  if (p.includes("/command_modules/")) return "commands";
  if (p.includes("/vanilladata_modules/")) return "vanilla_data";
  if (p.includes("/doc_modules/")) return "vanilla_data";
  if (p.includes("/engine_modules/")) return "vanilla_data";
  return "vanilla_data";
}

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

let changed = 0;
let skipped = 0;
let errors = 0;

if (!fs.existsSync(METADATA_DIR)) {
  console.error("Metadata directory not found:", METADATA_DIR);
  process.exit(1);
}

walk(METADATA_DIR, (filePath) => {
  if (!filePath.endsWith(".json")) return;
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    let obj;
    try {
      obj = JSON.parse(raw);
    } catch (e) {
      console.error("JSON parse error:", filePath, e.message);
      errors++;
      return;
    }

    let updated = false;

    if (!obj || typeof obj !== "object") {
      skipped++;
      return;
    }

    if (typeof obj.minecraft_version !== "string") {
      obj.minecraft_version = DEFAULT_MCV;
      updated = true;
    }

    if (typeof obj.module_type !== "string" || !ALLOWED_MODULE_TYPES.has(obj.module_type)) {
      const inferred = inferModuleType(filePath);
      obj.module_type = inferred;
      updated = true;
    }

    if (updated) {
      // backup
      const bak = filePath + ".bak";
      if (!fs.existsSync(bak)) fs.copyFileSync(filePath, bak);
      fs.writeFileSync(filePath, JSON.stringify(obj, null, 2) + "\n", "utf8");
      console.log("Updated:", path.relative(ROOT, filePath));
      changed++;
    }
  } catch (e) {
    console.error("Error processing", filePath, e && e.message);
    errors++;
  }
});

console.log("\nSummary:");
console.log("  Files updated:", changed);
console.log("  Files skipped:", skipped);
console.log("  Errors:", errors);
if (changed === 0) console.log("No changes were necessary.");

process.exit(errors ? 2 : 0);
