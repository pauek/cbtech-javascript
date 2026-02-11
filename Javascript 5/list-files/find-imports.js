import { readdir, readFile } from "fs/promises"
import { join } from "path"

const [_node, _script, ...args] = process.argv
const [startDir] = args
if (startDir === undefined) {
    console.error(`Usage: find-imports <start-dir>`)
    process.exit(1)
}

const findImports = async (filePath) => {
    const buffer = await readFile(filePath)
    const lines = buffer.toString().split(`\n`)
    for (const line of lines) {
        if (line.startsWith("import ")) {
            console.log(`    ${line}`)
        }
    }
}

for (const ent of await readdir(startDir, { withFileTypes: true, recursive: true })) {
    if (ent.isFile() && ent.name.endsWith(".js")) {
        const filePath = join(ent.parentPath, ent.name)
        console.log(filePath)
        await findImports(filePath)
    }
}
