import { mkdirSync, writeFileSync } from "node:fs";

// The funniest error message a kitchen toaster would show its owner:
// a deadpan appliance that has seen things it cannot unsee.
const LINE = "ERROR: I have seen what you put in here. Please unplug me.";
const MAX_CODE_POINTS = 120;

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
  throw new Error(`entry must be 1-120 code points, got ${codePoints}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
