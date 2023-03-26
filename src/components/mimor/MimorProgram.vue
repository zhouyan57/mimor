<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { Program } from './Program'
import { State } from './State'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()
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
    <pre class="overflow-auto text-red-500">{{ element }}</pre>
  </div>
</template>
