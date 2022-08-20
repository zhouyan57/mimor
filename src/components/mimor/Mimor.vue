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
  <div class="h-full">
    <div
      v-if="state.program"
      class="h-full overflow-hidden border"
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
    <div v-if="state.parsingError">
      <div class="text-xl font-bold text-red-500">ParsingError</div>
      <div class="border bg-red-200 p-2">
        <pre class="overflow-auto">{{ state.parsingError.message }}</pre>
      </div>
    </div>
    <div v-if="state.error">
      <div class="text-xl font-bold text-red-500">Error</div>
      <div>{{ state.error.message }}</div>
    </div>
  </div>
</template>
