<script setup lang="ts">
import { reactive } from "vue"
import { MobileLayoutState as State } from "./MobileLayoutState"

const state = reactive(new State())
</script>

<template>
  <div class="flex h-screen flex-col items-center p-2">
    <div class="h-full w-full">
      <slot />
    </div>
  </div>
</template>
