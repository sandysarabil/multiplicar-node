const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`El dato ${ base } o el ${ limite } no son un número`);
        }
        let data = '';
        for (var i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        resolve(data);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El dato ${ base } no es un número`);
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}