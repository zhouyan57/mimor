<script setup lang="ts">
import { Program } from './Program'
import { State } from './State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <Transition
    appear
    enterActiveClass="transition duration-100 delay-75 ease-linear"
    enterFromClass="transform transform-gpu origin-left opacity-0 rotate-20"
    enterToClass="transform transform-gpu origin-left opacity-100 rotate-0"
    leaveActiveClass="transition duration-75 ease-in"
    leaveFromClass="transform transform-gpu origin-left opacity-100 scale-100 rotate-0"
    leaveToClass="transform transform-gpu origin-left opacity-0 scale-50 -rotate-20"
  >
    <div :key="program.pointer" class="body overflow-y-auto p-3 font-serif">
      <slot />
    </div>
  </Transition>
</template>
