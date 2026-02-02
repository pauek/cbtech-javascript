let peso = 50
let categoria = null

if (peso < 10) {
    categoria = "pluma"
} else if (peso < 20) {
    categoria = "medio"
} else {
    categoria = "pesado"
}

console.log(`Categoria: ${categoria}`)
