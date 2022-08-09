<script setup lang="ts">
import { isElement, XNode } from "../../libs/x-node"
import { MimorState } from "./MimorState"

defineProps<{ mimor: MimorState; node: XNode }>()
</script>

<template>
  <span v-if="!isElement(node)">{{ node }}</span>
  <component
    v-else-if="mimor.router.stmts.route(node.tag)"
    :is="mimor.router.stmts.route(node.tag)"
    :mimor="mimor"
    :element="node"
  />
  <div v-else>
    <div class="font-bold text-xl text-red-500">Unknown statement:</div>
    <pre class="text-red-500 overscroll-contain overflow-auto">{{ node }}</pre>
  </div>
</template>
