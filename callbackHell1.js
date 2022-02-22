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

/* readdir(inbox, (error, files) => {
    return new Promise((resolve, reject) => {
        if (error) reject(console.log("Error: Folder inaccessible"));
        resolve(console.log(files))
    })
})
.then(files => files.forEach(file => readFile(join(inbox,file),"utf8")
    .then(writeFile(join(outbox, file), reverseText(data), error))
    .catch(console.log("error1"))
    .then(console.log(`${file} was successfully saved in the outbox!`))
    .catch(console.log("Error: File could not be saved!"))
))
.catch(console.log("Error: Folder inaccessible")) */
    
/*     files.forEach(file => {
        readFile(join(inbox, file), "utf8", (error, data) => {
            if (error) return console.log("Error: File error");
            writeFile(join(outbox, file), reverseText(data), error => {
                if (error) return console.log("Error: File could not be saved!");
                console.log(`${file} was successfully saved in the outbox!`);
            });
        });
    });
}); */

/* fastFunction((err, data) => {
    if (err) return callback(err)
    console.log(data)   // results of a
  
    slowFunction((err, data) => {
      if (err) return callback(err)
      console.log(data) // results of b

////////////////////
      function fastFunction () {
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            console.log('Fast function done')
            resolve()
          }, 100)
        })
      } */


/* readdir(inbox, (error,files) => {
    if (error) return console.log("Error: Folder inaccessible");
    files.forEach(file => file)
    .then(x => console.log("yeah") )
}) */


 
/* readdir(inbox, (err, x) => x)
.then(files => console.log(files.forEach(file => readFile(join(inbox,file),"utf8"))
.catch(console.log("error1"))
))  */

/* readdir(inbox, (err, files))
    .then(files => files.forEach(file => readFile(join(inbox, file), "utf8")
        .then(file => writeFile(join(outbox, file), reverseText(data)))
        .catch(console.log("Error: File error"))
        .then(console.log(`${file} was successfully saved in the outbox!`))
        .catch(console.log("Error: File could not be saved!"))
    )
    )
    .catch(console.log("Error: Folder inaccessible")) 
 */
/*      
readdir(inbox, (files, error))
    .then(files => {
        if (!files.ok) {
            throw new Error("Error: Folder inaccessible");
        }
        return files.forEach(file => {
            readFile(join(inbox, file), "utf8", (error, data))
        })
    })
    .then(file => {
        if (!file.ok) {
            throw new Error("Error: File error");
        }
        return writeFile(join(outbox, file), reverseText(data), error)
    })    
    .then(file => {
        if (!file.ok) {
            throw new Error("Error: File could not be saved!");
        }
        return console.log(`${file} was successfully saved in the outbox!`)
    });  */

/* readdir(inbox, (err, files) => files.forEach(file => file)
    .then(file => {readFile(join(inbox, file), "utf8", (err, data) => {(data, file)})})
    .catch(err => console.log("Error: File error"))
    .then((data, file) => writeFile(join(outbox, file), reverseText(data), err))
    .catch(err => console.log("Error: File could not be saved!"))
) */
//.catch(err => console.log("Error: Folder inaccessible"))

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



