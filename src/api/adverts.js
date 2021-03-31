import client from './client';

// const advertsBaseURL = '/api';
// export const getAdverts = () =>{

    
//         const url = `${advertsBaseURL}/`;
//         return client.get(url);
      
// }


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