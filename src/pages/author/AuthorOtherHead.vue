<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { userAvatarURL } from '../../models/user/userAvatarURL'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex space-x-2">
    <img
      class="h-[5.4rem] w-[5.4rem]"
      :alt="`Avatar of ${state.username}`"
      :src="userAvatarURL(state.user).href"
      onerror="this.onerror=null; this.src='/contents/assets/images/user-icon.svg'"
    />

    <div class="flex flex-col">
      <div class="text-2xl font-bold">{{ state.user.name }}</div>
      <div class="text-xl">{{ state.username }}</div>
    </div>
  </div>
</template>
