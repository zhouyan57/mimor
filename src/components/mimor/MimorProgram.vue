<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import { watch } from 'vue'
import { Program } from './Program'
import { State } from './State'

const { state, program, element } = defineProps<{
  state: State
  program: Program
  element: XElement
}>()

const who = 'MimorProgram'

watch(
  () => program.pointer,
  () => {
    const effect = program.router.findEffect(element)

    if (effect !== undefined) {
      console.log({
        who,
        pointer: program.pointer,
        stmtKind: 'Effect',
        tag: element.tag,
        element,
      })

      effect({ state, program, element })

      program.next()
    } else {
      const stmtKind = program.router.findCard(element) ? 'Card' : 'Unknown'

      console.log({
        who,
        pointer: program.pointer,
        stmtKind,
        tag: element.tag,
        element,
      })
    }
  },
  { immediate: true },
)
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
