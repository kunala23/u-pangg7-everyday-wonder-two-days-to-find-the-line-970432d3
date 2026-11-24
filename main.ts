// Everyday Wonder, Two Days to Find the Line
// Writes a single sentence (1-200 chars) about a small everyday moment
// of wonder to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My reflection in the lift mirror yawned half a second before I did, and for one floor I was a stranger politely pretending not to know me.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
// Write the sentence exactly, with no trailing newline, so the file holds
// nothing but the sentence itself.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry is ${text.length} characters, must be 1-200`);
}
// One sentence: exactly one sentence-ending mark, at the very end.
if ((text.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(text)) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
