<script setup lang="ts">
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <button class="inline-flex items-center border border-black px-1.5 py-1">
    <ArrowUpTrayIcon class="h-5 w-5" />
    <Lang>
      <template #zh>上传</template>
      <template #en>Upload</template>
    </Lang>
  </button>
</template>
