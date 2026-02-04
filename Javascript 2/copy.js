
// 1. Asignar no es copiar
let obj1 = { a: 1, b: true, c: "hola" }
let x = obj1 // ?
x.a = 3
console.log("obj.a", obj1.a)

// obj ------> { a: 1, b: true, c: "hola" }
// x   --------^

// 2. Copiar objetos
let obj2 = {
    a: 1,
    b: true,
    c: "hola",
    d: { x: 0.0, y: 0.0 },
}
let obj2_copy1 = {}
for (let key in obj2) {
    obj2_copy1[key] = obj2[key]
}
console.log(`obj2:`, obj2)
console.log(`obj2_copy1:`, obj2_copy1)
console.log(obj2 === obj2_copy1)
console.log(obj2.d === obj2_copy1.d)

let obj2_copy2 = Object.assign({}, obj2)
console.dir(`obj2:`, obj2)
console.log(`obj2_copy2:`, obj2_copy2)
console.log(obj2 === obj2_copy2)
console.log(obj2.d === obj2_copy2.d)

let obj2_copy3 = { ...obj2 }
console.log(`obj2:`, obj2)
console.log(`obj2_copy3:`, obj2_copy3)
console.log(obj2 === obj2_copy3)
console.log(obj2.d === obj2_copy3.d)

// Deep copy: copia el objeto raíz y todos sus descendientes
let obj2_deepCopy = structuredClone(obj2)
console.log(`obj2:`, obj2)
console.log(`obj2_deepCopy:`, obj2_deepCopy)
console.log(obj2 === obj2_deepCopy)
console.log(obj2.d === obj2_deepCopy.d)
