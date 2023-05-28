<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  ArrowsUpDownIcon,
  PaperAirplaneIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { stateConnect } from './stateConnect'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex space-x-3 overflow-x-auto text-base">
    <button
      :title="lang.isZh() ? `` : ``"
      @click=""
      class="flex min-w-max items-center space-x-1"
    >
      <ArrowPathIcon class="h-5 w-5" />

      <Lang>
        <template #zh>刷新</template>
        <template #en>Refresh</template>
      </Lang>
    </button>

    <button
      v-if="state.isFileSystemAccessSupported && !state.connection"
      :title="lang.isZh() ? `连接本地文件夹` : `Connect to local directory`"
      @click="stateConnect(state)"
      class="flex min-w-max items-center space-x-1"
    >
      <ArrowsUpDownIcon class="h-5 w-5" />

      <Lang>
        <template #zh>连接</template>
        <template #en>Connect</template>
      </Lang>
    </button>

    <template v-if="state.connection">
      <button
        :title="lang.isZh() ? `` : ``"
        @click=""
        class="flex min-w-max items-center space-x-1"
      >
        <ArrowDownTrayIcon class="h-5 w-5" />

        <Lang>
          <template #zh>下载</template>
          <template #en>Download</template>
        </Lang>
      </button>

      <button class="flex min-w-max items-center space-x-1">
        <div>TODO</div>
      </button>

      <button
        :title="lang.isZh() ? `` : ``"
        @click=""
        class="flex min-w-max items-center space-x-1"
      >
        <ArrowUpTrayIcon class="h-5 w-5" />

        <Lang>
          <template #zh>上传</template>
          <template #en>Upload</template>
        </Lang>
      </button>

      <button
        :title="lang.isZh() ? `` : ``"
        @click=""
        class="flex min-w-max items-center space-x-1"
      >
        <PaperAirplaneIcon class="h-5 w-5" />

        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </button>
    </template>
  </div>
</template>
