<script setup lang="ts">
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import PageDesktopHead from './PageDesktopHead.vue'
import PageDesktopSidebarGuest from './PageDesktopSidebarGuest.vue'
import PageDesktopSidebarUser from './PageDesktopSidebarUser.vue'
import PageMobileFootGuest from './PageMobileFootGuest.vue'
import PageMobileFootUser from './PageMobileFootUser.vue'
import PageMobileHead from './PageMobileHead.vue'

const auth = useGlobalAuth()
</script>

<template>
  <PageDesktopHead
    class="fixed left-0 top-0 hidden border-b border-black px-4 py-2 md:block"
  />

  <PageMobileHead
    class="fixed left-0 top-0 block border-b border-stone-300 bg-white px-4 py-0.5 md:hidden"
  />

  <div class="flex h-full pb-14 pt-8 md:h-screen md:pb-0 md:pt-12">
    <div class="hidden h-full w-[25rem] shrink-0 flex-col px-4 py-3 md:flex">
      <PageDesktopSidebarUser v-if="auth.user" :user="auth.user" />
      <PageDesktopSidebarGuest v-else />
    </div>

    <div
      class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto p-4"
    >
      <slot />
    </div>
  </div>

  <div
    class="fixed bottom-0 right-0 w-full border-t border-stone-300 px-4 md:hidden"
  >
    <PageMobileFootUser v-if="auth.user" :user="auth.user" />
    <PageMobileFootGuest v-else />
  </div>
</template>
