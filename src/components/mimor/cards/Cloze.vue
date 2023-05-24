<script setup lang="ts">
import { XElement, isElement } from '@xieyuheng/x-node'
import { reactive, watch } from 'vue'
import MimorFootRemembering from '../MimorFootRemembering.vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorTransitionCard from '../MimorTransitionCard.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import Nodes from '../nodes/Nodes.vue'

const props = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

const remembering = reactive({ revealed: false })

watch(
  () => props.state.theme.name,
  () => {
    if (props.state.withMetaThemeColor) {
      props.state.themeColor = props.state.theme.colors[300]
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
    <MimorHeadProgram :state="state" :program="program" />

    <MimorTransitionCard :state="state" :program="program">
      <span
        v-for="(child, index) of element.children"
        :key="index"
        class="text-2xl"
      >
        <!-- the x spacing is needed for english text -->
        <span v-if="isElement(child) && child.tag === 'blank'" class="px-1">
          <Nodes
            v-if="remembering.revealed"
            :state="state"
            :program="program"
            :nodes="child.children"
            class="font-bold"
            :class="[
              state.theme.name === 'yellow'
                ? 'text-purple-500'
                : state.theme.name === 'white'
                ? 'text-yellow-500'
                : state.theme.name === 'stone'
                ? 'text-yellow-600'
                : state.theme.name === 'red'
                ? 'text-sky-500'
                : state.theme.name === 'orange'
                ? 'text-indigo-500'
                : state.theme.name === 'green'
                ? 'text-purple-500'
                : 'text-yellow-200',
            ]"
          />
          <span
            v-else
            class="font-bold"
            :class="[
              state.theme.name === 'yellow'
                ? 'text-purple-500'
                : state.theme.name === 'white'
                ? 'text-yellow-500'
                : state.theme.name === 'stone'
                ? 'text-yellow-600'
                : state.theme.name === 'red'
                ? 'text-sky-500'
                : state.theme.name === 'orange'
                ? 'text-indigo-500'
                : state.theme.name === 'green'
                ? 'text-purple-500'
                : 'text-yellow-200',
            ]"
            >____</span
          >
        </span>

        <Node v-else :state="state" :program="program" :node="child" />
      </span>
    </MimorTransitionCard>

    <MimorFootRemembering
      :state="state"
      :program="program"
      :remembering="remembering"
    />
  </div>
</template>
