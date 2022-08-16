<script setup lang="ts">
import { XNode } from '../../libs/x-node'
import MimorNode from './MimorNode.vue'
import { MimorState } from './MimorState'

defineProps<{ mimor: MimorState; nodes: Array<XNode> }>()
</script>

<template>
  <span
    ><span v-for="(node, index) of nodes"
      ><MimorNode :mimor="mimor" :node="node" /></span
  ></span>
</template>
