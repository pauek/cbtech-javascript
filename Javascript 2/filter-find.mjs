
let palabras = ["alpha", "dete", "gammab", "", "a", "aaa", "Abc"]

// las palabras que empiezan por 'a'
let supervivientes = palabras.filter((p) => p[0] === "a")
console.log(supervivientes)

// las palabras que tienen una 'a'
let tienen_a = palabras.filter(p => !p.includes("a"))
console.log(tienen_a)

let primera_que_tiene_b = palabras.find(p => p.includes("b"))
console.log(primera_que_tiene_b)

let indice_primera_que_tiene_b = palabras.findIndex(p => p.includes("b"))
console.log(indice_primera_que_tiene_b)