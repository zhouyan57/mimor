<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <Lang>
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
