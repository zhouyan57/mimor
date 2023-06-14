<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  ArrowsUpDownIcon,
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  FolderOpenIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  ReceiptRefundIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Popup from '../../components/utils/Popup.vue'
import AuthorContents from '../author/AuthorContents.vue'
import AuthorConnection from './AuthorConnection.vue'
import { State } from './State'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'
import { stateConnect } from './stateConnect'
import { stateConnectDirectoryHandle } from './stateConnectDirectoryHandle'
import { stateConnectionDownload } from './stateConnectionDownload'
import { stateConnectionUpload } from './stateConnectionUpload'
import { stateRefresh } from './stateRefresh'
import { stateSaveAllNewTexts } from './stateSaveAllNewTexts'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex max-w-[47rem] flex-wrap justify-between text-base">
    <div class="flex flex-wrap pr-3 text-base">
      <button
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="
          lang.isZh()
            ? `将云端的文件刷新到 app`
            : `Refresh files from cloud to app`
        "
        :disabled="state.isRefreshing"
        @click="stateRefresh(state)"
      >
        <CloudArrowDownIcon v-if="!state.isRefreshing" class="h-5 w-5" />

        <ArrowPathIcon v-if="state.isRefreshing" class="h-5 w-5 animate-spin" />

        <Lang>
          <template #zh>刷新</template>
          <template #en>Refresh</template>
        </Lang>
      </button>

      <button
        v-if="state.isFileSystemAccessSupported && !state.connection"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
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
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
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
          class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
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

        <Popup class="relative flex items-center pr-3">
          <template #toggle="{ popup }">
            <div
              class="flex min-w-max items-center space-x-1"
              @mouseover="popup.open = true"
              @mouseleave="popup.open = false"
            >
              <FolderOpenIcon class="h-5 w-5" />

              <div class="font-bold">{{ state.connection.name }}</div>
            </div>
          </template>

          <template #panel="{ popup }">
            <AuthorConnection
              class="absolute top-[1.5rem] z-20"
              :class="{
                '-left-[7rem]': lang.isZh(),
                '-left-[12rem]': !lang.isZh(),
              }"
              @mouseover="popup.open = true"
              @mouseleave="popup.open = false"
              v-show="popup.open"
              :state="state"
              :connection="state.connection"
            />
          </template>
        </Popup>

        <button
          class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
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
          v-if="state.entries.some((entry) => entryIsModifiedByUpload(entry))"
          class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
          :title="
            lang.isZh()
              ? `将 app 中的文件保存到云端`
              : `Save files from app to cloud`
          "
          :disabled="state.isSavingNewTexts"
          @click="stateSaveAllNewTexts(state)"
        >
          <CloudArrowUpIcon v-if="!state.isSavingNewTexts" class="h-5 w-5" />

          <ArrowPathIcon
            v-if="state.isSavingNewTexts"
            class="h-5 w-5 animate-spin"
          />

          <Lang>
            <template #zh>保存</template>
            <template #en>Save</template>
          </Lang>
        </button>
      </template>
    </div>

    <div class="flex flex-wrap text-base">
      <button
        v-if="!state.isSearching"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `开始搜索` : `Start searching`"
        @click="state.isSearching = true"
      >
        <MagnifyingGlassIcon class="h-5 w-5" />

        <Lang>
          <template #zh>搜索</template>
          <template #en>Search</template>
        </Lang>
      </button>

      <button
        v-if="state.isSearching"
        class="flex min-w-max items-center space-x-1 pr-3 disabled:text-stone-500"
        :title="lang.isZh() ? `退出搜索` : `Exit searching`"
        @click="state.isSearching = false"
      >
        <XMarkIcon class="h-5 w-5" />

        <Lang>
          <template #zh>搜索</template>
          <template #en>Search</template>
        </Lang>
      </button>

      <Popup class="relative flex items-center">
        <template #toggle="{ popup }">
          <div
            class="flex min-w-max items-center space-x-1"
            @mouseover="popup.open = true"
            @mouseleave="popup.open = false"
          >
            <ListBulletIcon class="h-5 w-5" />

            <Lang>
              <template #zh>
                <span>目录：</span>
                <span class="font-bold">{{ state.entries.length }}</span>
              </template>
              <template #en>
                <span>Contents: </span>
                <span class="font-bold">{{ state.entries.length }}</span>
              </template>
            </Lang>
          </div>
        </template>

        <template #panel="{ popup }">
          <AuthorContents
            class="absolute right-0 top-[1.5rem] z-20"
            @mouseover="popup.open = true"
            @mouseleave="popup.open = false"
            v-show="popup.open"
            @jump="
              () => {
                popup.open = false
                state.isSearching = false
                state.eagerLoadAll = true
              }
            "
            :lastRefreshedAt="state.lastRefreshedAt"
            :entries="
              state.entries.map((entry) => ({
                ...entry,
                text: entry.newText || entry.text || '',
              }))
            "
          />
        </template>
      </Popup>
    </div>
  </div>
</template>
