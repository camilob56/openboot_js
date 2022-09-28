
const listaCompra = new Array('Jabon', 'Carne', 'Papel de baño', 'Pollo', 'Refresco');
console.log(listaCompra);

listaCompra.push('Aceite de Girasol');
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);


const listaPeliculas = [
    {titulo: 'John Wick', director: 'Chad Stahelski', fecha:new Date('December 25, 2014')},
    {titulo: 'Iron Man: el hombre de hierro', director: 'Jon Favreau', fecha:new Date('April 30, 2008')},
    {titulo: 'Scarface', director: 'Brian De Palma', fecha:new Date('December 09, 1983')}
];

console.log(listaPeliculas);

const fechasPos = listaPeliculas.filter(film => film.fecha > new Date('January 1, 2010'));
console.log(fechasPos);

const directores = listaPeliculas.map((director) => `${director.director}` )
console.log(directores);

const titulos = listaPeliculas.map((film) => `${film.titulo}` )
console.log(titulos);

const films = directores.concat(titulos);
console.log(films);

const filmsPropagacion = [...directores, ...titulos];
console.log(filmsPropagacion);