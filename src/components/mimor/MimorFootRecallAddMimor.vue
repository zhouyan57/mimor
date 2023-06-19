<script setup lang="ts">
import { ArrowPathIcon, HeartIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Program } from './Program'
import { State } from './State'
import { programReplay } from './programReplay'
import { useGlobalLang } from '../lang/useGlobalLang'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'
import { hexEncode } from '../../utils/hex'

defineProps<{
  state: State
  program: Program
}>()

const lang = useGlobalLang()
const origin = useCurrentOrigin()
</script>

<template>
  <div class="w-full text-xl font-bold">
    <a
      class="flex w-full flex-col items-start p-3"
      :class="[state.theme.bg(400)]"
      :href="`${origin}/recall-add-mimor/${state.src}`"
      target="_blank"
    >
      <HeartIcon
        class="h-6 w-6"
        :class="[
          state.theme.name === 'yellow' ? 'text-purple-400' : 'text-yellow-400',
        ]"
      />
      <Lang :class="[state.theme.name !== 'white' && 'text-white']">
        <template #zh>加入回顾</template>
        <template #en>Add to Recall</template>
      </Lang>
    </a>
  </div>
</template>
