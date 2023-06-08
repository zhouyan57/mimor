<script setup lang="ts">
// import { } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
import { stateKnownKeywords } from './stateKnownKeywords'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="mx-3 flex flex-wrap items-center">
    <div
      v-for="keyword of stateKnownKeywords(state)"
      :key="keyword"
      class="mr-3 border border-dashed border-black px-1 font-sans text-lg font-bold"
    >
      {{ keyword }}
    </div>
  </div>
</template>
