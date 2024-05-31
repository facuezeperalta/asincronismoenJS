const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // referencia al recuerso que implementamos
const API = 'https://api.escuelajs.co/api/v1' ;//las mayusculas es una valor que no va a cambiar. en esa dirección hacemos referencia al root de la API.


//esta forma se usaba al comienzo de JS, es compatible con todos los navegadores.
function fetchData(urlApi, callback){
    // contruimos el llamado de http, Instanciando a XMLHttpRequest que creamos arriba.

   let xhtpp = new XMLHttpRequest();
   xhtpp.open('GET',urlApi,true);
   xhtpp.onreadystatechange = function(event){
    if(xhtpp.readyState === 4){
        if(xhtpp.status === 200){
            callback(null,JSON.parse(xhtpp.responseText)); //JSON.parse(objeto a convertir) realiza la conversión a objeto JSON a los que viene como texto desde el servidor.
            
        }else{
            const error = new Error('Error' + urlApi);
            return callback(error,null);
        }
    }
   }
 xhtpp.send();
}


//llamado de funcion y paso de callback. Para buscar los objetos y sus propiedades.
fetchData(`${API}/products`, function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        }) // con el ? hacemos que optcional esa respuesta si en el caso de no encontrarla el programa continua sin arrojar error.
    })
});  //llamamos a API/products para obtener la lista completa de productos que está dentro de esta API