
import { readFile } from "fs/promises"

async function fileDiff(fileA, fileB) {
    const dataA = await readFile(fileA)
    const dataB = await readFile(fileB)
    if (dataA.length !== dataB.length) {
        return "Different"
    }
    for (let i = 0; i < dataA.length; i++) {
        if (dataA[i] !== dataB[i]) {
            return "Different"
        }
    }
    return "Equal!"
}

const result = await fileDiff("test.js", "test.js")
console.log(result)