<script setup lang="ts">
import PageLogo from './PageLogo.vue'
</script>

<template>
  <div class="flex w-full justify-between">
    <div class="flex items-center space-x-1">
      <PageLogo class="text-2xl" />
      <div
        class="font-mono text-sm text-stone-500"
        title="This is an alpha release, we develop as we use it."
      >
        alpha
      </div>
    </div>

    <div class="overflow-x-auto overflow-y-hidden font-logo text-2xl font-bold">
      <slot name="title" />
    </div>
  </div>
</template>
