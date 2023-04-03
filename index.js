
const { pathExists, toAbsolute, file, dir, checkMd, extractLinks, urlStatus, readir } = require('./components/components.js')

const MdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        const absolute = toAbsolute(path)
        if (pathExists(absolute)) {
            if (file(absolute)) {
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
            else if (dir(absolute)) {
                console.log('La ruta corresponde a un directorio, por favor ingresar un archivo markdown.')                
            }
        } else {
           reject(new Error('La ruta ingresada no existe')) 
        }
    }
    
)}
  


module.exports = {
MdLinks
};
