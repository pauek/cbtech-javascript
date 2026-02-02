function multiplicaPorDos(x) {
    return 2 * x
}

let x     = 3
let mult2 = function (x) { return 2 * x }
let suma1 = function (x) { return x + 1 }
let add1 = suma1

let a = multiplicaPorDos(5)

console.log(`mult2(5) = ${mult2(5)}`)
console.log(`suma1(5) = ${suma1(5)}`)
console.log(`add1(5) = ${add1(5)}`)

// console.log(`x(7) = ${x(7)}`)

suma1 = function (x) { return x - 1 }
console.log(`suma1(10) = ${suma1(10)}`)



