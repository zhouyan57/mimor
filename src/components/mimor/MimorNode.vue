<script setup lang="ts">
import { isElement, XNode } from "../../libs/x-node"
import { MimorState } from "./MimorState"
import { routes } from "./routes"
import Unknown from "./views/Unknown.vue"

defineProps<{ mimor: MimorState; node: XNode }>()
</script>

<template>
  <div>
    <span v-if="!isElement(node)">{{ node }}</span>
    <component
      v-else-if="routes[node.tag]"
      :is="routes[node.tag]"
      :mimor="mimor"
      :element="node"
    />
    <Unknown v-else :mimor="mimor" :element="node" />
  </div>
</template>
