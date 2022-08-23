<script setup lang="ts">
import PageLayoutMenu from './PageLayoutMenu.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <button class="rounded-full bg-white border border-stone-300 p-3 shadow-md">
    <PageLayoutMenu :state="state" />
  </button>
</template>
