<script setup lang="ts">
import { XNode } from '@xieyuheng/x-node'
import { Program } from '../Program'
import { State } from '../State'
import MimorNode from './MimorNode.vue'

defineProps<{
  state: State
  program: Program
  nodes: Array<XNode>
}>()
</script>

<template>
  <span
    ><span v-for="(node, index) of nodes" :key="index"
      ><MimorNode :state="state" :program="program" :node="node" /></span
  ></span>
</template>
