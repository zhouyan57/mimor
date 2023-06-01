<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  ArrowsUpDownIcon,
  PaperAirplaneIcon,
  ReceiptRefundIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { stateConnect } from './stateConnect'
import { stateConnectDirectoryHandle } from './stateConnectLatestDirectoryHandle'
import { stateConnectionDownload } from './stateConnectionDownload'
import { stateConnectionUpload } from './stateConnectionUpload'
import { stateRefresh } from './stateRefresh'
import { stateSaveEntries } from './stateSaveEntries'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="flex max-w-[47rem] justify-between space-x-3 overflow-x-auto text-base"
  >
    <div class="flex space-x-3 overflow-x-auto text-base">
      <button
        class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
        :title="
          lang.isZh()
            ? `将云端的文件刷新到 app`
            : `Refresh files from cloud to app`
        "
        :disabled="state.isRefreshing"
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
        class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
        @click="stateConnect(state)"
      >
        <ArrowsUpDownIcon class="h-5 w-5" />

        <Lang>
          <template #zh>连接本地文件夹</template>
          <template #en>Connect local directory</template>
        </Lang>
      </button>

      <button
        v-if="state.latestDirectoryHandle && !state.connection"
        class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
        @click="stateConnectDirectoryHandle(state, state.latestDirectoryHandle)"
      >
        <ReceiptRefundIcon class="h-5 w-5" />

        <Lang>
          <template #zh
            >重新连接：<span class="font-bold">{{
              state.latestDirectoryHandle.name
            }}</span></template
          >
          <template #en
            >Reconnect to:
            <span class="font-bold">{{
              state.latestDirectoryHandle.name
            }}</span></template
          >
        </Lang>
      </button>

      <template v-if="state.connection">
        <button
          class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
          :title="
            lang.isZh()
              ? `将 app 中的文件下载到本地文件夹`
              : `Download files from app to local directory`
          "
          :disabled="state.connection.isDownloading"
          @click="stateConnectionDownload(state, state.connection)"
        >
          <ArrowDownTrayIcon
            v-if="!state.connection.isDownloading"
            class="h-5 w-5"
          />

          <ArrowPathIcon
            v-if="state.connection.isDownloading"
            class="h-5 w-5 animate-spin"
          />

          <Lang>
            <template #zh>下载</template>
            <template #en>Download</template>
          </Lang>
        </button>

        <button class="flex min-w-max items-center space-x-1" @click="">
          <div class="font-bold">{{ state.connection.name }}</div>
        </button>

        <button
          class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
          :title="
            lang.isZh()
              ? `将本地文件夹中的文件上传到 app`
              : `Upload files from local directory to app`
          "
          :disabled="state.connection.isUploading"
          @click="stateConnectionUpload(state, state.connection)"
        >
          <ArrowUpTrayIcon
            v-if="!state.connection.isUploading"
            class="h-5 w-5"
          />

          <ArrowPathIcon
            v-if="state.connection.isUploading"
            class="h-5 w-5 animate-spin"
          />

          <Lang>
            <template #zh>上传</template>
            <template #en>Upload</template>
          </Lang>
        </button>

        <button
          v-if="state.entries.some((entry) => entry.isModified)"
          class="flex min-w-max items-center space-x-1 disabled:text-stone-500"
          :title="
            lang.isZh()
              ? `将 app 中的文件保存到云端`
              : `Save files from app to cloud`
          "
          :disabled="state.isSavingEntries"
          @click="stateSaveEntries(state)"
        >
          <PaperAirplaneIcon v-if="!state.isSavingEntries" class="h-5 w-5" />

          <ArrowPathIcon
            v-if="state.isSavingEntries"
            class="h-5 w-5 animate-spin"
          />

          <Lang>
            <template #zh>保存</template>
            <template #en>Save</template>
          </Lang>
        </button>
      </template>
    </div>

    <div class="flex space-x-3 overflow-x-auto text-base">
      <div class="flex min-w-max items-center space-x-1">
        <Lang>
          <template #zh
            >总计：<span class="font-bold">{{
              state.entries.length
            }}</span></template
          >
          <template #en
            >Count:
            <span class="font-bold">{{ state.entries.length }}</span></template
          >
        </Lang>
      </div>
    </div>
  </div>
</template>
