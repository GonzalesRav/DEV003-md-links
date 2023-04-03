#!/usr/bin/env node
const { broken, stats } = require('./components/components.js');
const { MdLinks} = require('./index.js')

const inputArray = process.argv;
const path = inputArray[2]
const validate = inputArray.includes('--validate') || inputArray.includes('--v')
const valStats = inputArray.includes('--stats') || inputArray.includes('--s')
const help = inputArray.includes('--help')

if (inputArray.length <= 2) {
  console.log('Por favor, introduzca datos con el formato válido. Para solicitar ayuda utilizar el comando "--help"')
} else if (help) {
  console.log('La libreria md-links necesita ingresar una ruta absoluta o relativa de un archivo o directorio \n para extraer las url y el texto de los links encontrados en los archivos ".md".\n Utilizar el comando "--validate" o "--v" para saber su estatus http.\n Utilizar el comando "--stats" o "--s" para contabilizar la cantidad total de links y links unicos encontrados en los archivos.\n Utilizar la mezcla de ambos comandos para contabilizar cuántos links "rotos" existen.');
} else if (validate) {
  MdLinks(path, {validate: true}).then((resValidateMd) => {
    if (valStats) {
      const brokenStats = broken(resValidateMd)
      console.log(brokenStats)
    } else {console.log(resValidateMd)}
  })
} else if (valStats) {
  MdLinks(path, {validate: false}).then((resStatsMd) => {
      const statistics = stats(resStatsMd)
      console.log(statistics)
  })
} else if (inputArray.length === 3) {
  MdLinks(path, {validate: false}).then((response) => {
    console.log(response)
  }).catch((error) => {console.log(error.message)})
} else {
  console.log('Por favor, introduzca datos con el formato válido. Para solicitar ayuda utilizar el comando "--help"')
}
