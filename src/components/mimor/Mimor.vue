<script setup lang="ts">
import { ref, watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
import MimorLoading from './MimorLoading.vue'
import MimorMeta from './MimorMeta.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  src: string
  withMetaThemeColor?: boolean
  isEditable?: boolean
}>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.src,
  async () => {
    state.value = await loadState({
      src: props.src,
      withMetaThemeColor: props.withMetaThemeColor,
      isEditable: props.isEditable,
    })
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div>
    <MimorMeta v-if="state" :state="state" />
    <MimorLoaded v-if="state" :state="state" @update="$emit('update', state)" />
    <MimorLoading v-else :options="{ src, isEditable }" />
  </div>
</template>
