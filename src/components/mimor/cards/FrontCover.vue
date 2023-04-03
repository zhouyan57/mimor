<script setup lang="ts">
import { XElement } from '@readonlylink/x-node'
import { Head } from '@vueuse/head'
import MimorFootStart from '../MimorFootStart.vue'
import MimorHeadProgram from '../MimorHeadProgram.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'
import { programNext } from '../programNext'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between"
    :class="[state.theme.bg(400)]"
  >
    <Head>
      <meta
        name="theme-color"
        :content="state.withMetaThemeColor ? state.theme.colors[400] : ''"
      />
    </Head>

    <MimorHeadProgram :state="state" :program="program" />

    <div
      class="scrollbar-hide mx-3 flex overflow-x-auto overflow-y-hidden whitespace-pre pb-2 font-mono text-sm"
      :class="[state.theme.text(100)]"
    >
      {{ state.url }}
    </div>

    <div
      class="h-full cursor-pointer overflow-y-auto p-3 font-sans font-bold"
      :class="[state.theme.isWhite() ? 'text-black' : state.theme.text(50)]"
      @click="programNext(program)"
    >
      <div class="flex h-full flex-col justify-center text-2xl">
        <div v-for="(child, index) of element.children" :key="index">
          <Node :state="state" :program="program" :node="child" />
        </div>
      </div>
    </div>

    <MimorFootStart :state="state" :program="program" />
  </div>
</template>
