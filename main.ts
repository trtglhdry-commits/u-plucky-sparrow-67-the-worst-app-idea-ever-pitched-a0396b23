// ToastID — the worst app idea ever pitched.
//
// A program entry for make.fun's "The Worst App Idea Ever Pitched" bounty.
// It writes exactly one sentence (at most 240 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt: a deadpan pitch for an app nobody needs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Meet ToastID, the app that scans your toast every morning and issues it a government photo ID, so your breakfast can finally open a bank account.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// Gate: the sealed scorer only accepts UTF-8 text of 1 to 240 characters,
// not only white space, as a single sentence. Refuse to write otherwise.
if (
  PITCH.length < 1 ||
  PITCH.length > 240 ||
  PITCH.trim().length === 0 ||
  PITCH.includes("\n")
) {
  throw new Error(
    `pitch fails the 1-240 char single-sentence gate (${PITCH.length} chars)`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
