const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi,data){
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',
        headers: {
            'Content-type': 'apli'
        } 
    })
}