<script setup lang="ts">
import { reactive } from "vue"
import { MimorState as State } from "./MimorState"

const state = reactive(new State())
</script>

<template>
  <div>Mimor</div>
</template>
