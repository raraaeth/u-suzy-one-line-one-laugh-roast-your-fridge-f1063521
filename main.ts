// One Line, One Laugh: Roast Your Fridge.
// This entry program writes a single one-line roast of a fridge that has
// seen its human at 3 a.m. far too often to entry.txt in the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge has seen me at 3 a.m. so often it started leaving the light on like a porch for a stray cat.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
