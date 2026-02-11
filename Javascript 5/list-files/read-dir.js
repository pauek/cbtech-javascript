import { readdirSync } from "fs"
import { Chalk } from "chalk"

const chalk = new Chalk()
for (const file of readdirSync(".", { withFileTypes: true })) {
    if (file.isDirectory()) {
        console.log(chalk.blue(file.name))
    } else {
        console.log(file.name)
    }
}