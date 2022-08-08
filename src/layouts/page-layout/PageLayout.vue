<script setup lang="ts">
import { reactive } from "vue"
import PageLayoutSidebar from "./PageLayoutSidebar.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const state = reactive(new State())
</script>

<template>
  <div class="flex min-h-screen flex-col items-center">
    <div class="flex w-full justify-center p-3">
      <PageLayoutSidebar class="hidden md:block w-1/4" :state="state" />

      <div class="h-full w-full md:w-3/4 px-6">
        <slot />
      </div>
    </div>
  </div>
</template>
