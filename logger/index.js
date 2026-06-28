import path from 'path';
import { fileURLToPath } from 'url';
import fs from "fs/promises";

// console.log(process);
// console.log(process.argv);

const inputArguments = process.argv.slice(2)

// console.log(inputArguments);

const text = inputArguments.join(' ');
const timestamp = new Date().toISOString();
const message = `${text} ${timestamp} \n`;

if(!text) {
  console.log("Please enter some text. Example: node index.js Hello World!");
  process.exit(1)
}

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename) 
const pathName = path.join(dirname, 'log.txt')

// console.log(pathName);

try {
  await fs.appendFile(pathName, message);
  console.log("Success!");
} catch (error) {
  console.error("Failed to write file:", error.message);
}



