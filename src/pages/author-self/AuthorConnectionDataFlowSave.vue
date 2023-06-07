<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
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
    <PaperAirplaneIcon class="h-5 w-5" />
    <Lang>
      <template #zh>保存</template>
      <template #en>Save</template>
    </Lang>
  </button>
</template>
