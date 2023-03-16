const {   pathExists,
    toAbsolute,
    file,
    dir,
    readir,
    eachFile,
    checkMd,
    filterMd,
    dirLinks,
    extractLinks,} = require("./components/components.js");

function mdLinks(route) {
    return new Promise((resolve, reject) => {
      toAbsolute(route)
        .then((iAbs) => {
          if (pathExists(iAbs)) {
            if (file(iAbs)) {
              if (checkMd(iAbs)) {
                extractLinks(iAbs)
                .then((result) => resolve(console.log(result)))
              }
            } else if (dir(iAbs)) {
              let dirArray = readir(iAbs);
              dirArray
                .then((result) => {
                    const eachF = eachFile(result, iAbs)
                    const filtMd = filterMd(eachF)
                    console.log(filtMd);
                    // dirLinks(filtMd).then((result)=>(console.log(result)))
                })
                // console.log(result)) //eachFile(result, iAbs))
                // .then((result) => console.log(result))//filterMd(result))
                // .then((result) => console.log(result)) //dirLinks(result))
                // .then((result) => console.log(result)) //resolve(console.log(result)))
                .catch((error) => console.log("hubo un error:", error));
            }
          }
        })
        .catch((error) => reject(console.error(error)));
    });
  }

module.exports = {
  mdLinks,
};