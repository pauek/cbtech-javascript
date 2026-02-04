
function f(x) {
    return x + 1
}

const g = function (x) {
    return x + 1;
}
let g2 = g; 

const h = (x) => x + 1

// 1. Las funciones en realidad se pueden usar como métodos.

let obj = {
    a: 1,
    b: true,
    c: "hola",
    nombre: "Buteflika",
    sayHi() {
        console.log(`Hi, my name is ${this.nombre}!`)
    }
}

let sayHi = obj.sayHi;

// En el momento de la llamada...
obj.sayHi() // <-- Hay un objecto a la IZQUIERDA
// sayHi()     // <-- No hay un objeto a la izquierda

let obj2 = {
    sayHi: obj.sayHi
}

obj2.sayHi() // ??????

// Arrow functions (NOT TIENEN 'this', por tanto
// no sirven como métodos)
obj.ladra = () => {
    console.log(`guau! ${this}`)
}

obj.ladra()

