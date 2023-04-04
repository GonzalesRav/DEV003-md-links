
const { pathExists, toAbsolute, pathIsDirectory, pathIsFile, checkMd, extractLinks, urlStatus } = require('./components.js')

const MdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        const absolute = toAbsolute(path)
        if (pathExists(absolute)) {
            if (pathIsFile(absolute)) {
                if (checkMd(absolute)) {
                    const links = extractLinks(absolute)
                    links.then((res) => {
                        if (options.validate) {
                        const validate = urlStatus(res)
                        validate.then((response) => {resolve(response)})
                    } else {
                        resolve(res)
                    }
                    })
                    
                } else {console.error('La ruta ingresada no pertenece a un archivo .md')}
            }
            else if (pathIsDirectory(absolute)) {
                console.log('La ruta corresponde a un directorio, por favor ingresar la ruta de un archivo.')                
            }
        } else {
           reject(new Error('La ruta ingresada no existe')) 
        }
    }
    
)}
  


module.exports = {
MdLinks
};
