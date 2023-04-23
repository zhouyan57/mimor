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
  const src = String(route.params.src)

  return {
    src,
  }
}

watch(
  () => route.params.src,
  async () => {
    state.value = await loadState(createStateOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <MimorLoaded v-if="state" :state="state" />
  <MimorLoading v-else :options="createStateOptions()" />
</template>
