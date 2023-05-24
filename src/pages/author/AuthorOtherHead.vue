<script setup lang="ts">
import { Base64 } from 'js-base64'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex space-x-2">
    <img
      v-if="state.user.avatar"
      class="h-[5.4rem] w-[5.4rem]"
      :alt="`Avatar of ${state.username}`"
      :src="`data:text/markdown;base64,${Base64.fromUint8Array(
        state.user.avatar,
      )}`"
    />

    <div class="flex flex-col">
      <div class="text-2xl font-bold">{{ state.user.name }}</div>
      <div class="text-xl">{{ state.username }}</div>
    </div>
  </div>
</template>
