<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { onMounted } from 'vue'
import { State } from './State'
import { Program } from './models/Program'

const { state, program, element } = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

onMounted(() => {
  const effect = program.router.findEffect(element)
  if (!effect) return
  effect({ state, program, element })
  program.next()
})
</script>

<template>
  <component
    v-if="program.router.findCard(element)"
    :is="program.router.findCard(element)"
    :state="state"
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
