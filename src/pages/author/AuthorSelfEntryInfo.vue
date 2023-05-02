<script setup lang="ts">
import {
  DocumentTextIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import { formatDateTime } from '../../utils/formatDate'
import { Entry } from './Entry'
import { State } from './State'
import { pathParse } from './pathParse'

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
        {{ pathParse(entry.path).file }}
      </div>
    </div>
  </div>
</template>
