

let str = "Hola soy un texto con comillas simples"
let str2 = "Soy un texto con comillas dobles"


console.log(str)
console.log(str2)


let str3 = "Otro texto \"concatenemos\"" 
let str4 = "Otro texto 'concatenemos'"
let str5 = "Otro texto \"concatenemos\""
let str6 = "Otro texto 'concatenemos'"

console.log(str3)
console.log(str4)
console.log(str5)
console.log(str6)


let str7 = "String con backticks"
console.log(str7)

let nombre = "Camilo"

let saludo = `Hola ${nombre} Bienvenido`

console.log(saludo)


let plantilla = `
<html>
    <h1>Hola este es un titulo</h1>
    <p>Este es mi nombre ${nombre}</p>
    <p>Este es un párrafo</p>
</html>
`

console.log(plantilla)


let libros = new Array("Empieza", "Monje", "Poder")
console.log(libros)