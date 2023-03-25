#!/usr/bin/env node

const { extractLinks, urlStatus } = require("./components/components.js");
const { } = require("./index.js");


const inputArray = process.argv;
const i2 = inputArray[2];

// function log (input) {
//     if (input.length === 3) { console.log(input[2])
// } else if (input.length === 5) {console.log(input[3], input[4])
// } else if (input[3] === '--v' || input[3] === '--s') {console.log(input[3])
// } else console.log('Por favor introduzca los datos necesarios')}

let extractArr = [
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://es.wikipedia.org/wiki/Node.js',
      text: 'Node.js - Wikipedia'
    },
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://github.com/Laboratoria/course-parser',
      text: '`course-parser`'
    },
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic',
      text: 'Funciones clásicas'
    },
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow',
      text: 'Arrow Functions'
    },
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://jestjs.io/',
      text: 'Jest'
    },
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://nodejs.org/api/fs.html',
      text: 'File system - Documentación oficial (en inglés)'
    },
    {
      file: '.\\prueba\\PRUEBA2.md',
      href: 'https://nodejs.org/api/path.html',
      text: 'Path-aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii'
    }
  ]
// extractLinks(i2).then((response) => {console.log(response)
// })

urlStatus(extractArr).then((res) => {
    return console.log(res);
})