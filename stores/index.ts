import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    favourites: <any>[]
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    AllFavourites: (state) => state.favourites
  },
  actions: {
    addFavourite(favourite: any) {
      if(!this.AllFavourites.find((element: any) => element.id === favourite.id)) {
        this.favourites.push(favourite);
      }
    }
  },
})