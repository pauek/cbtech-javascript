
// 1. Asignar no es copiar
let obj = { a: 1, b: true, c: "hola" }
let x = obj // ?
x.a = 3
console.log("obj.a", obj.a)

// obj ------> { a: 1, b: true, c: "hola" }
// x   --------^

