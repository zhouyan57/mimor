<script setup lang="ts">
import { isElement, XNode } from '@xieyuheng/x-node'
import { MimorState } from './MimorState'
import MimorText from './MimorText.vue'
import { Program } from './models/Program'

defineProps<{
  mimor: MimorState
  program: Program
  node: XNode
}>()
</script>

<template>
  <MimorText
    v-if="!isElement(node)"
    :mimor="mimor"
    :program="program"
    :text="node"
  />
  <component
    v-else-if="program.router.findNode(node)"
    :is="program.router.findNode(node)"
    :mimor="mimor"
    :program="program"
    :element="node"
  />
  <div v-else>
    <div class="text-xl font-bold text-red-500">Unknown node:</div>
    <pre class="overflow-auto overscroll-contain text-red-500">{{ node }}</pre>
  </div>
</template>
