// The Excuse That Almost Works — entry program.
//
// Writes exactly one line of plain text to /output/entry.txt (creating /output
// if needed), followed by a single trailing newline and nothing else.
//
// Entry line (17 words — counted by hand: Landlord's / gas / safety / check /
// today, / have / to / be / in, / they / gave / two / days / notice / and /
// won't / rebook):
//
//   Landlord's gas safety check today, have to be in, they gave two days notice and won't rebook.
//
// 93 characters, within the gate's 1..140 limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Landlord's gas safety check today, have to be in, they gave two days notice and won't rebook.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");