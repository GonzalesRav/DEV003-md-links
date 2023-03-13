const fs = require('fs');
const path = require('path');

// Fx que convierte la ruta en absoluta
const toAbsolute = (route) => {
  return path.resolve(route)
}

// Fx que revisa si la ruta existe
const pathExists = (route) => {
  return fs.existsSync(route)
}

// Fx sincrona que revisa si es un  archivo 
const file = (route) => {
  const r = fs.statSync(route) 
  return r.isFile() ? true :false
}

// Fx sincrona que revisa si es un  directorio 
const dir = (route) => {
  const r = fs.statSync(route) 
  return r.isDirectory() ? true :false
}

// Fx que revisa si es un archivo md
const checkMd = (route) => {
  return (path.extname(route) === ".md") ? true : false
 }
 

// Fx que extrae links
const extractLinks = (route) => {
  try {
  const readMd = fs.readFileSync(route, 'utf8');
  const regex = /\[(.*?)\]\((?!#)(.*?)\)/g;
  let match;
  while ((match = regex.exec(readMd)) !== null) { 
      const text = match[1].slice(0,50); 
      const url = match[2]; 
      const file = route;
      console.log(file, url, text);
      }
  } catch (error) {
      console.log(error);
  }
  
}

// Fx que extrae los archivos de la carpeta
const readir = (route) => {
  return fs.readdirSync(route);
}

// Fx que del array de archivos vuelve las rutas absolutas
const eachFile = (array, route) => {
  let arrFiles = [];
  array.forEach(element => {arrFiles.push(path.resolve(route, element))    
  });
  return arrFiles;
}

// Fx que filtra el array de rutas absolutas y filtra los archivos md
const filterMd = (array) => {
  let arrFilesMd = [];
  array.forEach(element => {
    if (checkMd(element)) {
      arrFilesMd.push(element)
    }});
    return arrFilesMd;
} 

// Fx que recibe un array de rutas md y extrae los links de cada uno
const dirLinks = (array) => {
  let filesLinks = [];
          
    array.forEach(element => {
    filesLinks.push(extractLinks(element));
    });
  return console.log(filesLinks);
}

module.exports = {
  pathExists,
  toAbsolute,
  file,
  dir,
  readir,
  eachFile,
  checkMd,
  filterMd,
  dirLinks,
  extractLinks,
};
