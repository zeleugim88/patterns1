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



// => IMPLEMENTACIÓN SOLUCIÓN 5: Native Support for Promises in Node.js for File System module
// fs/promises API provides asynchronous file system methods that return promises
const {
  readdir,
  readFile,
  writeFile
} = require("fs").promises; // => con ".promises" se importan los métodos de File System pero asíncronos

//import { readdir, readFile, writeFile } from 'fs/promises';


const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");


//Como todo es asíncrono, se pueden resolver las promesas encadenándolas con el método .then()
readdir(inbox)
  .then(files => files.forEach(file =>
    readFile(join(inbox, file), 'utf8')
      .catch(() => console.log('Error: File error'))
      .then(data => writeFile(join(outbox, file), reverseText(data)))
      .catch(() => console.log('Error: File could not be saved!'))
      .then(() => console.log(`${file} was successfully saved in the outbox!`))
  ))
  .catch(() => console.log('Error: Folder inaccessible'))
