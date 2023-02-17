const nombre = 'Camilo';
const apellido = 'Bernal';

const persona = {
    nombre,
    apellido
};


sessionStorage.setItem('persona', JSON.stringify(persona));
JSON.parse(sessionStorage.getItem('persona'));

localStorage.setItem('persona', JSON.stringify(persona));
JSON.parse(localStorage.getItem('persona'));

const nuevo = new Date();
document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(nuevo.getTime() + 2 * 60000)}`