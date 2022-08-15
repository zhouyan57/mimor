<script setup lang="ts">
import { onMounted, reactive } from "vue"
import Mimor from "../../components/mimor/Mimor.vue"
import PageLayout from "../../layouts/page-layout/PageLayout.vue"
import { ExploreState as State } from "./ExploreState"

const state = reactive(new State())

onMounted(() => state.load())
</script>

<template>
  <PageLayout>
    <div class="h-full flex flex-col">
      <div class="text-2xl">Explore</div>

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

        <button class="text-2xl border p-2" @click="state.again()">Again</button>
      </div>
    </div>
  </PageLayout>
</template>
