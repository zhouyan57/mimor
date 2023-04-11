<script setup lang="ts">
import {
  ArrowTopRightOnSquareIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  BackspaceIcon,
  CodeBracketIcon,
  PlayIcon,
} from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'
import { useGlobalLang } from '../lang/useGlobalLang'
import { Program } from './Program'
import { State } from './State'
import { programBack } from './programBack'
import { programFormatProgress } from './programFormatProgress'

const lang = useGlobalLang()

const props = defineProps<{
  state: State
  program: Program
}>()

const who = 'MimorHeadProgram'

window.addEventListener('message', (event: MessageEvent) => {
  const data = event.data

  console.log({ who, message: 'received message', data })

  if (data.message === 'fullscreen-entered') {
    props.state.isFullscreen = true
  }

  if (data.message === 'fullscreen-exited') {
    props.state.isFullscreen = false
  }

  if (data.message === 'fullscreen-supported') {
    iframeSupportFullscreen.value = true
  }
})

onMounted(() => {
  window.parent.postMessage({ who, message: 'mounted' }, '*')
})

const iframeSupportFullscreen = ref(false)

function isInIframe() {
  return window !== window.parent
}

function fullscreenEnter() {
  if (isInIframe()) {
    window.parent.postMessage({ who, message: 'fullscreen-enter' }, '*')
  } else {
    props.state.isFullscreen = true
  }
}

function fullscreenExit() {
  if (isInIframe()) {
    window.parent.postMessage({ who, message: 'fullscreen-exit' }, '*')
  } else {
    props.state.isFullscreen = false
  }
}
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div
      :class="[state.theme.isNotWhite() && 'text-white']"
      :title="lang.isZh() ? '进度' : 'Progress'"
    >
      {{ programFormatProgress(program) }}
    </div>

    <div
      class="flex items-center space-x-4"
      :class="[state.theme.isNotWhite() && state.theme.text(800)]"
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

      <a
        :href="`${useCurrentOrigin()}/mimors/${state.url}`"
        target="_blank"
        :title="lang.isZh() ? '在新的标签中打开' : 'Open in new tab'"
      >
        <ArrowTopRightOnSquareIcon class="mb-0.5 h-5 w-5" />
      </a>

      <template
        v-if="(isInIframe() && iframeSupportFullscreen) || !isInIframe()"
      >
        <button
          v-if="!state.isFullscreen"
          :href="`${useCurrentOrigin()}/mimors/${state.url}`"
          target="_blank"
          :title="lang.isZh() ? '进入全屏' : 'Enter fullscreen'"
          @click="fullscreenEnter()"
        >
          <ArrowsPointingOutIcon class="mb-0.5 h-5 w-5" />
        </button>

        <button
          v-else
          :href="`${useCurrentOrigin()}/mimors/${state.url}`"
          target="_blank"
          :title="lang.isZh() ? '退出全屏' : 'Exit fullscreen'"
          @click="fullscreenExit()"
        >
          <ArrowsPointingInIcon class="mb-0.5 h-5 w-5" />
        </button>
      </template>

      <a
        :href="useCurrentOrigin()"
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
