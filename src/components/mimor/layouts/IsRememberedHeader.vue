<script setup lang="ts">
import Lang from '../../../components/Lang.vue'
import { MimorState } from '../MimorState'
import { Program } from '../models/Program'

defineProps<{
  mimor: MimorState
  program: Program
}>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div class="font-bold text-stone-700">
      <Lang :class="[mimor.theme.notWhite && 'text-white']">
        <template #zh>进展：{{ program.progress }}</template>
        <template #en>Progress: {{ program.progress }}</template>
      </Lang>
    </div>
    <div class="font-logo font-light">
      <Lang :class="[mimor.theme.notWhite && mimor.theme.text(800)]">
        <template #zh>谜墨</template>
        <template #en>Mimor</template>
      </Lang>
    </div>
  </div>
</template>
