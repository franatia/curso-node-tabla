const colors = require('colors');

const crearArchivo = async(base = 1, listar = false, hasta=10) =>{

    try{
        console.clear();

        const fs = require('fs');
        let salida, consola = '';

        for(let i = 0; i <= hasta; i++){

            salida += `${i} x ${base} = ${i * base}\n`;
            consola += `${i} ${'x'.green} ${base} ${'='.green} ${i * base}\n`

        };

        if(listar){
            console.log('===================='.rainbow);
            console.log(`    Tabla del ${base} `);
            console.log('===================='.rainbow);
            console.log(consola);

        };

        fs.writeFileSync(`./salida/tabla${base}.txt`,salida);

        return `tabla${base}.txt`;

    }
    catch(err){

        throw `Error al crear el archivo .txt`.red;

    };

};

module.exports = {

    crearArchivo

}