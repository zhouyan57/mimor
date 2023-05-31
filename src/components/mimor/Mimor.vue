<script setup lang="ts">
import { ref, watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import MimorMeta from './MimorMeta.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  src: string
  text?: string
  withMetaThemeColor?: boolean
  isEditable?: boolean
}>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.src,
  async () => {
    state.value = await loadState(props)
  },
  {
    immediate: true,
  },
)

watch(
  () => props.text,
  async () => {
    state.value = await loadState(props)
  },
)
</script>

<template>
  <div>
    <MimorMeta v-if="state" :state="state" />
    <MimorLoaded
      v-if="state"
      :state="state"
      :key="state.text"
      @update="$emit('update', state)"
      @loaded="$emit('loaded', state)"
    />
    <MimorLoading v-else :options="{ src, isEditable }" />
  </div>
</template>
