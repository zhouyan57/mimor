<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HomeLoaded from './HomeLoaded.vue'
import HomeLoading from './HomeLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<State | undefined>(undefined)

function createStateOptions() {
  return {}
}

onMounted(async () => {
  state.value = await loadState(createStateOptions())
})
</script>

<template>
  <HomeLoaded v-if="state" :state="state" />
  <HomeLoading v-else :options="createStateOptions()" />
</template>
