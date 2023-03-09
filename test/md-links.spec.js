const { mdLinks } = require('../cli.js');
const path = require('path');

describe('mdLinks', () => {

  let pathFile;

  it('Revisar que la ruta ingresada sea absoluta', () => {
    pathFile = "C:\Users\Joki\LABORATORIA\DEV003-social-network";
    
    expect (console.log(true));
  });

  it('Convertir ruta relativa a ruta absoluta', () => {
    pathFile = ".\DEV003-social-network";
    expected = "\Users\Joki\LABORATORIA\DEV003-social-network"
    expect(mdLinks).toBe(false);
  });
})