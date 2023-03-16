const components = require('../components/components.js')

describe('prueba de función que corrobora si la extensión del archivo es markdown', () => {
  
  it('The file extension is .md returns true/false', () => {
    expect(components.checkMd('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md').toBe(true) )})
})
