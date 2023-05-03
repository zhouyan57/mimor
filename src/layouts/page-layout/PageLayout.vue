<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'
import { userAvatarURL } from '../../models/user/userAvatarURL'
import { userHasAvatar } from '../../models/user/userHasAvatar'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import PageDesktopHead from './PageDesktopHead.vue'
import PageDesktopSidebarGuest from './PageDesktopSidebarGuest.vue'
import PageDesktopSidebarLoading from './PageDesktopSidebarLoading.vue'
import PageDesktopSidebarUser from './PageDesktopSidebarUser.vue'
import PageMobileFootGuest from './PageMobileFootGuest.vue'
import PageMobileFootLoading from './PageMobileFootLoading.vue'
import PageMobileFootUser from './PageMobileFootUser.vue'

const triedToLogin = ref(false)
const auth = useGlobalAuth()

const avatarURL = ref<URL | undefined>(undefined)

onMounted(async () => {
  await loginByTokenIfNotAlready()

  if (auth.user) {
    avatarURL.value = (await userHasAvatar(auth.user))
      ? userAvatarURL(auth.user)
      : undefined
  }

  triedToLogin.value = true
})
</script>

<template>
  <div>
    <PageDesktopHead
      class="fixed left-0 top-0 hidden border-b border-black bg-white px-3 py-2 md:block"
    />

    <div class="flex h-screen pb-14 md:pb-0 md:pt-12">
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
      class="fixed bottom-0 right-0 z-10 w-full border-t border-stone-400 bg-white px-3 md:hidden"
    >
      <PageMobileFootUser
        v-if="triedToLogin && auth.user"
        :user="auth.user"
        :avatarURL="avatarURL"
      />
      <PageMobileFootLoading v-else-if="!triedToLogin" />
      <PageMobileFootGuest v-else />
    </div>
  </div>
</template>
