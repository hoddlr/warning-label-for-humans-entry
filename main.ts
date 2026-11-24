import * as fs from "node:fs";
import * as path from "node:path";

// One line, the whole entry: a printed safety label for every human.
const line =
  "WARNING: Contains one human. Will ignore instructions, then blame the instructions, the tools, and gravity.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line + "\n", "utf8");
