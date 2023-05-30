<script setup lang="ts">
import MimorEditorTextarea from './MimorEditorTextarea.vue'
import MimorEditorToolbar from './MimorEditorToolbar.vue'
import { State } from './State'
import { stateEditorSave } from './stateEditorSave'

defineProps<{ state: State }>()

const emit = defineEmits(['update'])

async function submit(state: State) {
  await stateEditorSave(state)
  emit('update')
}
</script>

<template>
  <form
    tabindex="-1"
    @submit.prevent="submit(state)"
    class="flex h-full flex-col overflow-y-auto"
    :class="{
      [`border ${state.theme.border(300)}`]: state.theme.name !== 'white',
    }"
  >
    <MimorEditorTextarea :state="state" />
    <MimorEditorToolbar v-if="state.isEditable" :state="state" />
  </form>
</template>
