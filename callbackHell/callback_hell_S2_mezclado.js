//Callback Hell: encadenar muchas operaciones asíncronas seguidas
//Source: https://www.paradigmadigital.com/dev/historia-del-callback-hell-en-node-js/

//Solución 1: librerías para controlar el flujo (sin usar promesas).
// 1a) Librería "Async", con su método Waterfall. 
// 1b) Librería "Q"
// 1c) Librería "Promisify"
//Solución 2: promesas de forma nativa en node.js: return new Promise ((resolve, reject) => {...})
//Solución 3: palabra reservada yield + funciones generadoras + librería Co
//Solución 4: async / await
//Solución 5: Native Support for Promises in Node.js for File System module

//IMPLEMENTACIÓN SOLUCIÓN 2: promesas de forma nativa en node.js: return new Promise ((resolve, reject) => {...})
//Hay que crear unas funciones (wrappers) que devuelvan las promesas

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

const reverseText = str => str.split("").reverse().join("");

function leerDirectorio(inbox) {
  return new Promise((resolve, reject) => {
    readdir(inbox, (error, files) => {
      if (error) reject(new Error("Error: Folder inaccessible"));
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

async function resultadoFinal() {
  const files = await leerDirectorio(inbox);
  //for (i=0; i< files.length; i++) {
  files.forEach(async file => {
    let data = await leerArchivo(file);
    await escribirArchivo(file, data);
  })
}

resultadoFinal();


