function verdadero () {
    return true
}

async function delayPromesa() {
    return setTimeout(() => console.log("Hola, soy una promesa"), 5000)
} 

function* genera () {
    let id = 0
    while(true) {
        yield id += 2
    }
}

const par = genera();
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);