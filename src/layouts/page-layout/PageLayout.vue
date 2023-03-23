<script setup lang="ts">
import PageControl from './PageControl.vue'
import PageHead from './PageHead.vue'
import PagLogo from './PageLogo.vue'
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div class="flex h-screen">
    <div class="hidden h-full w-72 shrink-0 flex-col p-3 md:flex">
      <div class="pb-3">
        <PagLogo />
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

      <div class="fixed bottom-20 right-4 z-30 md:hidden">
        <PageControl />
      </div>
    </div>
  </div>
</template>
