// Función arrow: sin `function` y sin `return` y sin llaves
const suma = (a, b) => a + b

// Si solo hay 1 parámetro se pueden quitar los paréntesis
const inc = (x) => x + 1

// Si necesitas más de una instrucción
const print = (msg) => {
    console.log(`Mensage: ${msg}`)
}

// Para poder devolver un objeto necesito poner paréntesis
// porque si no se considera un bloque de código
const makePerson = (name, age) => ({ name, age })

console.log(suma(1, 2))
console.log(inc(3))
print("hola")
console.log(makePerson("pauek", 50))
