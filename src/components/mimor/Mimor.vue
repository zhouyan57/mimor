<script setup lang="ts">
import { reactive } from "vue"
import MimorProgram from "./MimorProgram.vue"
import { MimorState as State } from "./MimorState"

const state = reactive(new State())
</script>

<template>
  <div>
    <MimorProgram :state="state" />
  </div>
</template>
