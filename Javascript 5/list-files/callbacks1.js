const sumaSync = (a, b) => a + b

const suma = (a, b, callbackFunc) => {
    setTimeout(() => callbackFunc(a + b), 500)
}

let s1 = sumaSync(10, 5)
console.log(s1)

suma(2, 3, (suma) => {
    console.log(`La suma es ${suma}`)
})

console.log("Se acabó el programa")