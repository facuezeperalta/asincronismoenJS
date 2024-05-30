function sum(number1,number2){
    return number1 + number2;
}


// esta funcion recibe un callback, callback es solo un nombre de referencia al argumento, no hace falta que se llame así
function calc(num1,num2,callback){
    return callback(num1,num2);
};

console.log(calc(2,2,sum)); //aca hago callback

//otro ejemplo con setTimeOut.

setTimeout(function (){
    console.log("Hola javaScript")
},2000)


function greetting(name){ //name seria el callback,
    console.log(`Hola ${name}`)
}

setTimeout(greetting,2000,'facu')



export function execCallback(callback) {
    // Tu código aquí 👈
  }