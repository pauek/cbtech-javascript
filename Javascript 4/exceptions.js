class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

function top() {
    let obj = {};
    try {
        if (Math.random() < 0.5) {
            obj.crearlyNonExistentMethod();
        } else {
            throw new MyError(`Este es mi peazo error!`);
        }
    } finally {
        console.log("top - finally");
    }
}

function middle() {
    console.log(`Abro fichero`); // Reservo un recurso
    try {
        top();
    } catch (e) {
        if (e.name === "TypeError") {
            console.log(`middle: Te pillé (${e.message})`);
        } else {
            throw e;
        }
    } finally {
        console.log(`Cierro fichero`); // Libero un recurso
    }
}

function bottom() {
    try {
        middle();
    } catch (e) {
        if (e.name === "MyError") {
            console.log(`bottom: Pillao ${e.message}`);
        }
    }
}

bottom();
