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
  <div class="flex max-h-[25rem] flex-col space-y-1 overflow-auto">
    <div class="flex items-baseline justify-between">
      <Lang class="font-sans text-xl font-bold">
        <template #zh> 本地文件列表 </template>
        <template #en> Local File List </template>
      </Lang>

      <Lang class="font-sans">
        <template #zh
          >总计：<span class="font-bold">{{
            connection.fileEntries.length
          }}</span></template
        >
        <template #en
          >Count:
          <span class="font-bold">{{
            connection.fileEntries.length
          }}</span></template
        >
      </Lang>
    </div>

    <ul class="flex flex-col overflow-y-auto overflow-x-hidden text-lg">
      <li
        v-for="fileEntry of connection.fileEntries"
        :key="fileEntry.path"
        class="ml-5 list-square"
      >
        <div class="whitespace-pre">{{ fileEntry.path }}</div>
      </li>
    </ul>
  </div>
</template>
