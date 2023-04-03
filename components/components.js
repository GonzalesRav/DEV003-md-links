const fs = require('fs')
const path = require('path')
const axios = require('axios')

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
    return new Promise((resolve, reject) => {
      fs.readFile(route, 'utf8', (err, data) => {
        if (err) reject(err);
        const regex = /\[(.*?)\]\((?!#)(.*?)\)/g;
        const links = [];
        let match;
        while ((match = regex.exec(data)) !== null) { 
            const text = match[1].slice(0,50); 
            const href = match[2]; 
            const file = route;
            links.push({file, href, text});
        } 
        resolve (links);
      });
    });
  }

// Fx status


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
// const dirLinks = (array) => {
//   let filesLinks = [];
          
//     array.forEach(element => {
//     filesLinks.push(extractLinks(element));
//     });
//   return filesLinks;
// }

// Fx para validar el href
const urlStatus = (array) => {
  return Promise.allSettled(array.map((element) => {
    return (axios.get(element.href))
    .then((res) => {
      if ((res.status <= 299) && (res.status >= 200)) {
        return {
          file: element.file,
          href: element.href,
          text: element.text,
          status: res.status,
          ok: res.statusText
        }
      }      
    })
    .catch((error) => {
      return {
        file: element.file,
        href: element.href,
        text: element.text,
        status: error.response.status,
        ok: 'fail'
      }
    })
    
  }))
}

// Fx que extrae stats

const stats = (array) => {
  let elements = []
  array.forEach((element) => { elements.push(element.href) })
  const unique = [... new Set(elements)]

  return {
    total: elements.length,
    unique: unique.length
  }
}

const broken = (array) => {
  let elements = []
  array.forEach((element) => { elements.push(element.value.href) })
  const unique = [... new Set(elements)]
  const broken = array.filter((element) => element.value.ok === 'fail')
    return {
      total: elements.length,
      unique: unique.length,
      broken: broken.length
    }
}

const getFilesWithPath = (route) => {
// Si route es file, devolver arreglo con el file
// Si es directorio, devolver arreglo con su contenido utilizando readir
let filesArray = []
if (file(route)){
  filesArray.push(route)
  return filesArray
} else {
  const directoryContent = readir(route)
  const directoryContentAbsolute = eachFile(directoryContent, route)
  directoryContentAbsolute.forEach(element => {
    let arrFiles = getFilesWithPath(element)
    // Añadir elementos .md del arrFiles al filesArray
    // Buscar concatenar arreglos 
  })
  return filesArray
}
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
  // dirLinks,
  extractLinks,
  urlStatus,
  stats,
  broken
}