<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex space-x-2">
    <div v-if="state.avatarURL">
      <img
        class="h-[6rem] w-[6rem]"
        :alt="`Avatar of ${state.username}`"
        :src="state.avatarURL.href"
      />
    </div>

    <div class="flex flex-col">
      <div class="text-2xl font-bold">{{ state.user.name }}</div>
      <div class="text-xl">{{ state.username }}</div>
    </div>
  </div>
</template>
