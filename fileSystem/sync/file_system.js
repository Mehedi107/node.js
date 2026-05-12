import { readFileSync, writeFileSync } from 'node:fs';

const txt = "Learning node.js";

writeFileSync("./fileSystem/sync/file.txt", txt, {encoding: "utf-8"})

const output = readFileSync("./fileSystem/sync/file.txt", {encoding: 'utf-8'})

console.log(output);

