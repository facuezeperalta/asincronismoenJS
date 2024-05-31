const promise = new Promise(function(resolve,reject){
    resolve('Hey!')
})

const cows = 29;

const countCows = new Promise(function(resolve,reject){
    if(cows > 10){
        return resolve(`We have ${cows}, on the farm`)
    }else{
        reject(`there´s not cows on the farm`)
    }
});

countCows.then((result) => {console.log(result)}).catch((error) => { //con catch podemos capturar el error para evitar que se trabe todo el programa por consola.

    console.log(error);
}).finally(()=>{ // finally se coloca al final para indicar que se acabo la tarea de la promesa.
    console.log('---Finally---')
});