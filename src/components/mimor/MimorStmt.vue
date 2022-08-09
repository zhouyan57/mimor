<script setup lang="ts">
import { onMounted } from "vue"
import { isElement, XNode } from "../../libs/x-node"
import { MimorState } from "./MimorState"

const { mimor, node } = defineProps<{ mimor: MimorState; node: XNode }>()

onMounted(() => {
  if (!isElement(node)) return
  const effect = mimor.router.stmts.getEffect(node.tag)
  if (!effect) return
  effect({ mimor, element: node })
  mimor.next()
})
</script>

<template>
  <span v-if="!isElement(node)">{{ node }}</span>
  <component
    v-else-if="mimor.router.stmts.hasComponent(node.tag)"
    :is="mimor.router.stmts.getComponent(node.tag)"
    :mimor="mimor"
    :element="node"
  />
  <div v-else-if="mimor.router.stmts.hasEffect(node.tag)"></div>
  <div v-else>
    <div class="font-bold text-xl text-red-500">Unknown statement:</div>
    <pre class="text-red-500 overscroll-contain overflow-auto">{{ node }}</pre>
  </div>
</template>
