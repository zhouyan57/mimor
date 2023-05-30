<script setup lang="ts">
import { ref, watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  src: string
  text?: string
}>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.src,
  async () => {
    state.value = await loadState({
      src: props.src,
      text: props.text,
    })
  },
  {
    immediate: true,
  },
)

watch(
  () => props.text,
  async () => {
    state.value = await loadState({
      src: props.src,
      text: props.text,
    })
  },
)
</script>

<template>
  <div>
    <MimorLoaded v-if="state" :state="state" />
    <MimorLoading v-else :options="{ src }" />
  </div>
</template>

<style>
@import url('../../styles/fonts.css');
@import url('../../styles/index.css');
</style>
