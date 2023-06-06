<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import AuthorConnectionActivity from './AuthorConnectionActivity.vue'
import { Connection } from './Connection'
import { State } from './State'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <div class="flex max-h-[45rem] flex-col space-y-2 overflow-auto">
    <div class="flex items-baseline justify-between">
      <Lang class="whitespace-pre font-sans text-xl font-bold">
        <template #zh>活动记录</template>
        <template #en>Activities</template>
      </Lang>
    </div>

    <ul
      class="flex flex-col space-y-2 overflow-y-auto overflow-x-hidden pr-1 text-lg"
    >
      <AuthorConnectionActivity
        v-for="(activity, index) of connection.activities"
        :key="index"
        :state="state"
        :connection="connection"
        :activity="activity"
      />
    </ul>
  </div>
</template>
