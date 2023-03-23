<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function createStateOptions() {
  const url = String(route.params.url)

  return {
    url,
  }
}

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState(createStateOptions())
  },
)
</script>

<template>
  <MimorLoaded v-if="state" :state="state" />
  <MimorLoading v-else :options="createStateOptions()" />
</template>
