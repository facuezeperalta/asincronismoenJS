import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi); //uso la funcion await para esperar el retorno de los datos.
    const data = await response.json(); //mismo caso acá.
    return data;
}

const anotherFunction = async(urlApi) =>{
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }catch(error){
        console.error(error);
    }
}


anotherFunction(API);