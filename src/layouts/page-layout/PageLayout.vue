<script setup lang="ts">
import { reactive } from "vue"
import PageLayoutSidebar from "./PageLayoutSidebar.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const state = reactive(new State())
</script>

<template>
  <div class="flex h-screen p-3">
    <PageLayoutSidebar class="w-1/4 md:block hidden" :state="state" />

    <div class="h-full md:w-3/4 md:px-6">
      <slot />
    </div>
  </div>
</template>
