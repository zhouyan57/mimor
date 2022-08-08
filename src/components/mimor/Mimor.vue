<script setup lang="ts">
import { reactive } from "vue"
import MimorNode from "./MimorNode.vue"
import type { MimorOptions } from "./MimorState"
import { MimorState as State } from "./MimorState"

const { options } = defineProps<{ options: MimorOptions }>()
const state = reactive(new State(options))
</script>

<template>
  <div>
    <MimorNode :mimor="state" :node="state.current" />
  </div>
</template>
