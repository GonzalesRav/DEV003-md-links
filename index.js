function md-links(route) {
    const iAbs = toAbsolute(route)
// Agregar new promisse
    if (pathExists(iAbs)) {
        if(file(iAbs)) {
            if (checkMd(iAbs)) {
                return extractLinks(iAbs)};
        } else if (dir(iAbs)) {
                try {
                    readir(iAbs)
                .then((result) => eachFile(result))
                .then((result) => filterMd(result))
                .then((result) => {
                    let filesLinks = [];
            
                    result.forEach(element => {
                    filesLinks.push(extractLinks(element));})})
                .catch((error) => console.log(console.log("hubo un error:", error)));
                } catch (error) {
                    console.log(error);
                }
                
            }
    //reject
        } else {console.log("null");
    }
}


const ifDir = (route) => {
    return readir(route)
.then(resultado_readir => eachFile(resultado_readir))
.then(resultado_eachfile => filterMd(resultado_eachfile))
.then(resultado_filter => dirLinks(resultado_filter))
.catch(error => console.error(error));
}


// const ifDir = (route) => {
//   const files = readir(route);
//   const filesAbs = eachFile(files);
//   const filesMd = filterMd(filesAbs);
//   const dirLi = dirLinks(filesMd);
//   return dirLi
// }



// module.exports = {
//   // ... links: (como en card validation)
// };