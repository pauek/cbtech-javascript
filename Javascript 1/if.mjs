let a = 1
if (a === 1) {
    console.log(`a es 1`)
} else {
    console.log(`a no es 1`)
}

let nombre = "James"
if (nombre === "James") {
    console.log(`Se llama James`)
}

let frase = ""
if (frase !== "") { // El string contiene algo
    console.log(`La frase contiene argo`)
}

let d = 0; // null o undefined es "vacío"
if (d !== null && d !== undefined) { // Aquí hay algo
    console.log(`d = ${d}`)
}