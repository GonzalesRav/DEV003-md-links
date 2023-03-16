const {
  pathExists, toAbsolute,
  file, dir, readir, eachFile, checkMd, filterMd, dirLinks,
  extractLinks,
} = require('./components/components.js')

// function mdLinks(route) {
//     return new Promise((resolve, reject) => {
//       toAbsolute(route)
//         .then((iAbs) => {
//           if (pathExists(iAbs)) {
//             if (file(iAbs)) {
//               if (checkMd(iAbs)) {
//                 extractLinks(iAbs)
//                 .then((result) => resolve(console.log(result)))
//               }

module.exports = {
  mdLinks,
};
