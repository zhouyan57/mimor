<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { onMounted } from 'vue'
import { MimorState } from './MimorState'
import { Program } from './models/Program'

const {
  mimor,
  program,
  element: node,
} = defineProps<{
  mimor: MimorState
  program: Program
  element: XElement
}>()

onMounted(() => {
  const effect = program.router.findEffect(node)
  if (!effect) return
  effect({ mimor, program, element: node })
  program.next()
})
</script>

<template>
  <component
    v-if="program.router.findCard(element)"
    :is="program.router.findCard(element)"
    :mimor="mimor"
    :program="program"
    :element="element"
  />
  <div v-else-if="program.router.findEffect(element)"></div>
  <div v-else>
    <div class="text-xl font-bold text-red-500">Unknown statement:</div>
    <pre class="overflow-auto overscroll-contain text-red-500">{{
      element
    }}</pre>
  </div>
</template>
