<script setup lang="ts">
import { ref, watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import type { StateOptions } from './loadState'
import { loadState } from './loadState'

const props = defineProps<{ options: StateOptions }>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.options,
  async () => {
    state.value = await loadState(props.options)
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <MimorLoaded v-if="state" :state="state" />
  <MimorLoading v-else :options="options" />
</template>
