<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
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
      <template #zh> 数据流 </template>
      <template #en> Data Flow </template>
    </Lang>

    <Lang class="text-lg">
      <template #zh>
        <pre>
  「云端」
   /   ↖
刷新   保存
   ↘   /
   「App」
   /   ↖
下载   上传
   ↘   /
「本地文件夹」
</pre
        >
      </template>
      <template #en>
        <pre>
    [Cloud]
     /   ↖
 Refresh Save
     ↘   /
     [App]
     /   ↖
Download Upload
     ↘   /
  [Directory]
</pre
        >
      </template>
    </Lang>
  </div>
</template>
