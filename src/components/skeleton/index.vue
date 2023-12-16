<script setup>

</script>

<template>
  <van-skeleton style="margin: 10px 0;">
    <template #template>
      <slot>
        <div :style="{ display: 'flex', width: '100%' }">
          <van-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </div>
      </slot>
    </template>
  </van-skeleton>
</template>

<style scoped lang="less">

</style>