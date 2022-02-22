const { Console } = require("console");
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

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

// Read and reverse contents of text files in a directory
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

readdir(inbox) //,(error, files)
    .then(files => files.forEach(file => readFile(join(inbox, file), "utf8")
        .then(file => writeFile(join(outbox, file), reverseText(data)))
        .catch(console.log("Error: File error"))
        .then(console.log(`${file} was successfully saved in the outbox!`))
        .catch(console.log("Error: File could not be saved!"))
    )
    )
    .catch(console.log("Error: Folder inaccessible"))

/* readdir(inbox, (error, files))
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
    }); */

/* readdir(inbox)
.then(files => files) //readir
.catch(error => console.log("Error: Folder inaccessible"))
.then(files => files.forEach(file => {readFile(join(inbox, file), "utf8", (error, data))})) //readFile
.catch(error => console.log("Error: File error"))
.then(file => writeFile(join(outbox, file), reverseText(data), error => console.log(`${file} was successfully saved in the outbox!`))) //writeFile
.catch(error => console.log("Error: File could not be saved!")) */



