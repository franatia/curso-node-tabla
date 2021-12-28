const yargs = require('yargs');

//Creamos las opciones de comando de guia
yargs.option('b',{
    alias:'base',
    type:'number',
    default: 1,
    demandOption:true,
    //Parametro describe (breve descripcion de la variable que se va a insertar)
    describe:`Es la base de la tabla de multiplicar`
});

yargs.option('l',{
    alias:'lista',
    type:'boolean',
    default:false,
    describe:`Muestra la tabla de multiplicar`
})

yargs.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'Indicamos la longitud de la tabla'
})

//Checkeamos los datos ingresados
yargs.check((argv, options)=>{

    //Si b no es un numero, empleamos throw
    if(isNaN(argv.b)){

        throw 'La base debe ser un numero';

    };
    
    // Si l no es un booleano, empleamos throw
    if(!(typeof argv.l == 'boolean')){

        throw 'Lista debe ser un booleano. true: en caso de querer mostrar la lista';
    
    };

    // Si h no es un numero, empleamos throw
    if(isNaN(argv.h)){

        throw 'Los datos de "hasta" debe ser numerico';

    };

    // Si todo esta bien, retornamos true
    return true;

})

//Exportamos el elemento argv
module.exports = yargs.argv;