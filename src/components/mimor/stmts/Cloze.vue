<script setup lang="ts">
import { matchElement, XElement } from "../../../libs/x-node"
import MimorNode from "../MimorNode.vue"
import MimorNodes from "../MimorNodes.vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState; element: XElement }>()
</script>

<template>
  <div class="text-2xl">
    <span v-for="(child, index) of element.children" :key="index">
      <span v-if="matchElement(child, { tags: ['blank', '空'] })">
        <MimorNodes
          v-if="mimor.revealed"
          :mimor="mimor"
          :nodes="child.children"
          class="font-bold"
          :class="[
            mimor.theme.name === 'yellow'
              ? 'text-purple-500'
              : 'text-yellow-300',
          ]"
        />
        <span
          v-else
          class="font-bold"
          :class="[
            mimor.theme.name === 'yellow'
              ? 'text-purple-500'
              : 'text-yellow-300',
          ]"
          >____</span
        >
      </span>
      <MimorNode v-else :mimor="mimor" :node="child" />
    </span>
  </div>
</template>
