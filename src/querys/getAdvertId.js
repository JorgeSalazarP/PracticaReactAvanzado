import { getAdverts } from "../api/adverts";

export const getAdvertId = (id) => {
    
    return getAdverts.find(advert=> advert.id === id);

  
}
 
