<script setup lang="ts">
import { matchElement, XElement } from "../../../libs/x-node"
import BinaryLayout from "../layouts/BinaryLayout.vue"
import MimorNode from "../MimorNode.vue"
import MimorNodes from "../MimorNodes.vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState; element: XElement }>()
</script>

<template>
  <BinaryLayout :mimor="mimor" v-slot="binary">
    <div v-for="(child, index) of element.children" :key="index">
      <div v-if="matchElement(child, { tags: ['answer', '答'] })">
        <div v-show="binary.revealed">
          <MimorNodes :mimor="mimor" :nodes="child.children" />
        </div>
      </div>
      <div v-else>
        <MimorNode :mimor="mimor" :node="child" />
      </div>
    </div>
  </BinaryLayout>
</template>
