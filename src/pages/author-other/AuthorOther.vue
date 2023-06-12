<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import AuthorOtherLoaded from './AuthorOtherLoaded.vue'
import AuthorOtherLoading from './AuthorOtherLoading.vue'
import { State } from './State'
import { loadStateReactive } from './loadStateReactive'

const route = useRoute()
const auth = useGlobalAuth()

const state = ref<State | undefined>(undefined)

const options = reactive({
  username: String(route.params.username),
})

watch(
  () => route.params.username,
  async (value) => {
    state.value = undefined
    state.value = await loadStateReactive(options)
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
