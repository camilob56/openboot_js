function verdadero () {
    console.log('True');
}

async function delayPromesa() {
    return setTimeout(() => console.log("Hola, soy una promesa"), 5000)
} 

function* genera () {
    let id = 0;
    while(true){
        id++ 
        id++
        if (id === 50) {
            return id
        }
        yield id
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