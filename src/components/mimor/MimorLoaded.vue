<script setup lang="ts">
import { ref, watch } from 'vue'
import Init from '../utils/Init.vue'
import Scope from '../utils/Scope.vue'
import MimorKindEditor from './MimorKindEditor.vue'
import MimorKindError from './MimorKindError.vue'
import MimorKindProgram from './MimorKindProgram.vue'
import { State } from './State'
import { programCurrentElement } from './programCurrentElement'
import { stateReactive } from './stateReactive'
import { programPointer } from './programPointer'

const props = defineProps<{ state: State }>()

const rootElement = ref<HTMLElement | undefined>(undefined)

const state = stateReactive(props.state)

const who = 'MimorLoaded'

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
    class="flex h-full flex-col"
    :class="{ 'border border-black bg-white': state.theme.name === 'white' }"
  >
    <Init
      :action="
        () => {
          if (!state.isTextGiven) {
            $emit('loaded')
          }
        }
      "
    />

    <template v-if="state.program">
      <Scope
        :scope="{
          element:
            programCurrentElement(state.program) ||
            state.program.backCoverElement,
        }"
        v-slot="{ scope }"
      >
        <MimorKindEditor
          v-if="state.kind === 'Editor'"
          class="h-full"
          :class="[state.theme.bg(300)]"
          :state="state"
          :program="state.program"
          @update="$emit('update')"
        />

        <MimorKindProgram
          v-else-if="state.kind === 'Program'"
          class="h-full"
          :class="[state.theme.bg(300)]"
          :key="programPointer(state.program)"
          :state="state"
          :program="state.program"
          :element="scope.element"
        />
      </Scope>
    </template>

    <MimorKindError v-if="state.error" :state="state" :error="state.error" />
  </div>
</template>
