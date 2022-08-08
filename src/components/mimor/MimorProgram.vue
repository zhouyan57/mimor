<script setup lang="ts">
import MimorNode from "./MimorNode.vue"
import { MimorState as State } from "./MimorState"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <MimorNode :mimor="state" :node="state.program.current" />
  </div>
</template>
