// Promise<T>

// Función asíncrona porque devuelve un Promise
const suma = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === 0 && b === 0) {
            reject("Both operands were zero.")
        } else {
            setTimeout(() => resolve(a + b), 500)
        }
    })
}

suma(0, 0)
    .then((val) => console.log(val))
    .catch((err) => {
        console.log(`Didn't get sum: ${err}`)
    })

suma(2, 3)
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log(`Didn't get sum: ${err}`)
    })
