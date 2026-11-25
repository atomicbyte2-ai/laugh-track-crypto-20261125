import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original joke about crypto and trading life.
// Setup: "buy the dip". Turn: the dip fights back with a shovel.
// Punchline: the portfolio ends up nearer the Earth's core than the moon.
const LINE =
  "I bought the dip. The dip bought a shovel, dug deeper, and now my portfolio lives closer to the Earth's core than to the moon.";

// Validate: single line, 1-199 chars, no control chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`line must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("line must not contain control characters");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
