<script setup lang="ts">
import { ref, watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{ url: string }>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.url,
  async () => {
    state.value = await loadState({ url: props.url })
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
    <MimorLoading v-else :options="{ url }" />
  </div>
</template>

<style>
@import url('../../styles/fonts.css');
@import url('../../styles/index.css');
</style>
