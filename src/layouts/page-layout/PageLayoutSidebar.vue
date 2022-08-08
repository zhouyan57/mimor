<script setup lang="ts">
import PageLayoutLang from "./PageLayoutLang.vue"
import PageLayoutLogo from "./PageLayoutLogo.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-2" :class="[state.classes.transition]">
    <PageLayoutLogo :state="state" />
    <PageLayoutLang :state="state" />
  </div>
</template>
