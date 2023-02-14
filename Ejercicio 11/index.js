class Estudiante {
    nombre
    asignaturas = new Array(['HTML', 'CSS', 'JavaScript']);

    obtenDatos(){
        console.log(`Estudiante  ${this.nombre} Asignaturas: ${this.asignaturas[0]}`)
    }
}

const nuevoEstudiante = new Estudiante();
nuevoEstudiante.nombre = 'Camilo';
nuevoEstudiante.obtenDatos()