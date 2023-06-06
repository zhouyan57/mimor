<script setup lang="ts">
import { ScissorsIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'
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

    <Lang class="px-5 text-lg">
      <template #zh>
        <pre>
  「云端」
   /   ↖
刷新   保存
   ↘   /
   「App」
   /   ↖
下载   上传  <button class="inline-flex border border-black py-1 px-1.5"><ScissorsIcon class="w-6 h-6 rotate-180" @click="stateDisconnect(state)" /> 断开连接</button>
   ↘   /
「本地文件夹」
</pre>
      </template>
      <template #en>
        <pre>
    [Cloud]
     /   ↖
 Refresh Save
     ↘   /
     [App]
     /   ↖
Download Upload  <button class="inline-flex border border-black py-1 px-1.5" @click="stateDisconnect(state)"><ScissorsIcon class="w-6 h-6 rotate-180" /> Disconnect</button>
     ↘   /
  [Directory]
</pre>
      </template>
    </Lang>
  </div>
</template>
