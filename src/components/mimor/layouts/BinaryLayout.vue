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
      enter-active-class="transition duration-200 delay-100 ease-in-out"
      enter-from-class="transform transform-gpu origin-top-left opacity-0 scale-0 rotate-45"
      enter-to-class="transform transform-gpu origin-top-left opacity-100 scale-100 rotate-0"
      leave-active-class="transition duration-200 ease-in-out"
      leave-from-class="transform transform-gpu origin-top-left opacity-100 scale-100 rotate-0"
      leave-to-class="transform transform-gpu origin-top-left opacity-0 scale-0 -rotate-45"
    >
      <div
        :key="mimor.key"
        class="body p-3 font-serif overscroll-contain overflow-y-auto"
      >
        <slot />
      </div>
    </Transition>

    <BinaryLayoutControl :mimor="mimor" />
  </div>
</template>
