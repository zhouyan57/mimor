<script setup lang="ts">
import { matchElement, XElement } from '@xieyuheng/x-node'
import RememberingLayout from '../layouts/RememberingLayout.vue'
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
  <RememberingLayout :state="state" :program="program">
    <div class="text-2xl">
      <span v-for="(child, index) of element.children" :key="index">
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
    </div>
  </RememberingLayout>
</template>
