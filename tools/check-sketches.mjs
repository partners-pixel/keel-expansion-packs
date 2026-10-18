#!/usr/bin/env node
// Checks every pack sketch in packs/ with the Keel kernel's own rules, read from a
// keel-engine checkout and never changed: each packs/<id>/pack.json through the kernel's
// checkPack (the pack schema plus the kernel's extra rules), and each
// packs/<id>/stacks/<stack>/stack.json against the kernel's stack schema.
//
//   node tools/check-sketches.mjs [--engine <path to a keel-engine checkout>]
//
// The engine path defaults to KEEL_ENGINE, then ../keel-engine. Exit 0 when every sketch
// passes, 1 when one fails or none was found (nothing checked is never a pass), 2 when the
// engine checkout cannot be read.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const flag = process.argv.indexOf("--engine");
const engine = path.resolve(flag > -1 ? process.argv[flag + 1] ?? "" : process.env.KEEL_ENGINE ?? path.join(root, "..", "keel-engine"));
const lib = path.join(engine, "plugins", "keel", "kernel", "scripts", "lib");
const schemas = path.join(engine, "plugins", "keel", "kernel", "schemas");

if (!fs.existsSync(path.join(lib, "pack.mjs")) || !fs.existsSync(path.join(schemas, "stack.schema.json"))) {
  console.error(`no keel-engine checkout at ${engine}: pass --engine <path> or set KEEL_ENGINE`);
  process.exit(2);
}

const { checkPack } = await import(pathToFileURL(path.join(lib, "pack.mjs")).href);
const { validate } = await import(pathToFileURL(path.join(lib, "schema.mjs")).href);
const read = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const digest = (file) => createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 16);

let head = "unknown";
try {
  head = execFileSync("git", ["-C", engine, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
} catch {
  // a copy without git still has the schema files; the head is reported as unknown
}

const results = [];
const packsDir = path.join(root, "packs");
for (const id of fs.existsSync(packsDir) ? fs.readdirSync(packsDir).sort() : []) {
  const packFile = path.join(packsDir, id, "pack.json");
  if (!fs.existsSync(packFile)) continue;
  const pack = read(packFile);
  const packResult = checkPack(pack);
  const errors = [...packResult.errors];
  if (pack.id !== id) errors.push(`id is ${pack.id}, but the folder is ${id}`);
  results.push({ file: path.relative(root, packFile), errors });
  const stacksDir = path.join(packsDir, id, "stacks");
  for (const stackId of fs.existsSync(stacksDir) ? fs.readdirSync(stacksDir).sort() : []) {
    const stackFile = path.join(stacksDir, stackId, "stack.json");
    if (!fs.existsSync(stackFile)) continue;
    const stack = read(stackFile);
    const stackErrors = [...validate(stack, read(path.join(schemas, "stack.schema.json"))).errors];
    if (stack.id !== stackId) stackErrors.push(`id is ${stack.id}, but the folder is ${stackId}`);
    results.push({ file: path.relative(root, stackFile), errors: stackErrors });
  }
}

console.log(`keel-engine ${head.slice(0, 12)} · pack.schema.json ${digest(path.join(schemas, "pack.schema.json"))} · stack.schema.json ${digest(path.join(schemas, "stack.schema.json"))}`);
for (const r of results) {
  console.log(`${r.errors.length ? "FAIL" : "ok  "} ${r.file}`);
  for (const e of r.errors) console.log(`     - ${e}`);
}
const failed = results.filter((r) => r.errors.length).length;
if (!results.length) {
  console.log("no sketches found: nothing checked is never a pass");
  process.exit(1);
}
console.log(`${results.length} checked, ${failed} failed`);
process.exit(failed ? 1 : 0);
