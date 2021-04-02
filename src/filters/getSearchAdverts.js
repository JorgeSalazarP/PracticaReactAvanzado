import { getAdverts } from "../api/adverts";

export const getSearchAdverts = (infoSearch ='') => {

    if(infoSearch === ''){
        return [];
    }

    infoSearch = infoSearch.toLocaleLowerCase();
    return getAdverts.filter(advert => advert.name.toLocaleLowerCase().includes(infoSearch));

}