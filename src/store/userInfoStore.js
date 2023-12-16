import {defineStore} from "pinia";

export const useUserInfoStore = defineStore('userInfo', {
  state() {
    return {
      userInfo: JSON.parse(localStorage.getItem('_USERINFO')) || null,
      tabbarList: [
        {name: '聊天大厅', icon: 'fire-o', key: 'chatRoom', isShow: true, pageRoute: '/layout/chatRoom'},
        {name: '小黑屋', icon: 'comment-o', key: 'singleChatRoom', isShow: true, pageRoute: '/layout/singleChatRoom'},
        {name: '设置', icon: 'setting-o', key: 'setting', isShow: true, pageRoute: '/layout/setting'},
      ],
      startTabbar: 'chatRoom'
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    },
    getTabbarList(state){
      return state.tabbarList
    },
    getStartTabbar(state){
      return state.startTabbar
    }
  },
  actions: {
    setUserInfo(value) {
      this.userInfo = value
      localStorage.setItem('_USERINFO', JSON.stringify(value))
    },
    setTabbarList(value){
      this.tabbarList = value
    },
    setStartTabbar(value){
      this.startTabbar = value
    }
  }
})