<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import {
  DocumentTextIcon,
  PaperAirplaneIcon,
  PencilIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/outline'
import { formatDateTime } from '../../utils/formatDate'
import { pathParse } from '../author/pathParse'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex flex-col space-y-1 text-base">
    <div class="flex items-center space-x-1">
      <PencilIcon class="h-5 w-5" />

      <div class="overflow-x-auto whitespace-pre">
        {{ formatDateTime(entry.updatedAt) }}
      </div>
    </div>

    <div class="flex items-center space-x-1">
      <PaperAirplaneIcon class="h-5 w-5" />

      <div class="overflow-x-auto whitespace-pre">
        {{ formatDateTime(entry.createdAt) }}
      </div>
    </div>

    <div class="flex items-center space-x-1">
      <DocumentTextIcon class="h-5 w-5" />

      <div class="overflow-x-auto whitespace-pre">
        {{ entry.path }}
      </div>
    </div>

    <div
      v-if="entry.isModifiedByUploading"
      class="flex items-center space-x-1 text-orange-500"
    >
      <ExclamationCircleIcon class="h-5 w-5" />

      <Lang class="overflow-x-auto whitespace-pre">
        <template #zh>新上传的或因上传而修改了的。</template>
        <template #en>Modified by uploading or newly uploaded.</template>
      </Lang>
    </div>

    <div
      v-if="entry.isNotInTheCloud"
      class="flex items-center space-x-1 text-orange-500"
    >
      <ExclamationCircleIcon class="h-5 w-5" />

      <Lang class="overflow-x-auto whitespace-pre">
        <template #zh>刷新后发现这个内容不在云端。</template>
        <template #en>Not in the cloud after refreshing.</template>
      </Lang>
    </div>
  </div>
</template>
