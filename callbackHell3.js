const { Console } = require("console");
const {
    readdir,
    readFile,
    writeFile
} = require("fs");

//OPTIONS:
//1 => const { promisify } = require("util");
//2 => q LIBRARY
//3 => async library    
//para promisificar los métodos de los módulos de nodejs?????

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

const uno = readdir(inbox, (error, files) => {
    return new Promise((resolve, reject) => {
        if (error) return reject(console.log("Error: Folder inaccessible"))
      return resolve(files)
    })
})

const dos = readFile(join(inbox, file), "utf8", (error, data) => {
    return new Promise((resolve, reject) => {
        if (error)  reject(console.log("Error: File error"));
         resolve(file);
    })
});

const tres = writeFile(join(outbox, file), reverseText(data), error => {
     new Promise((resolve, reject) => {
        if (error) reject(console.log("Error: File could not be saved!"));
         resolve("Todo bien")
    })
})    



/* uno(inbox)
.then(file => console.log("JITU:"+dos(outbox, file))) */