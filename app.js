const logger = require("./logger"); //esto definido como una constante no va a permitir que se cambie dentro de la app.
const fs = require("fs");

//Tareas

//1-2 Create a method to get all the files inside given path and show
function getAllFilesInsidePath(path) {
    let files = fs.readdirSync(path);
    return files;
}

let files = getAllFilesInsidePath("./");
console.log("\nActividad 1 y 2: ")
logger.log("Archivos: ", files);


//3- Create a method to sort and print all files.
function reverseSort(filesList){
    let files = filesList.reverse();
    logger.log("Archivos ordenados de forma inversa: ", files);
}
console.log("\nActividad 3: ")
reverseSort(files);

//4 - Create a method to get the amount of files starting with one letter
function getAmountFilesStartingWith(letter, path){
    let files = getAllFilesInsidePath(path);
    let count = 0;
    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        if(element.startsWith(letter)){
            count ++;
        }
        
    }

    return count
}

let cantidad = getAmountFilesStartingWith("a", "./");
console.log("\nActividad 4: ");
logger.log("Cantidad: ", cantidad);






