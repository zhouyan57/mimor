<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AuthorSelfLoaded from './AuthorSelfLoaded.vue'
import AuthorSelfLoading from './AuthorSelfLoading.vue'
import { State } from './State'
import { loadStateFromCacheFirst } from './loadStateFromCacheFirst'

const route = useRoute()

const state = ref<State | undefined>(undefined)

const options = reactive({
  isSelf: true,
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
  <AuthorSelfLoaded v-if="state" :state="state" :key="state.username" />
  <AuthorSelfLoading v-else :options="options" :key="options.username" />
</template>
