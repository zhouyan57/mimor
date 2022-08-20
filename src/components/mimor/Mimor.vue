<script setup lang="ts">
import { reactive } from 'vue'
import IsRemembered from './layouts/IsRemembered.vue'
import type { MimorOptions } from './MimorState'
import { MimorState as State } from './MimorState'
import MimorStmt from './MimorStmt.vue'

const { options } = defineProps<{ options: MimorOptions }>()
const state = reactive(new State(options))
</script>

<template>
  <div
    v-if="state.program"
    class="overflow-hidden border"
    :class="[state.theme.bg(300)]"
  >
    <IsRemembered :mimor="state" :program="state.program">
      <MimorStmt
        :mimor="state"
        :program="state.program"
        :node="state.program.current"
      />
    </IsRemembered>
  </div>
</template>
