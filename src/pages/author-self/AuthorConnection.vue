<script setup lang="ts">
import AuthorConnectionActivities from './AuthorConnectionActivities.vue'
import AuthorConnectionDataFlow from './AuthorConnectionDataFlow.vue'
import AuthorConnectionFileList from './AuthorConnectionFileList.vue'
import { Connection } from './Connection'
import { State } from './State'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <div class="flex space-x-8 border border-black bg-white p-4">
    <div class="flex flex-col space-y-8">
      <AuthorConnectionActivities :state="state" :connection="connection" />
    </div>

    <div class="flex flex-col space-y-8">
      <AuthorConnectionDataFlow :state="state" :connection="connection" />
      <AuthorConnectionFileList :state="state" :connection="connection" />
    </div>
  </div>
</template>
