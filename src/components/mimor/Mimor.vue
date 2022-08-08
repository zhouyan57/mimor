<script setup lang="ts">
import { reactive } from "vue"
import MimorProgram from "./MimorProgram.vue"
import { MimorState as State } from "./MimorState"

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
    <MimorProgram :state="state" />
  </div>
</template>
