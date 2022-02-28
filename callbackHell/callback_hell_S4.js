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

// => IMPLEMENTACIÓN SOLUCIÓN 4: async / await
//readdir, readFile, writeFile son métodos ASÍNCRONOS del módulo File System.
//Los métodos síncronos serían readdirSync, readFileSync, writeFileSync...
//Como estos métodos asíncronos, la función wrapper devuelve el resultado antes de que finalice su ejecucción.
//Por ello, no vale de nada envolver estos métodos directamente en una función wrapper. 
//

const {
  readdir,
  readFile,
  writeFile,
  promises,
} = require("fs");


const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");


const wrapperFunction = async () => {
  try {
    const files = await promises.readdir(inbox); 
      for(let i = 0; i < files.length; i++) {
        let data = await promises.readFile(join(inbox,files[i]),"utf8");
        await promises.writeFile(join(outbox, files[i]), reverseText(data));
        console.log(`${files[i]} was successfully saved in the outbox!`);
      }
  }
  catch (err) {
    console.log(err);
  }
}

wrapperFunction();


//Esto no funcionaría debido a la asincronía de los métodos de FileSystem

/* async function leerDirectorio(inbox) {
  let solution = "";
  readdir(inbox, (error, files) => {
      if (error) return(new Error("Error: Folder inaccessible"));
      solution = files; 
    });
    return solution
} */

/* async function leerArchivo(file) {
  let jitu = "pepito";
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return (console.log("Error: File error"));
      jitu = "data";
      console.log("DATA:"+data)
    });
    return jitu;//data
} */

/* async function escribirArchivo(file, data) {
    writeFile(join(outbox, file), reverseText(data), error => {
      if (error) return (new Error("Error: File could not be saved!"));
      console.log(`${file} was successfully saved in the outbox!`);
    })

} */

/* async function resultadoFinal() {
  const files = await leerDirectorio(inbox);
  files.forEach(async file => {
    let data = await leerArchivo(file);
    await escribirArchivo(file, data);
  })
} */
