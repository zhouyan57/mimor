<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { formatDateTime } from '../../utils/formatDate'
import { Connection } from './Connection'
import { State } from './State'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <div class="flex max-h-[45rem] flex-col space-y-1 overflow-auto">
    <div class="flex items-baseline justify-between">
      <Lang class="whitespace-pre font-sans text-xl font-bold">
        <template #zh>活动记录</template>
        <template #en>Activities</template>
      </Lang>
    </div>

    <ul
      class="flex flex-col space-y-2 overflow-y-auto overflow-x-hidden pr-2 text-lg"
    >
      <li
        v-for="(activity, index) of connection.activities"
        :key="index"
        class="min-w-[15rem]"
      >
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
    </ul>
  </div>
</template>
