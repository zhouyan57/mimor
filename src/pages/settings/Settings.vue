<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SettingsLoaded from './SettingsLoaded.vue'
import SettingsLoading from './SettingsLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await loadState({})
})
</script>

<template>
  <SettingsLoaded v-if="state" :state="state" />
  <SettingsLoading v-else :options="{}" />
</template>
