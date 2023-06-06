<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import AuthorOtherLoaded from './AuthorOtherLoaded.vue'
import AuthorOtherLoading from './AuthorOtherLoading.vue'
import { State } from './State'
import { loadStateFromCacheFirst } from './loadStateFromCacheFirst'

const route = useRoute()
const auth = useGlobalAuth()

const state = ref<State | undefined>(undefined)

const options = reactive({
  isSelf: false,
  username: String(route.params.username),
})

watch(
  () => route.params.username,
  async (value) => {
    state.value = undefined
    state.value = await loadStateFromCacheFirst(options)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <AuthorOtherLoaded v-if="state" :state="state" :key="state.username" />
  <AuthorOtherLoading v-else :options="options" :key="options.username" />
</template>
