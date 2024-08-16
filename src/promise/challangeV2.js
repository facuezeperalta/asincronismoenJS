import fetch  from "node-fetch"; //importamos a fetch desde "node-fetch" para poder ejecutar las consultas.
const API_PLATZI = "https://api.escuelajs.co/api/v1"; //API que vamos a usar para hacer los llamados.

function fetchData(urlApi){
    return fetch(urlApi);
};

/* fetchData(`${API_PLATZI}/products`)
    .then(response => response.json())
    .then(products =>{
        console.log(products);
    })
    .then(()=>{
        console.log("Holaaaa")
    }).catch(error => console.log(error))
    .finally(console.log("---Fin---")); */
    

fetchData(`${API_PLATZI}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API_PLATZI}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API_PLATZI}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("fin de la solicitud"));
