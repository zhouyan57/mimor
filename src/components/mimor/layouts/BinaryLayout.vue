<script setup lang="ts">
import { reactive } from "vue"
import { MimorState } from "../MimorState"

const { mimor } = defineProps<{ mimor: MimorState }>()

const state = reactive({
  revealed: false,
})

function next() {
  state.revealed = false
  mimor.next()
}
</script>

<template>
  <div>
    Mimor

    <slot :revealed="state.revealed" />

    <button v-if="!state.revealed" @click="state.revealed = true">
      Reveal
    </button>

    <div v-else>
      <button @click="next()">Forgotten</button>
      <button @click="next()">Remembered</button>
    </div>
  </div>
</template>
