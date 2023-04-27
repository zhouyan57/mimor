<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import AuthorLoaded from './AuthorLoaded.vue'
import AuthorLoading from './AuthorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const route = useRoute()
const lang = useGlobalLang()
const auth = useGlobalAuth()

const state = ref<State | undefined>(undefined)

function createOptions() {
  return {
    isSelf: route.params.username === auth.username,
    username: String(route.params.username),
  }
}

watch(
  () => createOptions(),
  async (value) => {
    state.value = await loadState(value)
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>

<template>
  <div>
    <AuthorLoaded v-if="state" :state="state" />
    <AuthorLoading v-else />
  </div>
</template>
