<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
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
      <div class="whitespace-pre">
        {{ formatDateTime(activity.time) }}
      </div>

      <Lang v-if="activity.name === 'Connect'" class="whitespace-pre">
        <template #zh>连接</template>
        <template #en>Connect</template>
      </Lang>

      <Lang v-if="activity.name === 'Upload'" class="whitespace-pre">
        <template #zh>上传</template>
        <template #en>Upload</template>
      </Lang>

      <Lang v-if="activity.name === 'Download'" class="whitespace-pre">
        <template #zh>下载</template>
        <template #en>Download</template>
      </Lang>
    </div>

    <div v-if="activity.report">
      <span
        class="whitespace-pre"
        v-for="(file, index) of activity.report.createdFiles"
        :key="index"
        ><span class="font-bold">+</span> {{ file }}</span
      >

      <span
        class="whitespace-pre"
        v-for="(file, index) of activity.report.updatedFiles"
        :key="index"
        ><span class="font-bold">*</span> {{ file }}</span
      >
    </div>
  </li>
</template>
