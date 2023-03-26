<script setup lang="ts">
import { matchElement, XElement } from '@xieyuheng/x-node'
import MimorFootRemembering from '../MimorFootRemembering.vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import MimorTransitionCard from '../MimorTransitionCard.vue'
import Node from '../nodes/Node.vue'
import Nodes from '../nodes/Nodes.vue'
import { Program } from '../Program'
import { State } from '../State'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()
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
        <Node
          v-if="!matchElement(child, { tags: ['blank', '空'] })"
          :state="state"
          :program="program"
          :node="child"
        />
        <span v-else class="px-0.5">
          <Nodes
            v-if="program.revealed"
            :state="state"
            :program="program"
            :nodes="child.children"
            class="font-bold"
            :class="[
              state.theme.name === 'yellow'
                ? 'text-purple-500'
                : state.theme.isWhite
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
                : state.theme.isWhite
                ? 'text-yellow-500'
                : 'text-yellow-300',
            ]"
            >____</span
          >
        </span>
      </span>
    </MimorTransitionCard>

    <MimorFootRemembering :state="state" :program="program" />
  </div>
</template>
