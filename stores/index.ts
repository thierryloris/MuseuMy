import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  persist: true,
  getters: {
    favourite: (state) => state.counter
  },
  actions: {
    increment() {
      this.counter++;
    }
  },
})