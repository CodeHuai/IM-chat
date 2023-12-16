<script setup>
import {computed, defineEmits, nextTick, onMounted, reactive} from 'vue';
import {useRouter, useRoute} from 'vue-router'
import {store} from "../../store/index";

const router = useRouter()
const route = useRoute()
const emits = defineEmits(['echoHeight'])
const useUserInfoStore = store.useUserInfoStore()

const tabChange = (name) => {
  const one = state.tabbarList.find(el => el.key === name)
  useUserInfoStore.setStartTabbar(one.key)
  router.push({name})
}

const state = reactive({
  active: computed({
    set(value) {
      tabChange(value)
    },
    get() {
      return useUserInfoStore.getStartTabbar
    }
  }),
  tabbarList: computed(() => useUserInfoStore.getTabbarList) || []
})

onMounted(() => {
  //   处理刷新页面时，动态设置 useUserInfoStore 中的startTabbar
  const key = route.meta.key
  state.active = key
  // 获取tabbar的高度
  const navbarHeight = document.querySelector('.van-tabbar ').offsetHeight
  emits('echoHeight', {name: 'bottomPadding', value: navbarHeight})
})
</script>

<template>
  <van-tabbar v-model="state.active" fixed border safe-area-inset-bottom z-index="1000">
    <van-tabbar-item
        v-for="item in state.tabbarList"
        :key="item.key"
        :name="item.key"
        :icon="item.icon"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less" scoped></style>
