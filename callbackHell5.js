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
          if (error) return (console.log("Error: Folder inaccessible")); //reject
          return(files) //resolve
    });
   })
  }
  
   function leerArchivo(file) {
    return new Promise((resolve, reject) => {
      readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) reject(console.log("Error: File error"));
      resolve(data)
    });
   })
  }
  
   function escribirArchivo(data) {
     return new Promise((resolve, reject) => {
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) reject(console.log("Error: File could not be saved!"));
        resolve(file);
     })
   })
  }
  
/*   leerDirectorio(inbox)
  .catch((err) => console.log(("Error: Folder inaccessible")))
  .then(files => files.forEach(file => leerArchivo(file))
    .catch((err) => console.log("Error: File error"))
    .then(data => {console.log("2"); return escribirArchivo(data)})
    .catch((err) => console.log("Error: File could not be saved!"))
    .then(file => console.log(`${file} was successfully saved in the outbox!`))
  ) */



  //TEST READDIR______________________________________________________________________________________________________________________
 /*  let jitu = readdir(inbox, (error, files) => {
    if (error) return (console.log("Error: Folder inaccessible"));
    files.forEach(file => {console.log(file)});
  }) */
  

 /*  let jitu = readdir(inbox, (error, files) => {
    if (error) return (console.log("Error: Folder inaccessible"));
    console.log(files);
  }) */
    

  let ejemplo;
console.log(
  readdir(inbox, (error, files) => {
    if (error) return (console.log("Error: Folder inaccessible"));
    return files;
  })
  );
  
console.log(ejemplo);


// TEST READFILE ___________________________________________________________________________________________________________________________
 /*  let yeah = readFile(join(inbox, "jitu.txt"), "utf8", (error, data) => {
    if (error) reject(console.log("Error: File error"));
    return console.log(data);
  }) */
    
// TEST WRITEFILE ___________________________________________________________________________________________________________________________
/* writeFile(join(outbox, "jitu.txt"), reverseText("abcd"), error => {
  if (error) return console.log("Error: File could not be saved!");
  return console.log("Exito");
})
 */
/* readdir(inbox).
then(x => console.log(x)); */


 /* readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) return console.log("Error: File error")
        return console.log(data)}); */