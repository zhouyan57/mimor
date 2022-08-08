<script setup lang="ts">
import { reactive } from "vue"
import { matchElement, XElement } from "../../../libs/x-node"
import MimorNode from "../MimorNode.vue"
import MimorNodes from "../MimorNodes.vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState; element: XElement }>()

const state = reactive({
  revealed: false,
})
</script>

<template>
  <div>
    <button @click="state.revealed = !state.revealed">reveal</button>

    <div v-for="(child, index) of element.children" :key="index">
      <div v-if="matchElement(child, { tags: ['answer', '答'] })">
        <div v-show="state.revealed">
          <MimorNodes :mimor="mimor" :nodes="child.children" />
        </div>
      </div>
      <div v-else>
        <MimorNode :mimor="mimor" :node="child" />
      </div>
    </div>
  </div>
</template>
