<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { SearchResult, State } from './State'

defineProps<{
  state: State
  result: SearchResult
}>()
</script>

<template>
  <div class="flex flex-col">
    <div>
      <Lang class="text-lg text-orange-500">
        <template #zh>匹配的行：</template>
        <template #en>Matched lines:</template>
      </Lang>
    </div>

    <div
      v-for="(matchedLine, index) of result.matchedLines"
      :key="index"
      class="flex space-x-1 font-mono text-sm"
    >
      <div class="text-orange-500">{{ matchedLine.index + 1 }}</div>

      <div class="overflow-x-auto whitespace-pre">{{ matchedLine.line }}</div>
    </div>
  </div>
</template>
