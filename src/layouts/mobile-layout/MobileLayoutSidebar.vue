<script setup lang="ts">
import MobileLayoutLang from "./MobileLayoutLang.vue"
import MobileLayoutLogo from "./MobileLayoutLogo.vue"
import { MobileLayoutState as State } from "./MobileLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <MobileLayoutLogo :state="state" />
    <MobileLayoutLang :state="state" />
  </div>
</template>
