import * as moduloOperaciones from './modulos/controller.js'
import chalk from 'chalk';

const resSuma = moduloOperaciones.suma(1, 2);
const resMulti = moduloOperaciones.multiplica(1, 2);
const resSuma2 = moduloOperaciones.suma(4, 5);
const resMulti2 = moduloOperaciones.multiplica(4, 5);

console.log(resSuma);
console.log(resMulti);
console.log(resSuma2);
console.log(chalk.green(resMulti2));