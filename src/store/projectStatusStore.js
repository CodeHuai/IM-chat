import {defineStore} from "pinia";

export const useProjectStatusStore = defineStore('projectStatus', {
  state: () => {
    return {
      loadingStatus: false,
      loadingColor: '#1989fa',
      theme: 'light' // light || dark
    }
  },
  getters: {
    getLoadingStatus(state){
      return state.loadingStatus
    },
    getLoadingColor(state){
      return state.loadingColor
    },
    getTheme(state){
      return state.theme
    }
  },
  actions: {
    setLoadingStatus(status) {
      this.loadingStatus = status
    },
    setLoadingColor(value){
      this.loadingColor = value
    },
    setTheme(value){
      this.theme = value
    }
  }
})