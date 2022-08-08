<script setup lang="ts">
import { isElement, XNode } from "../../libs/x-node"
import { MimorState } from "./MimorState"
import Unknown from "./stmts/Unknown.vue"

defineProps<{ mimor: MimorState; node: XNode }>()
</script>

<template>
  <span v-if="!isElement(node)">{{ node }}</span>
  <component
    v-else-if="mimor.router.route(node.tag)"
    :is="mimor.router.route(node.tag)"
    :mimor="mimor"
    :element="node"
  />
  <Unknown v-else :mimor="mimor" :element="node" />
</template>
