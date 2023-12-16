<script setup>
import {computed} from "vue";
import {store} from  '../../store/index'

const useProjectStatusStore = store.useProjectStatusStore()
const loadingStatus = computed(() => useProjectStatusStore.getLoadingStatus)
const loadingColor = computed(() => useProjectStatusStore.getLoadingColor)
</script>

<template>
  <van-overlay :show="loadingStatus">
    <div class="loading-container">
      <van-loading type="spinner" :color="loadingColor" vertical>加载中...</van-loading>
    </div>
  </van-overlay>
</template>

<style scoped lang="less">
.loading-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>