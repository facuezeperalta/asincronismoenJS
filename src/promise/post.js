//guardamos datos en la API
import fetch from "node-fetch";

const API_PLATZI = 'https://api.escuelajs.co/api/v1';

function postData(urlApi,data){
    const response = fetch(urlApi, {
        method: 'POST', //metodo a enviar 
        mode: 'cors', //cors ver curso.
        credentials: 'same-origin',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON .stringify(data),
    });
    return response;
}

const data_camera ={
    "title": "Nikon Z8",
    "price": 3500,
    "description": "A full frame camera by Nikon",
    "categoryId": 1,
    "images": ["https://www.sagitariodigital.com.ar/wp-content/uploads/2023/08/z8.jpg"]
  }


postData(`${API_PLATZI}/products`,data_camera)
  .then(response => response.json())
  .then(data => console.log(data)) //mostramos la información.

  