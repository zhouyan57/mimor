<script setup lang="ts">
import {
  DocumentTextIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Mimor from '../../components/mimor/Mimor.vue'
import { formatDateTime } from '../../utils/formatDate'
import { Entry } from './Entry'
import { State } from './State'
import { mimorPathParse } from './mimorPathParse'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div>
    <div class="flex flex-col space-y-1 py-1 text-base">
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
          {{ mimorPathParse(entry.path).file }}
        </div>
      </div>
    </div>

    <Mimor
      class="h-[34rem] max-w-[47rem] shrink-0"
      :key="entry.path"
      :src="`~/${entry.path}`"
    />
  </div>
</template>
