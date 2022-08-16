<script setup lang="ts">
import PageLayoutMenu from "./PageLayoutMenu.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex">
    <div class="text-xl pb-3 font-bold">
      <slot name="title" />
    </div>

    <PageLayoutMenu class="block md:hidden" :state="state" />
  </div>
</template>
