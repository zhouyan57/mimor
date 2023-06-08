<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { SearchResult, State } from './State'
import { leftPadLineNumber } from './leftPadLineNumber'

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
      class="flex space-x-2 font-mono text-sm"
    >
      <span class="whitespace-pre text-orange-500">{{
        leftPadLineNumber(
          Math.max(
            ...result.matchedLines.map((matchedLine) => matchedLine.index + 1),
          ),
          matchedLine.index + 1,
        )
      }}</span>

      <span class="overflow-x-auto whitespace-pre">{{ matchedLine.line }}</span>
    </div>
  </div>
</template>
