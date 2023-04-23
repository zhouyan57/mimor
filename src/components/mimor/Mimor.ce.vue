<script setup lang="ts">
import { ref, watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{ src: string }>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.src,
  async () => {
    state.value = await loadState({ src: props.src })
  },
  {
    immediate: true,
    deep: true,
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
