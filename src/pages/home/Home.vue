<script setup lang="ts">
import { reactive, onMounted } from "vue"
import Mimor from "../../components/mimor/Mimor.vue"

const state = reactive({
  finished: false,
  flag: true,
  text: "",
  loading: true,
})

function again() {
  state.finished = false
  state.flag = !state.flag
}

async function loadText() {
  const response = await fetch("/examples/sisuo.mimor")
  const text = await response.text()
  console.log({ text })
  state.text = text
  state.loading = false
}

onMounted(() => {
  loadText()
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="text-3xl">Demo 1</div>

    <div v-if="state.loading">Loading...</div>

    <Mimor
      v-else-if="!state.finished"
      class="h-full overflow-hidden"
      :key="state.flag.toString()"
      :options="{
        text: state.text,
        onFinished: () => {
          state.finished = true
        },
      }"
    />

    <div v-else class="h-full flex flex-col items-start justify-between">
      <div></div>

      <div class="flex w-full justify-center">
        <div class="text-4xl">The End</div>
      </div>

      <button class="text-2xl border p-2 border-stone-400" @click="again()">
        Again
      </button>
    </div>
  </div>
</template>
