<script setup lang="ts">
import { reactive } from "vue"
import { MimorState as State } from "./MimorState"
import MimorNode from "./MimorNode.vue"

const props = defineProps<{
  text: string
}>()

const state = reactive(
  new State({
    text: props.text,
  })
)
</script>

<template>
  <div>
    <MimorNode :mimor="state" :node="state.current" />
  </div>
</template>
