const XMLHttpRequest = requiere('xmlhttprequest'); // referencia al recuerso que implementamos
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
        }
    }else{
        const error = new Error('Error' + urlApi);
        return callback(error,null);
    }
   }
 xhtpp.send();
}
