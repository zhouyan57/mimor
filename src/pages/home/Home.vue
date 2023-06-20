<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import HomeLoaded from './HomeLoaded.vue'
import HomeLoading from './HomeLoading.vue'
import { State } from './State'
import { loadStateReactive } from './loadStateReactive'

const state = ref<State | undefined>(undefined)

const options = reactive({})

onMounted(async () => {
  state.value = await loadStateReactive(options)
})
</script>

<template>
  <HomeLoaded v-if="state" :state="state" />
  <HomeLoading v-else :options="options" />
</template>
