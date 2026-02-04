let a = { field1: true }, b = { field2: "hola" }
console.log(Object.assign({}, a, b))
console.log(Object.assign(a, b))
console.log(a, b)

let c = { ...a, ...b } // === Object.assign({}, a, b)