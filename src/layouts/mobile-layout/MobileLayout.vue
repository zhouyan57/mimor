<script setup lang="ts">
import { reactive } from "vue"
import { MobileLayoutState as State } from "./MobileLayoutState"

const state = reactive(new State())
</script>

<template>
  <div class="flex min-h-screen flex-col items-center">
    <div class="h-full w-full p-2">
      <slot />
    </div>
  </div>
</template>
