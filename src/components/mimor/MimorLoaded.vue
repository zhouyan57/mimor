<script setup lang="ts">
import { Head } from '@vueuse/head'
import MimorError from './MimorError.vue'
import MimorProgram from './MimorProgram.vue'
import MimorViewSource from './MimorViewSource.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div>
    <Head>
      <meta
        name="theme-color"
        :content="state.fullscreen ? state.theme.color : ''"
      />
    </Head>

    <template v-if="state.program">
      <MimorViewSource
        v-if="state.kind === 'ViewSource'"
        class="h-full"
        :class="[state.theme.bg(300)]"
        :key="state.program.currentKey"
        :state="state"
        :program="state.program"
      />

      <MimorProgram
        v-else
        class="h-full"
        :class="[state.theme.bg(300)]"
        :key="state.program.currentKey"
        :state="state"
        :program="state.program"
        :element="state.program.current"
      />
    </template>

    <MimorError v-if="state.error" :state="state" :error="state.error" />
  </div>
</template>
