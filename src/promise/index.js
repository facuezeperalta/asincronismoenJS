/* const promesa = new Promise(function(resolve,reject){
    resolve("Hey!");
}); */

const cows = 20;

const countCows = new Promise(function(resolve,reject){
    if(cows > 10){
        resolve("Cantidad de vacas suficiente para la producción");
    } else{
        reject(`${cows} vacas, la cantidad no es suficiente para la produccion`);
    }
});


countCows.then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(()=>{
    console.log("terminado")
})