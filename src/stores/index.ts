import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight
  }),
  getters: {},
  actions: {
   
  },
  persist: {
    key: `my-store`
  },
  share: {
    enable: false
  }
})
