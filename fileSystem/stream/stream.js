import { createReadStream, createWriteStream } from "node:fs"

const readStream = createReadStream('./fileSystem/stream/input.txt', 'utf-8')

const writeStream = createWriteStream('./fileSystem/stream/output.txt')

readStream.pipe(writeStream)

writeStream.on("finish", () => {
  console.log("File copied successfully!");
})