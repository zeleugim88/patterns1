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

async function leerDirectorio(inbox) {
  return new Promise((resolve, reject) => {
      readdir(inbox, (error, files) => {
        if (error) reject (console.log("Error: Folder inaccessible")); 
        resolve(files) 
  });
 })
}

 async function leerArchivo(file) {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
    if (error) reject(console.log("Error: File error"));
    resolve(data)
  });
 })
}

 async function escribirArchivo(data) {
   return new Promise((resolve, reject) => {
    writeFile(join(outbox, file), reverseText(data), error => {
      if (error) reject(console.log("Error: File could not be saved!"));
      resolve(`${file} was successfully saved in the outbox!`);
   })
 })
}

async function finalResult(){
  let files = await leerDirectorio(inbox);
    //for (i=0; i< files.length; i++) {
      files.forEach(async file => {
      let data = await leerArchivo(files[i]);
      let finalResult = await escribirArchivo(data);
      console.log(finalResult)
    })
  }
