import { getAdverts } from "../api/adverts";

const getAdvertId = (id) => {
    

    return getAdverts.find(advert=> getAdverts.id === id);
}
 
export default getAdvertId;