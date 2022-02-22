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
const promisify = require('util').promisify;

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

const readdirX = promisify(readdir);
const readFileX = promisify(readFile);
const writeFileX = promisify(writeFile);

readdirX(inbox)
    .then(files => files.forEach(file => readFileX(join(inbox, file), "utf8")
        .then(data => writeFileX(join(outbox, file), reverseText(data)))
        .catch(console.log("Error: File error"))
        .then(file => console.log(`${file} was successfully saved in the outbox!`))
        .catch(console.log("Error: File could not be saved!")) 
    ))
    .catch(console.log("yeah"))


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