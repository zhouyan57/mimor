<script setup lang="ts">
import PageLogo from './PageLogo.vue'
</script>

<template>
  <div class="flex w-full items-center">
    <div
      class="w-full overflow-x-auto overflow-y-hidden font-logo text-2xl font-bold"
    >
      <slot name="title" />
    </div>

    <div class="flex items-center space-x-1 md:hidden">
      <PageLogo class="text-xl" />
      <div
        class="font-mono text-sm text-stone-500"
        title="This is an alpha release, we develop as we use it."
      >
        alpha
      </div>
    </div>
  </div>
</template>
