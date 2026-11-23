// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one dad joke (<= 200 chars) to /output/entry.txt.
// Node 22, stdlib only.
import { mkdirSync, writeFileSync } from 'node:fs';

const JOKE =
  "I told my kids I'm a dad, not a magician — but give me five minutes alone with their snacks and I'll prove otherwise.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', JOKE + '\n', 'utf8');
console.log(`Wrote ${JOKE.length} chars to /output/entry.txt`);
console.log(JOKE);
