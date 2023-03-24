<script setup lang="ts">
import { Head } from '@vueuse/head'
import MimorError from './MimorError.vue'
import MimorProgram from './MimorProgram.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div class="h-full">
    <Head>
      <meta
        name="theme-color"
        :content="state.fullscreen ? state.theme.color : ''"
      />
    </Head>

    <MimorProgram
      v-if="state.program"
      class="h-full overflow-hidden"
      :class="[state.theme.bg(300)]"
      :key="state.program.currentKey"
      :state="state"
      :program="state.program"
      :element="state.program.current"
    />

    <MimorError v-if="state.error" :state="state" :error="state.error" />
  </div>
</template>
