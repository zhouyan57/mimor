<script setup lang="ts">
import PageLogo from './PageLogo.vue'
import PageMenu from './PageMenu.vue'
</script>

<template>
  <div class="flex w-full items-center">
    <PageMenu class="block pr-1 md:hidden" />

    <div
      class="w-full overflow-x-auto overflow-y-hidden font-logo text-2xl font-bold"
    >
      <slot name="title">
        <div class="block md:hidden">
          <PageLogo />
        </div>
      </slot>
    </div>
  </div>
</template>
