const { pathExists, toAbsolute, file, dir, readir, eachFile, checkMd, filterMd, dirLinks, extractLinks} = require('./components/components.js')
const path = require('path')

const routesVerified = (route) => {
  new Promise((resolve, reject) => {
    const routeToAbsolute = toAbsolute(route)
    const realPath = pathExists(routeToAbsolute)
    const ifFile = file(routeToAbsolute)
    let routesArray = []

    Promise.all([realPath, ifFile]).then(values => {
      

      if (values[0]) {
        console.log('es true');
        if (values[1]){
          console.log('es true values1');

          if (checkMd(routeToAbsolute)) {
            console.log('es checkMD');
            routesArray.push(routeToAbsolute)
            console.log(routesArray)
          } else console.error("La ruta del archivo ingresado no corresponde a un markdown");
        
        } else if (dir(routeToAbsolute)) {
          console.log('Entró a directorio');
          let readDir = Promise.resolve(readir(routeToAbsolute)) 
          readDir.then((result) => {
            result.forEach(element => {
              if (checkMd(element)) {
                routesArray.push(path.resolve(route, element))
              }});

            console.log(routesArray)})
       
        } else console.error('La ruta no corresponde a directorio o archivo');
        
      resolve(routesArray)

    } reject(Error)

    
    })

    
  })
}

module.exports = {
routesVerified
};
