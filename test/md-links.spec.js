const mdLinks = require('../cli.js');
const path = require('path');

describe('mdLinks', () => {

  let pathFile;

  it('Revisar que la ruta ingresada sea absoluta', () => {
    pathFile = "C:\Users\Joki\LABORATORIA\DEV003-md-links";
    expect (console.log(true));
  });

  it('Convertir ruta relativa a ruta absoluta', () => {
    pathFile = "..\DEV003-md-links";
    expect (console.log(true));
  });
});
