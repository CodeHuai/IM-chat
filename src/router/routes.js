const routes = [
  {
    path: "/",
    redirect: '/login',
  },
  {
    name: 'login',
    path: '/login',
    component: () => import("../views/login/index.vue"),
  },
  {
    name: 'layout',
    path: '/layout',
    component: () => import("../layout/index.vue"),
    children: [
      {
        name: 'chatRoom',
        path: 'chatRoom',
        component: () => import("../views/chatRoom/index.vue"),
        meta: {
          name: '聊天大厅',
          key: 'chatRoom'
        }
      },
      {
        name: 'singleChatRoom',
        path: 'singleChatRoom',
        component: () => import("../views/singleChatRoom/index.vue"),
        meta: {
          name: '小黑屋',
          key: 'singleChatRoom'
        }
      },
      {
        name: 'setting',
        path: 'setting',
        component: () => import("../views/setting/index.vue"),
        meta: {
          name: '设置',
          key: 'setting'
        }
      }
    ]
  }
]

export default routes