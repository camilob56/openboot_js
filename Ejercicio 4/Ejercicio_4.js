let nombre = 'Cristian Camilo';

let apellido = 'Bernal Marin';

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

console.log(estudiante.length);

console.log(nombre[0]);

console.log(apellido[11]);

console.log(estudiante.trim().length);

console.log(estudiante.includes('Camilo Bernal'));
