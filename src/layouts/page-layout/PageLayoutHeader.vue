<script setup lang="ts">
import PageLayoutMenu from "./PageLayoutMenu.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex pb-3">
    <PageLayoutMenu class="block md:hidden pr-1" :state="state" />

    <div class="text-xl font-bold">
      <slot name="title" />
    </div>
  </div>
</template>
