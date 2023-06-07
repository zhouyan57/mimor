<script setup lang="ts">
import { ScissorsIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Connection } from './Connection'
import { State } from './State'
import { stateDisconnect } from './stateDisconnect'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <button
    class="my-1 inline-flex items-center border border-black px-1.5 py-1"
    @click.prevent.stop="stateDisconnect(state)"
  >
    <ScissorsIcon class="h-5 w-5 rotate-180" />
    <Lang>
      <template #zh>断开连接</template>
      <template #en>Disconnect</template>
    </Lang>
  </button>
</template>
