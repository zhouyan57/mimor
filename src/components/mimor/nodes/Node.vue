<script setup lang="ts">
import { isElement, XNode } from '@xieyuheng/x-node'
import { Program } from '../Program'
import { State } from '../State'
import Text from './Text.vue'

defineProps<{
  state: State
  program: Program
  node: XNode
}>()
</script>

<template>
  <Text
    v-if="!isElement(node)"
    :state="state"
    :program="program"
    :text="node"
  />
  <component
    v-else-if="program.router.findNode(node)"
    :is="program.router.findNode(node)"
    :state="state"
    :program="program"
    :element="node"
  />
  <div v-else>
    <div class="text-xl font-bold text-red-500">Unknown node:</div>
    <pre class="overflow-auto overscroll-contain text-red-500">{{ node }}</pre>
  </div>
</template>
