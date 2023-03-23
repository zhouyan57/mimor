<script setup lang="ts">
import PageControl from './PageControl.vue'
import PageHead from './PageHead.vue'
import PageLogo from './PageLogo.vue'
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div class="flex h-screen">
    <!-- desktop -->
    <div class="hidden h-full w-72 shrink-0 flex-col p-3 md:flex">
      <div class="flex items-center space-x-1 pb-3">
        <PageLogo class="text-2xl" />
        <div
          class="font-mono text-sm text-stone-500"
          title="This is an alpha release, we develop as we use it."
        >
          alpha
        </div>
      </div>

      <PageSidebar />
    </div>

    <div class="flex h-full w-full flex-col space-y-2 overflow-x-auto py-3">
      <PageHead class="px-3">
        <template #title>
          <slot name="title" />
        </template>
      </PageHead>

      <div class="h-full w-full overflow-y-auto px-3">
        <slot />
      </div>

      <!-- mobile -->
      <div class="fixed bottom-20 right-4 z-30 md:hidden">
        <PageControl />
      </div>
    </div>
  </div>
</template>
