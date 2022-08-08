<script setup lang="ts">
import { reactive } from "vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState }>()

const state = reactive({
  revealed: false,
})
</script>

<template>
  <div>
    <button @click="state.revealed = true">Reveal</button>
    <div v-if="state.revealed">
      <button @click="mimor.program.next()">Forgotten</button>
      <button @click="mimor.program.next()">Remembered</button>
    </div>
  </div>
</template>
