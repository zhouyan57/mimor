<script setup lang="ts">
import { ref, watch } from 'vue'
import NoteLoaded from './NoteLoaded.vue'
import NoteLoading from './NoteLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  src: string
  isEditable?: boolean
}>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.src,
  async () => {
    state.value = await loadState({
      src: props.src,
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
    <NoteLoaded
      v-if="state"
      :state="state"
      @update="$emit('update', state)"
      @loaded="$emit('loaded', state)"
    />
    <NoteLoading v-else :options="{ src, isEditable }" />
  </div>
</template>
