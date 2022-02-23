const {
    readdir,
    readFile,
    writeFile
  } = require("fs").promises;
  
  
  const {
    join
  } = require("path");
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  
  const reverseText = str =>  str  .split("")  .reverse()  .join("");
  
  
 /*  readdir(inbox, (error, files) => {
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
  });
 */

/* const leerDirectorio = readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible");
    return files
});

const leerArchivo = readFile(join(inbox, file), "utf8", (error, data) => {
    if (error) return console.log("Error: File error");
    return file
});

const escribirArchivo = writeFile(join(outbox, file), reverseText(data), error => {
    if (error) return console.log("Error: File could not be saved!");
});
 */

readdir(inbox)
    .then(files => files.forEach(file =>
        readFile(join(inbox, file), 'utf8')
            .catch(() => console.log('Error: File error'))
            .then(data => writeFile(join(outbox, file), reverseText(data)))
            .catch(() => console.log('Error: File could not be saved!'))
            .then(() => console.log(`${file} was successfully saved in the outbox!`))
    ))
    .catch (() => console.log('Error: Folder inaccessible'))
