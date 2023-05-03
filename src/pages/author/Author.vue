<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import AuthorLoaded from './AuthorLoaded.vue'
import AuthorLoading from './AuthorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const route = useRoute()
const auth = useGlobalAuth()

const state = ref<State | undefined>(undefined)

function createOptions() {
  return {
    isSelf: route.params.username === auth.username,
    username: String(route.params.username),
  }
}

watch(
  () => route.params.username,
  async (value) => {
    state.value = undefined
    state.value = await loadState(createOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <AuthorLoaded v-if="state" :state="state" :key="state.username" />
  <AuthorLoading
    v-else
    :options="createOptions()"
    :key="String(route.params.username)"
  />
</template>
