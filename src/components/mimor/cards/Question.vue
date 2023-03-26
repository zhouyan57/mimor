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
      <div v-for="(child, index) of element.children" :key="index">
        <div
          v-if="matchElement(child, { tags: ['answer', '答'] })"
          class="py-2"
        >
          <Transition
            enter-active-class="transition duration-700 ease-in-out"
            enter-from-class="transform transform-gpu opacity-0"
            enter-to-class="transform transform-gpu opacity-100"
          >
            <Nodes
              v-show="program.revealed"
              :state="state"
              :program="program"
              :nodes="child.children"
              class="py-3 text-3xl"
            />
          </Transition>
        </div>
        <Node
          v-else
          :state="state"
          :program="program"
          :node="child"
          :class="[
            program.revealed ? 'text-xl' : 'text-2xl',
            program.revealed && 'text-stone-700',
          ]"
        />
      </div>
    </MimorTransitionCard>

    <MimorFootRemembering :state="state" :program="program" />
  </div>
</template>
