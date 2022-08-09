<script setup lang="ts">
import { MimorState } from "../MimorState"
import BinaryLayoutControl from "./BinaryLayoutControl.vue"
import BinaryLayoutHeader from "./BinaryLayoutHeader.vue"

defineProps<{ mimor: MimorState }>()
</script>

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <BinaryLayoutHeader :mimor="mimor" />

    <Transition
      enter-active-class="transition duration-100 delay-75 ease-linear"
      enter-from-class="transform transform-gpu origin-left opacity-0 rotate-20"
      enter-to-class="transform transform-gpu origin-left opacity-100 rotate-0"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform transform-gpu origin-left opacity-100 scale-100 rotate-0"
      leave-to-class="transform transform-gpu origin-left opacity-0 scale-50 -rotate-20"
    >
      <div
        :key="mimor.currentKey"
        class="body p-3 font-serif overscroll-contain overflow-y-auto"
      >
        <slot />
      </div>
    </Transition>

    <BinaryLayoutControl :mimor="mimor" />
  </div>
</template>
