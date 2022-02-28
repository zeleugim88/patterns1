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


// => IMPLEMENTACIÓN SOLUCIÓN 1c: Librería Promisify
// Se promisifican los métodos readdir, readFile y writeFile

const { Console } = require("console");
const {
    readdir,
    readFile,
    writeFile
} = require("fs");

const promisify = require('util').promisify; // Importar método .promisify del módulo "util"

const {
    join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

// Read and reverse contents of text files in a directory

/* readdir(inbox, (error, files)); */

//Promisify File System methods with promisify () function, that converts callback -based functions to promise -based functions.
const readdirX = promisify(readdir);
const readFileX = promisify(readFile);
const writeFileX = promisify(writeFile);

//Como todo es asíncrono, se pueden resolver las promesas encadenandolas con el método .then()
readdirX(inbox)
    .then(files => files.forEach(file =>
        readFileX(join(inbox, file), 'utf8')
            .catch(() => console.log('Error: File error'))
            .then(data => writeFileX(join(outbox, file), reverseText(data)))
            .catch(() => console.log('Error: File could not be saved!'))
            .then(() => console.log(`${file} was successfully saved in the outbox!`))
    ))
    .catch(() => console.log('Error: Folder inaccessible'))