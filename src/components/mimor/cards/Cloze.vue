<script setup lang="ts">
import { matchElement, XElement } from '../../../libs/x-node'
import MimorNode from '../MimorNode.vue'
import MimorNodes from '../MimorNodes.vue'
import { MimorState } from '../MimorState'
import { Program } from '../models/Program'

defineProps<{
  mimor: MimorState
  program: Program
  element: XElement
}>()
</script>

<template>
  <div class="text-2xl">
    <span v-for="(child, index) of element.children" :key="index">
      <span v-if="matchElement(child, { tags: ['blank', '空'] })">
        <MimorNodes
          v-if="program.revealed"
          :mimor="mimor"
          :program="program"
          :nodes="child.children"
          class="font-bold"
          :class="[
            mimor.theme.name === 'yellow'
              ? 'text-purple-500'
              : mimor.theme.isWhite
              ? 'text-yellow-500'
              : 'text-yellow-300',
          ]"
        />
        <span
          v-else
          class="font-bold"
          :class="[
            mimor.theme.name === 'yellow'
              ? 'text-purple-500'
              : mimor.theme.isWhite
              ? 'text-yellow-500'
              : 'text-yellow-300',
          ]"
          >____</span
        >
      </span>
      <MimorNode v-else :mimor="mimor" :program="program" :node="child" />
    </span>
  </div>
</template>
