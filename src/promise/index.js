const promesa = new Promise(function(resolve,reject){
    resolve("Hey! Todo a sido correcto");
});

//
const cows = 4;

const countCows = new Promise(function(resolve,reject){
    if(cows > 10){
        resolve(`Tenemos ${cows} vacas, podemos producir`);
    }else{
        reject(`No contamos la cantidad necesarias de vacas necesarias para la producción.`);
    }
});


countCows.then((result)=>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log("Fin de la ejecución");
});

