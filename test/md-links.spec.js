/* eslint-disable no-undef */
const { checkMd, toAbsolute, pathExists, file, dir, urlStatus } = require('../components/components.js')

describe('prueba de función que corrobora si la extensión del archivo es markdown', () => {
  
  it('The file extension is .md returns true/false', () => {
    const a = checkMd('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md')
    expect(a).toBeTruthy()
  })
})

describe('prueba de función que verifica que la ruta ingresada se convierta a ruta absoluta', () => {
  
  it('Converts relative path to absolute path', () => {
    const b = toAbsolute('.\\prueba\\PRUEBA1.md')
    const result = 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md'
    expect(b).toEqual(result)
  })
})

describe('prueba de función que verifica que la ruta ingresada exista', () => {
  
  it('Verifies if path exists', () => {
    const c = pathExists('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md')
    expect(c).toBeTruthy()
  })
})

describe('prueba de función que verifica que la ruta ingresada corresponda a un archivo', () => {
  
  it('Verifies if path is a file', () => {
    const d = file('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md')
    expect(d).toBeTruthy()
  })
})

describe('prueba de función que verifica que la ruta ingresada corresponda a un directorio', () => {
  
  it('Verifies if path is a directory', () => {
    const e = dir('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba')
    expect(e).toBeTruthy()
  })
})

describe('prueba de función que valida la url extrayendo status http', () => {
  
  it('Catches an error when the url is invalid', () => {
    
    return urlStatus([{
    file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
    href: 'https://nodejs.org/api/fs.html',
    text: 'Path-aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii'}]).catch((error).not.toBeNull())
  })
})

// describe('prueba de función que valida la url extrayendo status http', () => {
  
//   it('Catches an error when the url is invalid', () => {
    
//     return urlStatus([{
//       file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
//       href: 'https://jestjs.io/',
//       text: 'Jest'
//     }]).then(res => {expect(res.text).toBe('Jest')})
//   })
// })
