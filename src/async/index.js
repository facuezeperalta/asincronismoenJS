    const fnAsync = () =>{
        return new Promise((resolve,reject) => {
            (true) ? setTimeout(() => resolve("Async!"),2000) 
            : reject (new Error('Error!'));
        });
    }

    const  anotherFunction = async() => {
        const something = await fnAsync();
        console.log(something);
        console.log("Hello!!!");
    }

    console.log("before call the function");
    anotherFunction();
    console.log("After call the function");
