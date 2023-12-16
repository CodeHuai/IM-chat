<script setup>
import {computed, onMounted, defineEmits} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const emits = defineEmits(['echoHeight'])
const title = computed(() => route.meta.name || '聊天大厅')

onMounted(() => {
  const navbarHeight = document.querySelector('.van-nav-bar__content').offsetHeight
  emits('echoHeight', {name: 'heightInstance', value: navbarHeight} )
})
</script>

<template>
  <van-nav-bar fixed safe-area-inset-top z-index="1000" :title="title" />
</template>

<style lang="less" scoped>
</style>
