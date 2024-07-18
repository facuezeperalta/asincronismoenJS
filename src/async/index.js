// creo una promesa para pasarla al async
const fnAsync = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(()=> resolve('acá va el Async'),2000)
        : reject(new Error("Errro..."));
    });
}

//ahora usamos el async en una función.

const antoherFunction = async () =>{
    const esperando = await fnAsync(); //acá nos regresa una promesa y el await la manda a cola para esperar
    console.log(esperando);
    console.log("Terminó la espera, Hello!!!")
}


console.log("---Before Call Async---");
antoherFunction();
console.log("---After Async---");
