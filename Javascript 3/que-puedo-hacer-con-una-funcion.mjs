// Funciones son "de primera clase" === son como un valor cualquier

// Qué puedo hacer con un valor cualquiera
// 1. Guardarlo en una variable.

const f = function () {
    return 42
}

// 2. Pasarlo como parámetro

let A = [1, 2, 3]
let mult2 = (x) => x * 2
A.map(mult2) // Paso una función como parámetro

// 3. Puedo guardarlo en un array

let operaciones = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
    (a, b) => a % b,
]
for (let op of operaciones) {
    console.log(op(2, 3))
}

// 4. Puedo devolver funciones

function makeCounter() {
    let count = 0
    return () => {
        count++
        return count
    }
}

let counter1 = makeCounter()
let counter2 = makeCounter()

console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())

console.log(counter2())
console.log(counter2())
console.log(counter2())


