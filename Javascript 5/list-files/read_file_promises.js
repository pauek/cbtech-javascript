import { readFile } from "fs/promises"

readFile(".gitignore")
    .then((buffer) => {
        console.log(`He leido un fichero de ${buffer.length} bytes`)
    })
    .catch((err) => {
        console.error(err)
    })

console.log("End")
