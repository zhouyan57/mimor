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
import { stateRefresh } from './stateRefresh'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex space-x-3 overflow-x-auto text-base">
    <button
      class="flex min-w-max items-center space-x-1"
      :disabled="state.isRefreshing"
      :title="
        lang.isZh()
          ? `将云端的文件刷新到 app`
          : `Refresh files from cloud to app`
      "
      @click="stateRefresh(state)"
    >
      <ArrowPathIcon
        class="h-5 w-5"
        :class="{ 'animate-spin': state.isRefreshing }"
      />

      <Lang>
        <template #zh>刷新</template>
        <template #en>Refresh</template>
      </Lang>
    </button>

    <button
      v-if="state.isFileSystemAccessSupported && !state.connection"
      class="flex min-w-max items-center space-x-1"
      @click="stateConnect(state)"
    >
      <ArrowsUpDownIcon class="h-5 w-5" />

      <Lang>
        <template #zh>连接本地文件夹</template>
        <template #en>Connect local directory</template>
      </Lang>
    </button>

    <template v-if="state.connection">
      <button
        class="flex min-w-max items-center space-x-1"
        :title="
          lang.isZh()
            ? `将 app 中的文件下载到本地文件夹`
            : `Download files from app to local directory`
        "
        @click=""
      >
        <ArrowDownTrayIcon class="h-5 w-5" />

        <Lang>
          <template #zh>下载</template>
          <template #en>Download</template>
        </Lang>
      </button>

      <button class="flex min-w-max items-center space-x-1" @click="">
        <div class="font-bold">{{ state.connection.name }}</div>
      </button>

      <button
        class="flex min-w-max items-center space-x-1"
        :title="
          lang.isZh()
            ? `将本地文件夹中的文件上传到 app`
            : `Upload files from local directory to app`
        "
        @click=""
      >
        <ArrowUpTrayIcon class="h-5 w-5" />

        <Lang>
          <template #zh>上传</template>
          <template #en>Upload</template>
        </Lang>
      </button>

      <button
        class="flex min-w-max items-center space-x-1"
        :title="
          lang.isZh()
            ? `将 app 中的文件保存到云端`
            : `Save files from app to cloud`
        "
        @click=""
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
