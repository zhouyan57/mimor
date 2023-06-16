<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
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
  <div class="flex max-w-[47rem] flex-col overflow-auto bg-white p-3">
    <button class="block flex max-w-fit md:hidden" @click="$emit('close')">
      <XMarkIcon class="h-6 w-6" />
    </button>

    <div
      class="flex w-full flex-col space-y-1 pb-1 md:flex-row md:items-baseline md:justify-between md:space-x-3"
    >
      <Lang class="font-sans whitespace-pre text-xl font-bold">
        <template #zh>文件列表</template>
        <template #en>File List</template>
      </Lang>

      <div class="md:whitespace-pre">
        <Lang v-if="lastRefreshedAt" class="flex flex-wrap">
          <template #zh>
            <span class="whitespace-pre">上次刷新于：</span>
            <span class="whitespace-pre font-bold">{{
              formatDateTime(lastRefreshedAt)
            }}</span>
          </template>
          <template #en>
            <span class="whitespace-pre">Last refreshed at: </span>
            <span class="whitespace-pre font-bold">{{
              formatDateTime(lastRefreshedAt)
            }}</span>
          </template>
        </Lang>
      </div>
    </div>

    <ul class="flex flex-col pr-0.5 text-lg md:max-h-[45rem]">
      <li
        v-for="(entry, index) of entries"
        :key="index"
        class="ml-5 list-square"
      >
        <AuthorContentEntry
          :entry="entry"
          @jump="(path) => $emit('jump', path)"
        />
      </li>
    </ul>
  </div>
</template>
