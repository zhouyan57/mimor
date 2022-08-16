<script setup lang="ts">
import { PageLayoutState as State } from "./PageLayoutState"
import PageLayoutMenu from "./PageLayoutMenu.vue"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <PageLayoutMenu :state="state" />
  </div>
</template>
