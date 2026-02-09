class Person {
    #firstName
    #lastName

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.age = age;
    }

    // Getter
    get fullName() {
        console.log(`Accessing "fullName"`)
        return `${this.#firstName} ${this.#lastName}`;
    }

    // Setter
    set fullName(newName) {
        console.log(`Setting "fullName"`)
        const [first, last] = newName.split(' ')
        this.#firstName = first;
        this.#lastName = last;
    }


    getOld(years) {
        this.age += years;
    }

    static mayoríaEdad() {
        return 18
    }
}

const perico = new Person("Perico", "Chocolatero", 29);
perico.getOld(1);

console.log(perico.age)
console.log(perico.fullName) // <- Getter

perico.fullName = "Pedro Chocolatero"; // <- Setter

//console.log(perico.#firstName) // Da error al leer el código
//console.log(perico.#lastName) // Da error al leer el código

console.log(Person.mayoríaEdad())

