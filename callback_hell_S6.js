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
//Solución 6: Encadenando funciones, sin promificar