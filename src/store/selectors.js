export const getIsLogged = state => state.logged;

export const getAdverts = state =>
  state.adverts.data.sort((t1, t2) => {
    if (t1.updatedAt < t2.updatedAt) return 1;
    return -1;
  });

 

export const getAdvertsLoaded = state => state.adverts.loaded;

export const getSelectedAdvert = state=> state.adverts.detailAdvert;

export const getTagsAPI = state=> state.adverts.tagsAPI;
export const getUi = state => state.ui;
