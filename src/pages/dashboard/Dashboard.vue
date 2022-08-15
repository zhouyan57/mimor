<script setup lang="ts">
import { onMounted, reactive } from "vue"
import Mimor from "../../components/mimor/Mimor.vue"
import PageLayout from "../../layouts/page-layout/PageLayout.vue"

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

async function load() {
  await loadText()
  state.loading = false
}

async function loadText() {
  const response = await fetch("/contents/causal-reasoning.mimor")
  const text = await response.text()
  state.text = text
}

onMounted(() => load())
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: ({ auth }) => {
        if (!auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <div class="h-full flex flex-col">
      <div class="text-3xl">Demo</div>

      <div v-if="state.loading">Loading...</div>

      <Mimor
        v-else-if="!state.finished"
        class="h-full"
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

        <button class="text-2xl border p-2" @click="again()">Again</button>
      </div>
    </div>
  </PageLayout>
</template>
