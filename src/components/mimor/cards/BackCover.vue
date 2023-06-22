<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { watch } from 'vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorFootRecallAddMimor from '../MimorFootRecallAddMimor.vue'
import MimorFootReplay from '../MimorFootReplay.vue'
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
      class="font-sans h-full overflow-y-auto p-3 font-bold"
      :class="[state.theme.name === 'white' ? 'text-black' : 'text-white']"
    >
      <div class="flex h-full flex-col justify-center text-2xl">
        <div v-for="(child, index) of element.children" :key="index">
          <Node :state="state" :program="program" :node="child" />
        </div>
      </div>
    </div>

    <div class="flex w-full justify-between space-x-1 pb-1.5">
      <MimorFootReplay
        class="hover:ring-1"
        :class="[state.theme.ring(300)]"
        :state="state"
        :program="program"
      />

      <MimorFootRecallAddMimor
        class="hover:ring-1"
        :class="[state.theme.ring(300)]"
        :state="state"
        :program="program"
      />
    </div>
  </div>
</template>
