<script setup lang="ts">
import { isElement, XNode } from "../../libs/x-node"
import { MimorState } from "./MimorState"

defineProps<{ mimor: MimorState; node: XNode }>()
</script>

<template>
  <span v-if="!isElement(node)">{{ node }}</span>
  <component
    v-else-if="mimor.router.routeStmt(node.tag)"
    :is="mimor.router.routeStmt(node.tag)"
    :mimor="mimor"
    :element="node"
  />
  <div v-else>
    <div>Unknown statement:</div>
    <pre>{{ node }}</pre>
  </div>
</template>
