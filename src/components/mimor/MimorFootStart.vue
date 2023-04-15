<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Program } from './Program'
import { State } from './State'
import { programNext } from './programNext'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="w-full pb-1.5 text-xl font-bold">
    <button
      class="flex w-full flex-col items-start p-3"
      :class="[state.theme.bg(400)]"
      @click="programNext(program)"
    >
      <PlayIcon
        class="h-6 w-6"
        :class="[
          state.theme.name === 'yellow' ? 'text-purple-400' : 'text-yellow-400',
        ]"
      />
      <Lang :class="[state.theme.name !== 'white' && 'text-white']">
        <template #zh>开始</template>
        <template #en>Start</template>
      </Lang>
    </button>
  </div>
</template>
