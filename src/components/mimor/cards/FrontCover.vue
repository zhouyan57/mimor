<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
import MimorFootStart from '../MimorFootStart.vue'
import MimorHead from '../MimorHead.vue'
import { Program } from '../Program'
import { State } from '../State'
import Node from '../nodes/Node.vue'

defineProps<{
  state: State
  program: Program
  element: XElement
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between"
    :class="[
      state.theme.bg(400),
      state.theme.isWhite ? 'border-stone-500' : state.theme.border(400),
    ]"
  >
    <MimorHead :state="state" :program="program" :hideProgress="true" />

    <div
      class="h-full cursor-pointer overflow-y-auto overscroll-contain p-3 font-sans font-bold"
      :class="[state.theme.isWhite ? 'text-black' : state.theme.text(50)]"
      @click="program.next()"
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
