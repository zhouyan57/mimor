<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { watch } from 'vue'
import MimorFootStart from '../MimorFootStart.vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import CoverInfo from './CoverInfo.vue'

const props = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

watch(
  () => props.state.theme.name,
  () => {
    if (props.state.withMetaThemeColor) {
      props.state.themeColor = props.state.theme.colors[400]
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between"
    :class="[state.theme.bg(400)]"
  >
    <MimorHeadProgram :state="state" :program="program" />

    <CoverInfo :state="state" :program="program" />

    <div
      class="h-full overflow-y-auto p-3 font-sans font-bold"
      :class="[state.theme.name === 'white' ? 'text-black' : 'text-white']"
    >
      <div class="flex h-full flex-col justify-center text-2xl">
        <div v-for="(child, index) of element.children" :key="index">
          <Node :state="state" :program="program" :node="child" />
        </div>
      </div>
    </div>

    <MimorFootStart :state="state" :program="program" />
  </div>
</template>
