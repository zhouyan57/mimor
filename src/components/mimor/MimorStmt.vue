<script setup lang="ts">
import { onMounted } from 'vue'
import { isElement, XNode } from '../../libs/x-node'
import { MimorState } from './MimorState'
import { Program } from './models/Program'

const { mimor, program, node } = defineProps<{
  mimor: MimorState
  program: Program
  node: XNode
}>()

onMounted(() => {
  if (!isElement(node)) return
  const effect = program.router.findEffect(node)
  if (!effect) return
  effect({ mimor, program, element: node })
  program.next()
})
</script>

<template>
  <span v-if="!isElement(node)">{{ node }}</span>
  <component
    v-else-if="program.router.findCard(node)"
    :is="program.router.findCard(node)"
    :mimor="mimor"
    :program="program"
    :element="node"
  />
  <div v-else-if="program.router.findEffect(node)"></div>
  <div v-else>
    <div class="text-xl font-bold text-red-500">Unknown statement:</div>
    <pre class="overflow-auto overscroll-contain text-red-500">{{ node }}</pre>
  </div>
</template>
