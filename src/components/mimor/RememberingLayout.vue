<script setup lang="ts">
import MimorFootRemembering from './MimorFootRemembering.vue'
import MimorHead from './MimorHead.vue'
import MimorTransitionCard from './MimorTransitionCard.vue'
import { Program } from './Program'
import { State } from './State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
    <MimorHead :state="state" :program="program" />

    <MimorTransitionCard :state="state" :program="program">
      <slot />
    </MimorTransitionCard>

    <MimorFootRemembering :state="state" :program="program" />
  </div>
</template>
