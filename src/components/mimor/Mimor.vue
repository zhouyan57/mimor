<script setup lang="ts">
import { Head } from '@vueuse/head'
import MimorStmt from './MimorStmt.vue'
import type { StateOptions } from './loadState'
import { loadState } from './loadState'
import { stateReactive } from './stateReactive'

const { options } = defineProps<{ options: StateOptions }>()

const state = stateReactive(loadState(options))
</script>

<template>
  <div class="h-full">
    <Head>
      <meta
        name="theme-color"
        :content="state.fullscreen ? state.theme.color : ''"
      />
    </Head>

    <div
      v-if="state.program"
      class="h-full overflow-hidden"
      :class="[state.theme.bg(300)]"
    >
      <MimorStmt
        :key="state.program.currentKey"
        :state="state"
        :program="state.program"
        :element="state.program.current"
      />
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
