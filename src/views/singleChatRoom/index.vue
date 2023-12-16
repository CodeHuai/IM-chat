<script setup>
import skeleton from '../../components/skeleton/index.vue'
import LoadingOverlay from "../../components/loadingOverlay/index.vue";
</script>

<template>
  <div class="single-chat-room-container">
    <LoadingOverlay></LoadingOverlay>
    <!--   骨架屏   -->
    <skeleton>
      <div :style="{ display: 'flex', width: '100%' }">
        <van-skeleton-image />
        <div :style="{ flex: 1, marginLeft: '16px' }">
          <van-skeleton-paragraph />
          <van-skeleton-paragraph />
        </div>
      </div>
    </skeleton>

    <!--  有消息或者用户展示  -->
    <van-index-bar>
      <van-index-anchor index="A"/>
    </van-index-bar>

    <!--  空白屏  -->
    <van-empty image-size="100" description="暂无数据" />
  </div>
</template>

<style scoped lang="less">
.single-chat-room-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>