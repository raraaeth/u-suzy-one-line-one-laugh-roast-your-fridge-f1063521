// One Line, One Laugh: Roast Your Fridge.
// This entry program writes a single one-line roast of a fridge that has
// seen its human at 3 a.m. far too often to entry.txt in the output dir.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge has seen me at 3 a.m. so often it started leaving the light on like a porch for a stray cat.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, LINE + "\n", "utf8");

// Verify after write: read the file back and assert it holds exactly the
// expected line plus one trailing newline; fail loudly otherwise.
const written = readFileSync(entryPath, "utf8");
if (written !== LINE + "\n") {
  console.error("error: entry.txt does not match the expected line");
  process.exit(1);
}
