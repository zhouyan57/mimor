<script setup lang="ts">
import { isElement, XNode } from '../../libs/x-node'
import { MimorState } from './MimorState'

defineProps<{ mimor: MimorState; node: XNode }>()
</script>

<template>
  <span v-if="!isElement(node)">{{ node }}</span>
  <component
    v-else-if="mimor.router.findNode(node)"
    :is="mimor.router.findNode(node)"
    :mimor="mimor"
    :element="node"
  />
  <div v-else>
    <div class="text-xl font-bold text-red-500">Unknown node:</div>
    <pre class="overflow-auto overscroll-contain text-red-500">{{ node }}</pre>
  </div>
</template>
