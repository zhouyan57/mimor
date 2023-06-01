<script setup lang="ts">
import { ref, watch } from 'vue'
import OnMounted from '../utils/OnMounted.vue'
import NoteEditor from './NoteEditor.vue'
import NoteHead from './NoteHead.vue'
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
  <div ref="rootElement" class="flex h-full flex-col bg-white">
    <OnMounted
      :action="
        () => {
          $emit('loaded')
        }
      "
    />

    <NoteHead class="border-x border-t border-black" :state="state" />
    <NoteEditor
      class="border-x border-b border-black"
      :state="state"
      @update="$emit('update')"
    />
  </div>
</template>
