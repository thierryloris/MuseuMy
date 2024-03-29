import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    favourites: <any>[]
  }),
  persist: true,
  getters: {
    favourite: (state) => state.favourites
  },
  actions: {
    addFavourite(favourite: any) {
      if(!this.favourite.find((element: any) => element.id === favourite.id)) {
        this.favourites.push(favourite);
      }
    }
  },
})