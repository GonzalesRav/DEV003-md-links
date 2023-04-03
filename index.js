
const { pathExists, toAbsolute, pathIsDirectory, pathIsFile, checkMd, extractLinks, urlStatus, getFilesWithPath } = require('./components/components.js')

const MdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        let promisseResponse = []
        const absolute = toAbsolute(path)
        if (pathExists(absolute)) {
            const filesArray = getFilesWithPath(absolute)
            console.log(filesArray, 'filesArray')
            filesArray.forEach((file) => {
                console.log(file, 'file')
                if (pathIsFile(file)) {
                    if (checkMd(file)) {
                        const links = extractLinks(file)
                        links.then((res) => {
                        if (options.validate) {
                            const validate = urlStatus(res)
                            validate.then((response) => {
                                promisseResponse = [...response]
                            })
                        } else {
                            // promisseResponse = [...res]
                            console.log(res)
                        }
                        })
                        
                    }
                    // else {console.error('La ruta ingresada no pertenece a un archivo .md')}
                }
                else if (pathIsDirectory(absolute)) {             
                    const logres = getFilesWithPath(absolute)
                    console.log('holi',logres)
                }
            })
        
        } else {
           reject(new Error('La ruta ingresada no existe')) 
        }

        resolve(promisseResponse)
        console.log(promisseResponse, 'PR')
    }
    
)}
  
// const MdLinks = (path, options) => {
//     return new Promise((resolve, reject) => {
//         const absolute = toAbsolute(path)
//         if (pathExists(absolute)) {
//             if (pathIsFile(absolute)) {
//                 if (checkMd(absolute)) {
//                     const links = extractLinks(absolute)
//                     links.then((res) => {
//                         if (options.validate) {
//                         const validate = urlStatus(res)
//                         validate.then((response) => {resolve(response)})
//                     } else {
//                         resolve(res)
//                     }
//                     })
                    
//                 } else {console.error('La ruta ingresada no pertenece a un archivo .md')}
//             }
//             else if (pathIsDirectory(absolute)) {             
//                 const logres = getFilesWithPath(absolute)
//                 console.log('holi',logres)
//             }
//         } else {
//            reject(new Error('La ruta ingresada no existe')) 
//         }
//     }
    
// )}


module.exports = {
MdLinks
};
