<script setup lang="ts">
import { matchElement, XElement } from '@xieyuheng/x-node'
import Remembering from '../layouts/Remembering.vue'
import MimorNode from '../MimorNode.vue'
import MimorNodes from '../MimorNodes.vue'
import { Program } from '../Program'
import { State } from '../State'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()
</script>

<template>
  <Remembering :state="state" :program="state.program">
    <div>
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
            <MimorNodes
              v-show="program.revealed"
              :state="state"
              :program="program"
              :nodes="child.children"
              class="py-3 text-3xl"
            />
          </Transition>
        </div>
        <MimorNode
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
    </div>
  </Remembering>
</template>
