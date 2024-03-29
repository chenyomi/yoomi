<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <Header :fn="toggleVerticalOverlayNavActive" :matched="matched" :list="btnList" />
    </template>

    <template #vertical-nav-content>
      <LeftMenu />
    </template>

    <template #after-vertical-nav-items>
      <!-- 👉 illustration -->
      <LeftMenuBox />
    </template>
    <div class="d-flex gap-3 h-100 w-100 slot-box">
      <div class="h-100 w-100" style="overflow: hidden;border-radius: 0.5rem;">
        <RouterView v-if="view" />
      </div>


      <VSlideXReverseTransition hide-on-leave>
        <VCard v-if="subNavList.length" style="overflow-y: scroll;">
          <div v-for="(item, i) in subNavList" :key="item">
            <VBtn variant="text" rounded="0" block height="50" width="70" style="padding: 0;"
              :to="item.meta.disabled ? null : `${subMain}/${item.path}`"
              :color="route.path == `${subMain}/${item.path}` ? 'primary' : ''">
              {{ $t(item.meta.name) }}
            </VBtn>
            <div v-if="i < subNavList.length - 1" style="text-align: center;">
              <VIcon :icon="item.meta.childrenTabIcon" size="15" />
            </div>
          </div>
        </VCard>
      </VSlideXReverseTransition>
    </div>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <template #setting>
      <Setting />
    </template>
  </VerticalNavLayout>
  <Message ref="message" />
</template>

<script setup>
import VerticalNavLayout from "@layouts/components/VerticalNavLayout.vue"

// Components
import dictApi from '@/api/dict'
import Footer from "@/layouts/components/Footer.vue"
import Header from "@/layouts/components/Header.vue"
import LeftMenu from "@/layouts/components/LeftMenu.vue"
import LeftMenuBox from "@/layouts/components/LeftMenuBox.vue"
import Message from "@/layouts/components/Message.vue"
import Setting from "@/layouts/components/Setting.vue"
import { useStore } from "@/pinia/index"
import { mq } from "@/utils/mq"
import { computed, provide, ref } from "vue"
import { useRoute } from "vue-router"
import { useDisplay, useLocale } from 'vuetify'


const store = useStore()
const { view } = storeToRefs(store)

const { lgAndDown } = useDisplay()
let route = useRoute()
const btnList = ref([])
const density = lgAndDown.value ? 'compact' : 'comfortable'
const message = ref()
const { t } = useLocale()

const matched = computed(() => {
  const b = []


  route.matched.forEach((e, i) => {
    i !== 0 && b.push({ title: t(e.meta.name) })
  })

  return b
})

const subNavList = computed(() => {
  return route.matched[1].children
})

const subMain = computed(() => {

  return route.matched[1].path
})

const currentPath = computed(() => {
  return route.path
})

const next = computed(() => {
  let str = null
  if (subNavList.value.length) {
    const index = subNavList.value.findIndex(e => currentPath.value.includes(e.path))
    if (index !== -1) {
      if (index < subNavList.value.length - 1) {
        str = {
          type: 'next',
          nextPath: `${subMain.value}/${subNavList.value[index + 1].path}`,
          name: '下一步',
          intro: '是否完成进入下一步？',
          loadtext: '正在保存中',
        }
      } else if (index == subNavList.value.length - 1) {
        str = {
          type: 'last',
          name: '完成',
          intro: '是否完成创建？',
          loadtext: '正在创建中',
        }
      }
    }
  }

  return str
})

const socket = new mq()
const pinia = useStore()

dictApi.dictList().then(res => {
  localStorage.setItem('dict', JSON.stringify(res.data))
})
pinia.setMessage(message)
provide('message', message)
provide('subMain', subMain)
provide('next', next)
provide('density', density)
provide('btnList', btnList)
provide('socket', socket)
</script>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}

.slot-box div {
  user-select: none;

  &::-webkit-scrollbar {
    background: rgb(var(--v-theme-surface));
    block-size: 8px;
    border-end-end-radius: 14px;
    border-start-end-radius: 14px;
    inline-size: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(var(--v-theme-perfect-scrollbar-thumb));
    inline-size: 4;
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
}
</style>
