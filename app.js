const logger = require("./logger"); //esto definido como una constante no va a permitir que se cambie dentro de la app.
const path = require('path');
const os  = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);
logger.log(pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('free mem: ',freeMem);
logger.log("Total mem: ",totalMem);

let rootDir = fs.readdirSync('./');
logger.log("root: ", rootDir);

fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log(files);
})

console.log(rootDir);
