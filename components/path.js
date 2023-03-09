const fs = require('fs');
const path = require('path');
const pathFile = process.argv[2];
const absPath = path.resolve(pathFile);

console.log("relativo:", pathFile, "absoluto:", absPath);

if ((path.isAbsolute(pathFile))){
    console.log(path.isAbsolute(pathFile))}
    else { console.log("absPath", absPath)};

// sí lee que exista el path
    fs.access(absPath, fs.constants.F_OK, (error) => {
    if (error) {
      console.log('El archivo no existe');
    } else {
      console.log('El archivo existe');
    }
  });

  if (fs.existsSync(pathFile)) {
    console.log('La A ruta existe');
  } else {
    console.log('La A ruta no existe');
  }

  