//callbacks 
function sum(num1,num2){
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}

console.log(calc(5,5,sum));

//otro callback, set timeOut en si misma es un call back
setTimeout(function(){
    console.log("Hola!!!")
},9000)


function greeting(name){
    console.log(`Hola! ${name}`);
}

setTimeout(greeting,3000,'Facu');