<script setup lang="ts">
import { ref, watch } from 'vue'
import NoteHead from './NoteHead.vue'
import NoteTextarea from './NoteTextarea.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const rootElement = ref<HTMLElement | undefined>(undefined)

const state = stateReactive(props.state)

const who = 'NoteLoaded'

async function fullscreenEnter() {
  try {
    await rootElement.value?.requestFullscreen()
  } catch (error) {
    console.error({ who, error })
  }
}

async function fullscreenExit() {
  try {
    await document.exitFullscreen()
  } catch (error) {
    console.error({ who, error })
  }
}

watch(
  () => state.isFullscreen,
  (value) => {
    if (value) {
      fullscreenEnter()
    } else {
      fullscreenExit()
    }
  },
)
</script>

<template>
  <div
    ref="rootElement"
    class="flex h-full flex-col border border-black bg-white"
  >
    <NoteHead :state="state" />
    <NoteTextarea class="h-full" :state="state" />
  </div>
</template>
