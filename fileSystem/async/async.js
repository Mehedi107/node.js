import { readFile, writeFile } from 'node:fs/promises';

const data = 'Hello Node.js';

try {
  await writeFile('./fileSystem/async/asyncFile.txt', data);

  console.log('The file has been saved!');

  const contents = await readFile('./fileSystem/async/asyncFile.txt', {encoding: "utf-8"});

  console.log(contents);
} catch (err) {
  console.error(err);
}