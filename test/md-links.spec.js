/* eslint-disable no-undef */
const { checkMd, toAbsolute, pathExists, pathIsDirectory, urlStatus, readir, filterMd, stats, broken, extractLinks, eachFile, pathIsFile } = require('../lib/components.js')
const axios = require('axios')

jest.mock('axios')


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
    const d = pathIsFile('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md')
    expect(d).toBeTruthy()
  })
})

describe('prueba de función que verifica que la ruta ingresada corresponda a un directorio', () => {
  
  it('Verifies if path is a directory', () => {
    const e = pathIsDirectory('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba')
    expect(e).toBeTruthy()
  })
})

describe('prueba de función que extrae el contenido de la carpeta', () => {
  
  it('Shows in an array the directory content', () => {
    const f = readir('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba')
    expect(f).toEqual([ 'carpeta1', 'PRUEBA0.md', 'PRUEBA1.md', 'PRUEBA2.md', 'pruebita.js' ])
  })
})

describe('Fx que filtra el array de rutas absolutas y filtra los archivos md', () => {
  
  it('Selects the markdown files', () => {
    const g = filterMd([ 'carpeta1', 'PRUEBA0.md', 'PRUEBA1.md', 'PRUEBA2.md', 'pruebita.js' ])
    expect(g).toEqual([ 'PRUEBA0.md', 'PRUEBA1.md', 'PRUEBA2.md'])
  })
})

describe('Fx que del array de archivos vuelve las rutas absolutas', () => {
  
  it('returns the array of relative paths as an array of absolutes', () => {
    const h = eachFile([ 'carpeta1', 'PRUEBA1.md', 'pruebita.js' ], 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba')
    expect(h).toEqual([ 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\carpeta1', 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md',
    'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\pruebita.js'])
  })
})

describe('Fx que lee el archivo markdown y extrae las urls', () => {
  it('Returns an object array with the links found', () => {
    return extractLinks('C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md')
      .then((res) => {
        expect(res).toEqual([{
          file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md',
          href: 'https://docs.npmjs.com/cli/install',
          text: 'docs oficiales de `npm install` acá'}])
      })
  })
})

describe('prueba de función que valida la url extrayendo status http', () => {
  
  it('Prints status and status text', () => {
    
    const urlArray = [{
      file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic',
      text: 'Funciones clásicas'}]

 
      axios.get.mockImplementationOnce(() => Promise.resolve({status: 200, statusText: 'OK'}))
      // axios.get.mockResolvedValue({status: 200, ok: 'OK'})

    return urlStatus(urlArray).then(resp => {
      expect(resp).toEqual(
        [
          {
            status: 'fulfilled',
            value: {
              file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
              href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic',
              text: 'Funciones clásicas',
              status: 200,
              ok: 'OK'
            }
          }
        ]
    )})
  })

  it('Chatches error and prints status and status text', () => {
    
    const urlArray = [{
      file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
      href: 'https://nodejs.org//pat.html',
      text: 'Path-aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii'}]

 
      axios.get.mockImplementationOnce(() => Promise.reject({status: 404, statusText: 'fail'}))
      // axios.get.mockResolvedValue({status: 200, ok: 'OK'})

    return urlStatus(urlArray).catch(err => {
      expect(err).toEqual(
        [
          {
            status: 'fulfilled',
            value: {
              file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
              href: 'https://nodejs.org//pat.html',
              text: 'Path-aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii',
              status: 404,
              ok: 'fail'
            }
          }
        ]
    )})
  })
})

describe('Fx que extrae el total de elementos y la cantidad de elementos unicos', () => {
  const array = [
    {
      file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
      href: 'https://es.wikipedia.org/wiki/Node.js',
      text: 'Node.js - Wikipedia'
    },
    {
      file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
      href: 'https://github.com/Laboratoria/course-parser',
      text: '`course-parser`'
    },
    {
      file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
      href: 'https://nodejs.org/api/fs.html',
      text: 'File system - Documentación oficial (en inglés)'
    },
    {
      file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
      href: 'https://nodejs.org//pat.html',
      text: 'Path-aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii'
    }
  ]

  const arrayBroken = [
    {
      status: 'fulfilled',
      value: {
        file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow',
        text: 'Arrow Functions',
        status: 200,
        ok: 'OK'
      }
    },
    {
      status: 'fulfilled',
      value: {
        file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
        href: 'https://jestjs.io/',
        text: 'Jest',
        status: 200,
        ok: 'OK'
      }
    },
    {
      status: 'fulfilled',
      value: {
        file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
        href: 'https://nodejs.org/api/fs.html',
        text: 'File system - Documentación oficial (en inglés)',
        status: 200,
        ok: 'OK'
      }
    },
    {
      status: 'fulfilled',
      value: {
        file: 'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
        href: 'https://nodejs.org//pat.html',
        text: 'Path-aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii',
        status: 404,
        ok: 'fail'
      }
    }
  ]
  it('Shows stats', () => {
    const h = stats(array)
    expect(h).toEqual({ total: 4, unique: 4 })
  })

  it('Shows stats and broken links', () => {
    const i = broken(arrayBroken)
    expect(i).toEqual({ total: 4, unique: 4, broken: 1 })
  })
})
