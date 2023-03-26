<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'
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
  <div class="flex h-full w-full flex-col justify-between">
    <MimorHead :state="state" :program="program" />

    <div class="h-full overflow-y-auto overscroll-contain p-3 font-serif">
      <div class="flex h-full flex-col justify-center text-xl">
        <div v-for="(child, index) of element.children" :key="index">
          <Node :state="state" :program="program" :node="child" />
        </div>
      </div>
    </div>

    <div>
      <button>Start</button>
    </div>
  </div>
</template>
