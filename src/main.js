import './style.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {store} from "./store/index";
import {utils} from './utils/index.js'
import {Locale} from 'vant';
import zhCN from 'vant/es/locale/lang/zh-CN'
import {io} from "socket.io-client";

Locale.use('zh-CN', zhCN) // 中文

const {vantFun} = utils

const app = createApp(App);

window.$vanTFun = vantFun
window.$socket = io()

window.$socket.emit('event', […args])({flag: 'echo-test', msg: '你好'})

app.use(store.pinia).use(router).mount('#app')
