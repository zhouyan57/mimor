<script setup lang="ts">
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/vue/24/outline'
import ReadonlyIcon from '../../components/icons/ReadonlyIcon.vue'
import Lang from '../../components/lang/Lang.vue'
import { contentURL } from '../../models/content/contentURL'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
const lang = useGlobalLang()

const origin = 'https://mimor.app'

defineProps<{ state: State }>()

function fullscreenSupported() {
  return document.fullscreenEnabled
}
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div>
      <Lang>
        <template #zh>笔记</template>
        <template #en>Note</template>
      </Lang>
    </div>

    <div class="flex items-center space-x-4">
      <button>
        <a
          :href="`https://readonly.link/articles/${contentURL(state.src)}`"
          target="_blank"
          :title="
            lang.isZh() ? '在 Readonly.Link 中打开' : 'Open in Readonly.Link'
          "
        >
          <ReadonlyIcon class="h-6 w-6" />
        </a>
      </button>

      <template v-if="fullscreenSupported()">
        <button
          v-if="!state.isFullscreen"
          :title="lang.isZh() ? '进入全屏' : 'Enter fullscreen'"
          @click="state.isFullscreen = true"
        >
          <ArrowsPointingOutIcon class="mb-0.5 h-5 w-5" />
        </button>

        <button
          v-else
          :title="lang.isZh() ? '退出全屏' : 'Exit fullscreen'"
          @click="state.isFullscreen = false"
        >
          <ArrowsPointingInIcon class="mb-0.5 h-5 w-5" />
        </button>
      </template>

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
