<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'
import { stateConnectionDownload } from './stateConnectionDownload'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <button
    class="inline-flex items-center border border-black px-1.5 py-1 disabled:text-stone-500"
    :disabled="connection.isDownloading"
    @click="stateConnectionDownload(state, connection)"
  >
    <ArrowDownTrayIcon
      v-if="!connection.isDownloading"
      class="h-5 w-5"
    /><ArrowPathIcon
      v-if="connection.isDownloading"
      class="h-5 w-5 animate-spin"
    />
    <Lang>
      <template #zh>下载</template>
      <template #en>Download</template>
    </Lang>
  </button>
</template>
