// const fs = require('fs');
// const { marked } = require('marked');
// const cheerio = require('cheerio');

// // Leer el documento markdown
// const markdown = fs.readFileSync('README.md', 'utf8');
// // Convertirlo a formato Html con "marked"
// const html = marked(markdown);

// // Se usa $ por convención del cheerio que viene de una relación entre jQuery y Html
// const $ = cheerio.load(html);
// // Se seleccionan los elementos "a" que corresponde a los links
// const links = $('a');

// // Se crea la constante donde se recopilará lo solicitado
// const linkList = [];

// links.each((i, link) => {
//   linkList.push({
//     href: $(link).attr('href'),
//     text: $(link).text()
//   });
// });

// console.log(linkList);
// console.log(html);
// console.log($);

//--------------------------------------------------

// const fs = require('fs');

// const rFile = (route) => {
//     const readMd = fs.readFileSync(route, 'utf8');
//     const regex = /\[(.*?)\]\((?!#)(.*?)\)/g;
//     let match;
//     while ((match = regex.exec(readMd)) !== null) { 
//         const linkText = match[1]; 
//         const linkUrl = match[2]; 
//         console.log(linkUrl, linkText);
//         }
// }

//--------------------------------------------------

// const extractLinks = (route) => {
//     return new Promise((resolve, reject) => {
//       fs.readFile(route, 'utf8', (err, data) => {
//         if (err) reject(err);
//         const regex = /\[(.*?)\]\((?!#)(.*?)\)/g;
//         const links = [];
//         let match;
//         while ((match = regex.exec(data)) !== null) { 
//             const text = match[1].slice(0,50); 
//             const url = match[2]; 
//             const file = route;
//             links.push({file, url, text});
//         } 
//         resolve(links.map(link => `${link.file} ${link.url} ${link.text}`).join('\n'));
//       });
//     });
//   }

//--------------------------------------------------

// const readir = (route) => {
//     return new Promise((resolve, reject) => {
//       try {
//         const files = fs.readdirSync(route);
//         resolve(files);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
  
//   const eachFile = (array, route) => {
//     return new Promise((resolve, reject) => {
//       try {
//         let arrFiles = [];
//         array.forEach(element => {
//           arrFiles.push(path.resolve(route, element));
//         });
//         resolve(arrFiles);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
  
  
  
//   const filterMd = (array) => {
//     return new Promise((resolve, reject) => {
//       try {
//         let arrFilesMd = [];
//     array.forEach(element => {
//       if (checkMd(element)) {
//         arrFilesMd.push(element)}});
//         resolve(arrFilesMd);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
  
//   const dirLinks = (array) => {
//     return new Promise((resolve, reject) => {
//       let filesLinks = [];
//       array.forEach(element => {
//         filesLinks.push(extractLinks(element));
//       });
//       resolve(filesLinks);
//     });
//   }

//----------------------------------------------------------
// function verify(route) {
//     const iAbs = toAbsolute(route)

//     if (pathExists(iAbs)) {
//         if(file(iAbs)) {
//             if (checkMd(iAbs)) {
//                 return extractLinks(iAbs)};
//         } else if (dir(iAbs)) {
            
//             const files = readir(iAbs);
//             const filesAbs = eachFile(files);
//             const filesMd = filterMd (filesAbs);
//             let filesLinks = [];
            
//             filesMd.forEach(element => {
//                 filesLinks.push(extractLinks(element));
//             });
//             return filesLinks; 
    
//         } else {console.log("null");}
//     }
// }

//----------------------------------------------------
// Para probar 1x1
// let readirr=[ 'PRUEBA1.md', 'PRUEBA2.md', 'pruebita.js' ]
// let each = [
//     'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md',
//     'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md',
//     'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\pruebita.js'
//   ]
// let filtMd = [
//     'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA1.md',
//     'C:\\Users\\Joki\\LABORATORIA\\DEV003-md-links\\prueba\\PRUEBA2.md'
//   ]