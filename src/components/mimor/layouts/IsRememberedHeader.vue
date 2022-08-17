<script setup lang="ts">
import Lang from '../../../components/Lang.vue'
import { MimorState } from '../MimorState'

defineProps<{ mimor: MimorState }>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div class="font-bold text-stone-700">
      <Lang :class="[mimor.theme.notWhite && 'text-white']">
        <template #zh>进展：{{ mimor.progress }}</template>
        <template #en>Progress: {{ mimor.progress }}</template>
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
