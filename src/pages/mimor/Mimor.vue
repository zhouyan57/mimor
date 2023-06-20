<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const route = useRoute()

const state = ref<State | undefined>(undefined)

const options = reactive({
  src: String(route.params.src),
})

watch(
  () => route.params.src,
  async () => {
    state.value = await loadState(options)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <MimorLoaded v-if="state" :state="state" />
  <MimorLoading v-else :options="options" />
</template>
