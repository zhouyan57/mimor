<script setup lang="ts">
import PageLayoutControl from './PageLayoutControl.vue'
import PageLayoutHeader from './PageLayoutHeader.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutSidebar from './PageLayoutSidebar.vue'
</script>

<template>
  <div class="flex h-screen">
    <div class="hidden h-full w-72 shrink-0 flex-col p-3 md:flex">
      <div class="pb-3">
        <PageLayoutLogo />
      </div>

      <PageLayoutSidebar />
    </div>

    <div class="flex h-full w-full flex-col space-y-2 overflow-x-auto py-3">
      <PageLayoutHeader class="px-3" :state="state">
        <template #title>
          <slot name="title" />
        </template>
      </PageLayoutHeader>

      <div class="h-full w-full overflow-y-auto px-3">
        <slot />
      </div>

      <div class="fixed bottom-20 right-4 z-30 md:hidden">
        <PageLayoutControl :state="state" />
      </div>
    </div>
  </div>
</template>
