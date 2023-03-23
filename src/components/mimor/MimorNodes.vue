<script setup lang="ts">
import { XNode } from '@xieyuheng/x-node'
import MimorNode from './MimorNode.vue'
import { State } from './State'
import { Program } from './models/Program'

defineProps<{
  state: State
  program: Program
  nodes: Array<XNode>
}>()
</script>

<template>
  <span
    ><span v-for="(node, index) of nodes"
      ><MimorNode :state="state" :program="program" :node="node" /></span
  ></span>
</template>
