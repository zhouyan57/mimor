<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import AuthorConnectionDataFlowDisconnect from './AuthorConnectionDataFlowDisconnect.vue'
import AuthorConnectionDataFlowDownload from './AuthorConnectionDataFlowDownload.vue'
import AuthorConnectionDataFlowRefresh from './AuthorConnectionDataFlowRefresh.vue'
import AuthorConnectionDataFlowUpload from './AuthorConnectionDataFlowUpload.vue'
import { Connection } from './Connection'
import { State } from './State'

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
        /   ↖  <AuthorConnectionDataFlowDisconnect :state="state" :connection="connection" />
<AuthorConnectionDataFlowDownload :state="state" :connection="connection" />    <AuthorConnectionDataFlowUpload :state="state" :connection="connection" />
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
            /   ↖  <AuthorConnectionDataFlowDisconnect :state="state" :connection="connection" />
<AuthorConnectionDataFlowDownload :state="state" :connection="connection" />    <AuthorConnectionDataFlowUpload :state="state" :connection="connection" />
            ↘   /
         [Directory]
</pre>
      </template>
    </Lang>
  </div>
</template>
