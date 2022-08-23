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
          :element="state.program.current"
        />
      </IsRemembered>
    </div>

    <div
      v-if="state.parsingError"
      class="rounded-sm border border-orange-300 bg-orange-200 py-2 px-3"
    >
      <div class="text-xl font-bold text-orange-500">ParsingError</div>
      <pre class="overflow-auto">{{ state.parsingError.message }}</pre>
    </div>

    <div
      v-if="state.error"
      class="rounded-sm border border-red-300 bg-red-200 py-2 px-3"
    >
      <div class="text-xl font-bold text-red-500">Error</div>
      <pre class="overflow-auto">{{ state.error.message }}</pre>
    </div>
  </div>
</template>
