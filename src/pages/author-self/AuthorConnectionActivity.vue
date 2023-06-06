<script setup lang="ts">
import { formatDateTime } from '../../utils/formatDate'
import { Connection, ConnectionActivity } from './Connection'
import { State } from './State'

defineProps<{
  state: State
  connection: Connection
  activity: ConnectionActivity
}>()
</script>

<template>
  <li class="min-w-[15rem]">
    <div class="flex items-baseline justify-between">
      <div class="whitespace-pre font-bold">{{ activity.name }}</div>
      <div class="whitespace-pre text-base">
        {{ formatDateTime(activity.time) }}
      </div>
    </div>

    <div v-if="activity.report" class="whitespace-pre">
      {{ activity.report }}
    </div>
  </li>
</template>
