const API = 'https://api.escuelajs.co/api/v1';

// funcion que recibe la URL de la API y me retorna el llamado de fetch.
function fecthData(urlApi){
    return fetch(urlApi);
}

// aca hacemos el llamado y traemos todo. 
/* 
fecthData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(()=> console.log("Hola..."))
    .catch(error => console.log(error));
 */

// ahora lo haremos con multiples llamadas, pero no con callbacks sino con .then()
fecthData(`${API}/products`)
    .then(response => response.json()) //con esto obtengo los productos.
    .then(products => {
        console.log(products + "---------------------------")
        return fecthData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fecthData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json()) //transformo la respuesta de la petición anterior con json para poderla leer.
    .then(category =>{
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("---Fin de le ejecución de la llamada---"));


