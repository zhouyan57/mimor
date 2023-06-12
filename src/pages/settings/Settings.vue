<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SettingsLoaded from './SettingsLoaded.vue'
import SettingsLoading from './SettingsLoading.vue'
import { State } from './State'
import { loadStateReactive } from './loadStateReactive'

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await loadStateReactive({})
})
</script>

<template>
  <SettingsLoaded v-if="state" :state="state" />
  <SettingsLoading v-else :options="{}" />
</template>
