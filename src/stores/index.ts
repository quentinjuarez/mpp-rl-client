import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight,
    user: null,
  }),
  getters: {},
  actions: {},
  persist: {
    key: `mpp-rl-store`
  },
  share: {
    enable: false
  }
})
