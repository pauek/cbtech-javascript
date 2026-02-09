class Animal {
    constructor(weight) {
        this.name = "animal";
        this.weight = weight;
    }

    walk() {
        console.log(`An ${this.name} is walking`);
    }
}

class Dinosaur extends Animal {
    constructor() {
        super(10.0); // Esto es necesario sino hay una excepción
        this.name = "dinosaur";
    }

    talk() {
        console.log(`Roarrr!!`);
    }
}

class TRex extends Dinosaur {
    constructor() {
        super(); // Esto es necesario
        this.name = "trex";
    }

    hunt() {
        console.log(`A ${this.name} is hunting`);
    }
}

const trex = new TRex();

console.log(trex.name);
trex.walk();
trex.talk();
trex.hunt();
