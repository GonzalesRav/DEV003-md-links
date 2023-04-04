#!/usr/bin/env node
const { broken, stats } = require('./lib/components.js');
const { MdLinks} = require('./lib/index.js')

const inputArray = process.argv;
const path = inputArray[2]
const validate = inputArray.includes('--validate') || inputArray.includes('-v')
const valStats = inputArray.includes('--stats') || inputArray.includes('-s')
const help = inputArray.includes('--help')

if (inputArray.length <= 2) {
  console.log('Por favor, introduzca datos con el formato válido. Para solicitar ayuda utilizar el comando "--help"')
} else if (help) {
  console.log('La libreria md-links necesita ingresar una ruta absoluta o relativa de un archivo o directorio \n para extraer las url y el texto de los links encontrados en los archivos ".md".\n Utilizar el comando "--validate" o "-v" para saber su estatus http.\n Utilizar el comando "--stats" o "-s" para contabilizar la cantidad total de links y links unicos encontrados en los archivos.\n Utilizar la mezcla de ambos comandos para contabilizar cuántos links "rotos" existen.');
} else if (validate) {
  MdLinks(path, {validate: true}).then((resValidateMd) => {
    if (valStats) {
      const brokenStats = broken(resValidateMd)
      console.log(' Total: ',brokenStats.total,'\n',
       'Unique: ', brokenStats.unique,'\n',
       'Broken: ', brokenStats.broken)
    } else {console.log(resValidateMd.map(link => `${link.value.file} ${link.value.href} ${link.value.text} ${link.value.status} ${link.value.ok}`).join('\n'))}
  })
} else if (valStats) {
  MdLinks(path, {validate: false}).then((resStatsMd) => {
      const statistics = stats(resStatsMd)
      console.log(' Total: ',statistics.total,'\n',
       'Unique: ', statistics.unique)
  })
} else if (inputArray.length === 3) {
  MdLinks(path, {validate: false}).then((response) => {
    console.log(response.map(link => `${link.file} ${link.href} ${link.text}`).join('\n'))
  }).catch((error) => {console.log(error.message)})
} else {
  console.log('Por favor, introduzca datos con el formato válido. Para solicitar ayuda utilizar el comando "--help"')
}
