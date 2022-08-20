<script setup lang="ts">
import { XNode } from '../../libs/x-node'
import MimorNode from './MimorNode.vue'
import { MimorState } from './MimorState'
import { Program } from './models/Program'

defineProps<{
  mimor: MimorState
  program: Program
  nodes: Array<XNode>
}>()
</script>

<template>
  <span
    ><span v-for="(node, index) of nodes"
      ><MimorNode :mimor="mimor" :program="program" :node="node" /></span
  ></span>
</template>
