<script setup lang="ts">
import { Program } from '../Program'
import { State } from '../State'
import IsRememberedControl from './IsRememberedControl.vue'
import IsRememberedHeader from './IsRememberedHeader.vue'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
    <IsRememberedHeader :state="state" :program="program" />

    <Transition
      enter-active-class="transition duration-100 delay-75 ease-linear"
      enter-from-class="transform transform-gpu origin-left opacity-0 rotate-20"
      enter-to-class="transform transform-gpu origin-left opacity-100 rotate-0"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform transform-gpu origin-left opacity-100 scale-100 rotate-0"
      leave-to-class="transform transform-gpu origin-left opacity-0 scale-50 -rotate-20"
    >
      <div
        :key="program.currentKey"
        class="body overflow-y-auto overscroll-contain p-3 font-serif"
      >
        <slot />
      </div>
    </Transition>

    <IsRememberedControl :state="state" :program="program" />
  </div>
</template>
