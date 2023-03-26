<script setup lang="ts">
import { CodeBracketIcon, PlayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'
import { Program } from './Program'
import { State } from './State'
import { programFormatProgress } from './programFormatProgress'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div :class="[state.theme.isNotWhite() && 'text-white']">
      {{ programFormatProgress(program) }}
    </div>

    <div
      class="flex items-center space-x-2"
      :class="[state.theme.isNotWhite() && state.theme.text(800)]"
    >
      <button
        v-if="state.kind === 'Program'"
        @click="state.kind = 'ViewSource'"
        title="View source."
      >
        <CodeBracketIcon class="h-5 w-5" />
      </button>

      <button
        v-if="state.kind === 'ViewSource'"
        @click="state.kind = 'Program'"
        title="Back to the program."
      >
        <PlayIcon class="h-5 w-5" />
      </button>

      <a :href="useCurrentOrigin()" target="_blank" class="hover:underline">
        <Lang class="font-logo font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </a>
    </div>
  </div>
</template>
