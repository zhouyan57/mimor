<script setup lang="ts">
import { CodeBracketIcon } from '@heroicons/vue/24/outline'
import Lang from '../../../components/Lang.vue'
import { Program } from '../Program'
import { State } from '../State'

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

    <div
      class="flex items-center space-x-2"
      :class="[state.theme.notWhite && state.theme.text(800)]"
    >
      <button @click="state.viewSource = ture">
        <CodeBracketIcon class="h-5 w-5" />
      </button>

      <Lang class="font-logo font-light">
        <template #zh>谜墨</template>
        <template #en>Mimor</template>
      </Lang>
    </div>
  </div>
</template>
