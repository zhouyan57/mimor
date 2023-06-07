<script setup lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <button
    class="inline-flex items-center border border-black px-1.5 py-1 disabled:text-stone-500"
    :disabled="state.isRefreshing"
    @click="stateRefresh(state)"
  >
    <ArrowPathIcon
      class="h-5 w-5"
      :class="{ 'animate-spin': state.isRefreshing }"
    />
    <Lang>
      <template #zh>刷新</template>
      <template #en>Refresh</template>
    </Lang>
  </button>
</template>
