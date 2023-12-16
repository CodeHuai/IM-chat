<script setup>
import NavBar from '../components/navbar/index.vue';
import Tabbar from '../components/tabbar/index.vue';
import LoadingOverlay from '../components/loadingOverlay/index.vue'
import {computed, reactive, ref} from "vue";
import {store} from '../store/index'

const useProjectStatusStore = store.useProjectStatusStore()
const theme = computed(() => useProjectStatusStore.getTheme)

const state = reactive({
  heightInstance: 0,
  bottomPadding: 0
})

const echoHeight = ({name, value}) => {
  state[name] = value
}
</script>

<template>
  <div class="main-container"
       :style="{'padding-top': `${state.heightInstance}px`, 'padding-bottom': `${state.bottomPadding}px`}">
    <van-config-provider :theme="theme">
      <!--头部-->
      <NavBar @echo-height="echoHeight"></NavBar>
      <LoadingOverlay></LoadingOverlay>
      <!--主体-->
      <router-view></router-view>
      <!--底部-->
      <Tabbar @echo-height="echoHeight"></Tabbar>
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  //height: 100%;
}
</style>
