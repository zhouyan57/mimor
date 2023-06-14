<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { formatDateTime } from '../../utils/formatDate'
import AuthorContentEntry from './AuthorContentEntry.vue'
import { Entry } from './Entry'

defineProps<{
  entries: Array<Entry>
  lastRefreshedAt?: number
}>()
</script>

<template>
  <div
    class="flex min-w-[30rem] max-w-[47rem] flex-col space-y-2 overflow-auto border border-black bg-white p-3"
  >
    <div class="flex w-full items-baseline justify-between space-x-3">
      <Lang class="font-sans whitespace-pre text-xl font-bold">
        <template #zh>文件列表</template>
        <template #en>File List</template>
      </Lang>

      <div class="whitespace-pre">
        <Lang v-if="lastRefreshedAt">
          <template #zh>
            <span>上次刷新于：</span>
            <span class="font-bold">{{ formatDateTime(lastRefreshedAt) }}</span>
          </template>
          <template #en>
            <span>Last refreshed at: </span>
            <span class="font-bold">{{ formatDateTime(lastRefreshedAt) }}</span>
          </template>
        </Lang>
      </div>
    </div>

    <ul class="flex max-h-[45rem] flex-col overflow-y-auto pr-0.5 text-lg">
      <li
        v-for="(entry, index) of entries"
        :key="index"
        class="ml-5 list-square"
      >
        <AuthorContentEntry :entry="entry" />
      </li>
    </ul>
  </div>
</template>
