const fecha = new Date();
console.log(fecha);

const fechaNacimiento = new Date(1994, 04, 01);
console.log(fechaNacimiento);

const dif = (fecha > fechaNacimiento);
console.log(dif);

const dia = (fechaNacimiento.getDate());
console.log(dia);

const mes = (fechaNacimiento.getMonth() + 1);
console.log(mes);

const ano = (fechaNacimiento.getFullYear());
console.log(ano);