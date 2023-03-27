<script setup lang="ts">
import {
  ArrowTopRightOnSquareIcon,
  BackspaceIcon,
  CodeBracketIcon,
  PlayIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'
import { Program } from './Program'
import { State } from './State'
import { programBack } from './programBack'
import { programFormatProgress } from './programFormatProgress'

const origin = useCurrentOrigin()

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
      class="flex items-center space-x-4"
      :class="[state.theme.isNotWhite() && state.theme.text(800)]"
    >
      <button title="Back." @click="programBack(program)">
        <BackspaceIcon class="h-5 w-5" />
      </button>

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

      <a
        title="Open in new tab."
        :href="`${origin}/mimors/${state.url}`"
        target="_blank"
      >
        <ArrowTopRightOnSquareIcon class="mb-0.5 h-5 w-5" />
      </a>

      <a :href="useCurrentOrigin()" target="_blank">
        <Lang class="font-logo font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </a>
    </div>
  </div>
</template>
