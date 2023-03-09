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

// // Leer el documento markdown
// const markdown = fs.readFileSync('README.md', 'utf8');
// // Definir la expresion regular a utilizar
// const regex = /\[(.*?)\]\((.*?)\)/g;
// let match;
// // Usar un ciclo while para recorrer todos los elementos que coincidan con la regex
// while ((match = regex.exec(markdown)) !== null) { // exec devuelve un array con las coincidencias
// // Solo se utiliza 1 y 2 pq 0 contiene todo lo que coincide y luego vienen los sub grupos
//   const linkText = match[1]; 
//   const linkUrl = match[2]; 
//   console.log(linkUrl, linkText);
// }
