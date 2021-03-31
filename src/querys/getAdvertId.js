import { getAdverts } from "../api/adverts";

const getAdvertId = (id) => {
    
    return getAdverts.find(advert=> advert.id === id);

  
}
 
export default getAdvertId;