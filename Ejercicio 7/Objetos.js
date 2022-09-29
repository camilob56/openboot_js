const objDatos = {
    nombre: 'camilo',
    apellido: 'bernal',
    edad: 28,
    altura: 1.66,
    isDeveloper: true
}

console.log(objDatos.edad);

let datosP = new Array(objDatos, {nombre: 'laura', apellido: 'trujillo', edad: 25, altura: 1.70, isDeveloper: false }, {nombre:'fernando', apellido: 'pedre', edad: 23, altura: 1.60, isDeveloper:false});
console.log(datosP);

datosP.sort((a, b) => b.edad - a.edad);
console.log(datosP);