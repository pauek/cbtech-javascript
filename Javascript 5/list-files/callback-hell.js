// Leer dos ficheros y mirar si son iguales

import { readFile } from "fs"

const fileA = "test.js"
const fileB = "test.js"

const suma = (a, b, callbackFunc) => {
    setTimeout(() => callbackFunc(a + b), 500)
}

readFile(fileA, (err1, dataA) => {
    if (err1 !== null) {
        console.error(`Could not read file ${fileA}: ${err1}`)
        return
    }
    readFile(fileB, (err2, dataB) => {
        if (err2 !== null) {
            console.error(`Could not read file ${fileB}: ${err2}`)
            return
        }
        if (dataA.length !== dataB.length) {
            console.log(`Different`)
            return
        }
        for (let i = 0; i < dataA.length; i++) {
            if (dataA[i] !== dataB[i]) {
                console.log(`Different`)
                return
            }
        }
        console.log(`Equal!`)
    })
})

suma(10, 20, (suma1) => {
    suma(suma1, 30, (suma2) => {
        suma(suma2, 40, (suma3) => {
            console.log(suma3)
        })
    })
})

console.log("Yastá")
