const {
  readdir,
  readFile,
  writeFile
} = require("fs");


const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>  str  .split("")  .reverse()  .join("");


/* readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
}); */

function leerDirectorio(inbox) {
  return new Promise((resolve, reject) => {
      readdir(inbox, (error, files) => {
        if (error) reject (new Error("Error: Folder inaccessible")); 
        resolve(files) 
  });
 });
}

 function leerArchivo(file) {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
    if (error) reject(console.log("Error: File error"));
    resolve(data)
  });
 })
}

 function escribirArchivo(file, data) {
   return new Promise((resolve, reject) => {
    writeFile(join(outbox, file), reverseText(data), error => {
      if (error) reject(new Error("Error: File could not be saved!"));
      resolve(console.log(`${file} was successfully saved in the outbox!`));
   })
 })
}

async function resultadoFinal(){
  const files = await leerDirectorio(inbox);
    //for (i=0; i< files.length; i++) {
      files.forEach(async file => {
      let data = await leerArchivo(file);
      await escribirArchivo(file, data);
    })
  }

  resultadoFinal();