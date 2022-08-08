<script setup lang="ts">
import { Head } from "@vueuse/head"
import { reactive } from "vue"
import PageLayoutSidebar from "./PageLayoutSidebar.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const state = reactive(new State())
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center"
    :class="[
      state.classes.transition,
      `bg-${state.theme.name}-50 text-${state.theme.name}-900`,
    ]"
  >
    <Head>
      <title v-if="state.formatTitle()">{{ state.formatTitle() }}</title>
      <meta name="theme-color" :content="state.theme.backgroundColor" />
    </Head>

    <div class="flex w-full justify-center p-3">
      <PageLayoutSidebar class="hidden md:block w-1/4" :state="state" />

      <div class="md:border-l-2 h-full w-full md:w-3/4 px-3">
        <slot />
      </div>
    </div>
  </div>
</template>
