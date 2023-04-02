<script setup lang="ts">
import { XElement } from '@readonlylink/x-node'
import { reactive } from 'vue'
import MimorFootRemembering from '../MimorFootRemembering.vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorTransitionCard from '../MimorTransitionCard.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import Nodes from '../nodes/Nodes.vue'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()

const remembering = reactive({ revealed: false })
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
        <span v-if="child.tag === 'blank'" class="px-0.5">
          <Nodes
            v-if="remembering.revealed"
            :state="state"
            :program="program"
            :nodes="child.children"
            class="font-bold"
            :class="[
              state.theme.name === 'yellow'
                ? 'text-purple-500'
                : state.theme.isWhite()
                ? 'text-yellow-500'
                : 'text-yellow-300',
            ]"
          />
          <span
            v-else
            class="font-bold"
            :class="[
              state.theme.name === 'yellow'
                ? 'text-purple-500'
                : state.theme.isWhite()
                ? 'text-yellow-500'
                : 'text-yellow-300',
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
