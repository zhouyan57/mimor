<script setup lang="ts">
import { Head } from '@vueuse/head'
import MimorKindError from './MimorKindError.vue'
import MimorKindProgram from './MimorKindProgram.vue'
import MimorKindViewSource from './MimorKindViewSource.vue'
import { State } from './State'
import { programCurrentElement } from './programCurrentElement'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div>
    <Head>
      <meta
        name="theme-color"
        :content="state.fullscreen ? state.theme.colors[300] : '#ffffff'"
      />
    </Head>

    <template v-if="state.program">
      <MimorKindViewSource
        v-if="state.kind === 'ViewSource'"
        class="h-full"
        :class="[state.theme.bg(300)]"
        :state="state"
        :program="state.program"
      />

      <MimorKindProgram
        v-else
        class="h-full"
        :class="[state.theme.bg(300)]"
        :key="state.program.pointer"
        :state="state"
        :program="state.program"
        :element="programCurrentElement(state.program)"
      />
    </template>

    <MimorKindError v-if="state.error" :state="state" :error="state.error" />
  </div>
</template>
