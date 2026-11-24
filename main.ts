import { mkdirSync, writeFileSync } from "node:fs";

const line = "Your changes didn't save — the database timed out mid-sentence, so your last paragraph is now a rumor. Save again, and type faster than the database this time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
