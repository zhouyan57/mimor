<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  PaperAirplaneIcon,
  ScissorsIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import AuthorConnectionDataFlowRefresh from './AuthorConnectionDataFlowRefresh.vue'
import { Connection } from './Connection'
import { State } from './State'
import { stateConnectionDownload } from './stateConnectionDownload'
import { stateDisconnect } from './stateDisconnect'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Lang class="font-sans text-xl font-bold">
      <template #zh> 数据流示意图 </template>
      <template #en> Data Flow illustration </template>
    </Lang>

    <Lang class="px-5">
      <template #zh>
        <pre>
       「云端」
        /   ↖
<AuthorConnectionDataFlowRefresh :state="state" :connection="connection" />    <button class="inline-flex items-center border border-black py-1 px-1.5"><PaperAirplaneIcon class="w-5 h-5" /> 保存</button>
        ↘   /
        「App」
        /   ↖  <button class="inline-flex items-center border border-black my-1 py-1 px-1.5"  @click="stateDisconnect(state)"><ScissorsIcon class="w-5 h-5 rotate-180" /> 断开连接</button>
<button class="inline-flex items-center border border-black py-1 px-1.5 disabled:text-stone-500" :disabled="connection.isDownloading" @click="stateConnectionDownload(state, connection)"><ArrowDownTrayIcon v-if="!connection.isDownloading" class="h-5 w-5" /><ArrowPathIcon v-if="connection.isDownloading" class="h-5 w-5 animate-spin" /> 下载</button>    <button class="inline-flex items-center border border-black py-1 px-1.5"><ArrowUpTrayIcon class="w-5 h-5" /> 上传</button>
        ↘   /
     「本地文件夹」
</pre>
      </template>
      <template #en>
        <pre>
           [Cloud]
            /   ↖
<AuthorConnectionDataFlowRefresh :state="state" :connection="connection" />    <button class="inline-flex items-center border border-black py-1 px-1.5"><PaperAirplaneIcon class="w-5 h-5" /> Save</button>
            ↘   /
            [App]
            /   ↖  <button class="inline-flex items-center border border-black my-1 py-1 px-1.5" @click="stateDisconnect(state)"><ScissorsIcon class="w-5 h-5 rotate-180" /> Disconnect</button>
<button class="inline-flex items-center border border-black py-1 px-1.5 disabled:text-stone-500" :disabled="connection.isDownloading" @click="stateConnectionDownload(state, connection)"><ArrowDownTrayIcon v-if="!connection.isDownloading" class="h-5 w-5" /><ArrowPathIcon v-if="connection.isDownloading" class="h-5 w-5 animate-spin" /> Download</button>    <button class="inline-flex items-center border border-black py-1 px-1.5"><ArrowUpTrayIcon class="w-5 h-5" /> Upload</button>
            ↘   /
         [Directory]
</pre>
      </template>
    </Lang>
  </div>
</template>
