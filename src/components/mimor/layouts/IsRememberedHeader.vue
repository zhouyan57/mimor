<script setup lang="ts">
import Lang from '../../../components/Lang.vue'
import { State } from '../State'
import { Program } from '../models/Program'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div class="font-bold">
      <Lang :class="[state.theme.notWhite && 'text-white']">
        <template #zh>进展：{{ program.progress }}</template>
        <template #en>Progress: {{ program.progress }}</template>
      </Lang>
    </div>
    <div class="font-logo font-light">
      <Lang :class="[state.theme.notWhite && state.theme.text(800)]">
        <template #zh>谜墨</template>
        <template #en>Mimor</template>
      </Lang>
    </div>
  </div>
</template>
