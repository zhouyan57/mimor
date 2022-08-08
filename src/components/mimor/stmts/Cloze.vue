<script setup lang="ts">
import { matchElement, XElement } from "../../../libs/x-node"
import BinaryLayout from "../layouts/BinaryLayout.vue"
import MimorNode from "../MimorNode.vue"
import MimorNodes from "../MimorNodes.vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState; element: XElement }>()
</script>

<template>
  <BinaryLayout :mimor="mimor" v-slot="{ revealed }">
    <div class="text-2xl">
      <span v-for="(child, index) of element.children" :key="index">
        <span v-if="matchElement(child, { tags: ['blank', '空'] })">
          <MimorNodes
            v-if="revealed"
            :mimor="mimor"
            :nodes="child.children"
            class="font-bold text-yellow-500"
          />
          <span v-else class="font-bold text-yellow-500">____</span>
        </span>
        <MimorNode v-else :mimor="mimor" :node="child" />
      </span>
    </div>
  </BinaryLayout>
</template>
