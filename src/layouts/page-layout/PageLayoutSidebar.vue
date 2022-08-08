<script setup lang="ts">
import PageLayoutLang from "./PageLayoutLang.vue"
import PageLayoutLogo from "./PageLayoutLogo.vue"
import PageLayoutMenu from "./PageLayoutMenu.vue"
import { PageLayoutState as State } from "./PageLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex flex-col w-full items-start px-4 pt-3 md:py-4"
    :class="['justify-between', state.classes.transition]"
  >
    <PageLayoutLogo :state="state" />
    <div class="flex flex-col items-start space-x-2">
      <PageLayoutLang :state="state" />
      <PageLayoutMenu :state="state" />
    </div>
  </div>
</template>
