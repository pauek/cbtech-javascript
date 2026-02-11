
import { readFile } from "fs"

readFile(".gitignore", (err, data) => {
    if (err !== null) {
        console.error(err)
    } else {
        console.log(`He leido un fichero de ${data.length} bytes`)
    }
})

console.log("End")