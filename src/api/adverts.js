import client from './client';
const BASE_URL = '/api';


// export const getAdverts = () =>{
//     const url = `${advertsBaseURL}/adverts`;
//     return client.get(url);
      
// // }

export const login = credentials =>{

  return client.post(`${BASE_URL}/auth/login`,credentials);

}


export const getAdverts = [
        {
            "id": '1',
            "name": "TELE",
            "sale": true, 
            "price": 50,
            "tags": [
                "lifestyle"
              ],
              "photo": null
        },
        {
                "id": '2',
                "name": "BICI",
                "sale": false, 
                "price": 25,
                "tags": [
                    "motor"
                  ],
                  "photo": null
        },
        {
                "id": '3',
                "name": "CAMISETA",
                "sale": false, 
                "price": 33,
                "tags": [
                    "motor"
                  ],
                  "lifestyle": null
        },
        {
                "id": '4',
                "name": "CORBATA",
                "sale": false, 
                "price": 5,
                "tags": [
                    "work"
                  ],
                  "lifestyle": null
        },
        
    ]