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
  <div>
    <Lang class="font-sans text-lg font-bold">
      <template #zh> 文件列表 </template>
      <template #en> Files </template>
    </Lang>

    <ul class="flex flex-col text-lg">
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
