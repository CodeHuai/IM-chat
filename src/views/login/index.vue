<script setup>
import {nextTick, onMounted, reactive} from 'vue'
import {useRouter} from 'vue-router'
import {getHeaderPic, getName} from '../../api/index.js'
import LoadingOverlay from "../../components/loadingOverlay/index.vue";
import {store} from '../../store/index'

const router = useRouter()
const useUserInfoStore = store.useUserInfoStore()

const state = reactive({
  imgSrc: null,
  userName: null,
  userId: null
})

const submit = () => {
  nextTick(() => {
    useUserInfoStore.setUserInfo(state)
    router.push({name: 'chatRoom'})

    // 建立socket 链接
  })
}

const fetchHeaderPic = async () => {
  try {
    const {data} = await getHeaderPic()
    state.imgSrc = data.data
  } catch (err){
    state.imgSrc = null
  }

}

const fetchName = async () => {
  try {
    const {data: {xingming, id}} = await getName()
    state.userName = xingming
    state.userId = id
  } catch (err){
    state.userName = null
    state.userId = null
  }
}

onMounted(() => {
  fetchHeaderPic()
  fetchName()
})
</script>

<template>
  <LoadingOverlay></LoadingOverlay>
  <div class="login-container">
    <div class="img-box">
      <van-image
          round
          width="100"
          height="100"
          :src="state.imgSrc"
      />
    </div>
    <div class="name-box">
      <van-cell-group>
        <van-field v-model="state.userName" label="用户名" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
    <van-button type="primary" block color="linear-gradient(to right, #ff6034, #ee0a24)" @click="submit">登录</van-button>
  </div>
</template>

<style lang="less" scoped>
.login-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;

  .img-box{
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .name-box{
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
