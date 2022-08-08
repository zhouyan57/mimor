<script setup lang="ts">
import { reactive } from "vue"
import PageLayoutSidebar from "./PageLayoutSidebar.vue"
import { PageLayoutState as State } from "./PageLayoutState"

const state = reactive(new State())
</script>

<template>
  <div class="flex h-screen flex-col items-center">
    <div class="flex h-full w-full justify-center p-3">
      <PageLayoutSidebar class="w-1/4" :state="state" />

      <div class="h-full w-full w-3/4 px-6">
        <slot />
      </div>
    </div>
  </div>
</template>
