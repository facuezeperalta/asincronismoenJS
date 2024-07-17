const API = 'https://api.escuelajs.co/api/v1';

//post data, agregar información a la API

function postData(api,data){
    const response = fetch(api,{
        method: 'POST',
        mode:'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Nizon Z6 III",
    "price": 2800,
    "description": "Full frame Mirrorless camera",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`,data)
  .then(response => response.json())
  .then(data => console.log(data));
