<script setup lang="ts">
import {
  ArrowTopRightOnSquareIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  BackspaceIcon,
  CodeBracketIcon,
  PlayIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../lang/useGlobalLang'
import { Program } from './Program'
import { State } from './State'
import { programBack } from './programBack'
import { programFormatProgress } from './programFormatProgress'

const lang = useGlobalLang()
const origin = 'https://mimor.app'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div
      class="whitespace-pre pr-2"
      :class="[state.theme.name !== 'white' && 'text-white']"
      :title="lang.isZh() ? '进度' : 'Progress'"
    >
      {{ programFormatProgress(program) }}
    </div>

    <div
      class="flex items-center space-x-4"
      :class="[state.theme.name !== 'white' && state.theme.text(800)]"
    >
      <button
        @click="programBack(program)"
        :title="lang.isZh() ? '后退一张卡片' : 'Back a card'"
      >
        <BackspaceIcon class="h-5 w-5" />
      </button>

      <button
        v-if="state.kind === 'Program'"
        @click="state.kind = 'ViewSource'"
        :title="lang.isZh() ? '查看源代码' : 'View source'"
      >
        <CodeBracketIcon class="h-5 w-5" />
      </button>

      <button
        v-if="state.kind === 'ViewSource'"
        @click="state.kind = 'Program'"
        :title="lang.isZh() ? '回到卡片程序' : 'Back to the program'"
      >
        <PlayIcon class="h-5 w-5" />
      </button>

      <button>
        <a
          :href="`${origin}/mimors/${state.url}`"
          target="_blank"
          :title="lang.isZh() ? '在新的标签中打开' : 'Open in new tab'"
        >
          <ArrowTopRightOnSquareIcon class="mb-0.5 h-5 w-5" />
        </a>
      </button>

      <button
        v-if="!state.isFullscreen"
        :href="`${origin}/mimors/${state.url}`"
        target="_blank"
        :title="lang.isZh() ? '进入全屏' : 'Enter fullscreen'"
        @click="state.isFullscreen = true"
      >
        <ArrowsPointingOutIcon class="mb-0.5 h-5 w-5" />
      </button>

      <button
        v-else
        :href="`${origin}/mimors/${state.url}`"
        target="_blank"
        :title="lang.isZh() ? '退出全屏' : 'Exit fullscreen'"
        @click="state.isFullscreen = false"
      >
        <ArrowsPointingInIcon class="mb-0.5 h-5 w-5" />
      </button>

      <a
        :href="origin"
        target="_blank"
        :title="lang.isZh() ? '打开 Mimor 主页' : 'Open Mimor homepage'"
      >
        <Lang class="font-logo font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </a>
    </div>
  </div>
</template>
