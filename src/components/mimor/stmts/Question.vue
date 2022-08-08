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
    <div v-for="(child, index) of element.children" :key="index">
      <div v-if="matchElement(child, { tags: ['answer', '答'] })">
        <MimorNodes
          v-show="revealed"
          :mimor="mimor"
          :nodes="child.children"
          class="py-3 text-3xl"
        />
      </div>
      <MimorNode
        v-else
        :mimor="mimor"
        :node="child"
        :class="[
          revealed ? 'text-xl' : 'text-2xl',
          revealed && 'text-stone-500',
        ]"
      />
    </div>
  </BinaryLayout>
</template>
