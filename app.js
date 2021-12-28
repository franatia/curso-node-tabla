const colors = require('colors');

const argv =  require('./config/yargs');

const {crearArchivo} = require('./helper/multiplicar');

const base = argv.b;

const lista = argv.l;

const hasta = argv.h;

crearArchivo(base, lista, hasta)
    .then(name => console.log(`${name.rainbow}, creado`))
    .catch(err => console.log(err));