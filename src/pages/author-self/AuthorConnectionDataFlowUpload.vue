<script setup lang="ts">
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'
import { stateConnectionUpload } from './stateConnectionUpload'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <button
    class="inline-flex items-center border border-black px-1.5 py-1"
    :disabled="connection.isUploading"
    @click="stateConnectionUpload(state, connection)"
  >
    <ArrowUpTrayIcon v-if="!connection.isUploading" class="h-5 w-5" />

    <ArrowPathIcon v-if="connection.isUploading" class="h-5 w-5 animate-spin" />

    <Lang>
      <template #zh>上传</template>
      <template #en>Upload</template>
    </Lang>
  </button>
</template>
