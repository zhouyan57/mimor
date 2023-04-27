<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import PageDesktopHead from './PageDesktopHead.vue'
import PageDesktopSidebarGuest from './PageDesktopSidebarGuest.vue'
import PageDesktopSidebarLoading from './PageDesktopSidebarLoading.vue'
import PageDesktopSidebarUser from './PageDesktopSidebarUser.vue'
import PageMobileFootGuest from './PageMobileFootGuest.vue'
import PageMobileFootLoading from './PageMobileFootLoading.vue'
import PageMobileFootUser from './PageMobileFootUser.vue'
import PageMobileHead from './PageMobileHead.vue'

const triedToLogin = ref(false)
const auth = useGlobalAuth()

onMounted(async () => {
  await loginByTokenIfNotAlready()

  triedToLogin.value = true
})
</script>

<template>
  <div>
    <PageDesktopHead
      class="fixed left-0 top-0 hidden border-b border-black px-3 py-2 md:block"
    />

    <PageMobileHead
      class="fixed left-0 top-0 block border-b border-stone-400 bg-white px-3 py-0.5 md:hidden"
    />

    <div class="flex h-screen pb-14 pt-8 md:pb-0 md:pt-12">
      <div class="hidden h-full w-[25rem] shrink-0 flex-col p-3 md:flex">
        <PageDesktopSidebarUser v-if="auth.user" :user="auth.user" />
        <PageDesktopSidebarLoading v-else-if="!triedToLogin" />
        <PageDesktopSidebarGuest v-else />
      </div>

      <div class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto">
        <slot />
      </div>
    </div>

    <div
      class="fixed bottom-0 right-0 w-full border-t border-stone-400 px-3 md:hidden"
    >
      <PageMobileFootUser v-if="auth.user" :user="auth.user" />
      <PageMobileFootLoading v-else-if="!triedToLogin" />
      <PageMobileFootGuest v-else />
    </div>
  </div>
</template>
