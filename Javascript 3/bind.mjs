
let persona = {
    nombre: "Paquito",
    apellido: "Chocolatero",
    sayHi() {
        console.log(`Qué tal, soy ${this.nombre}`)
    }
}

let sayHi = persona.sayHi.bind(persona)

let persona2 = {
    nombre: "Menganito"
}
let sayHi2 = persona.sayHi.bind(persona2)

sayHi()
sayHi2()