<script setup lang="ts">
// import { } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="mx-3 mb-2 mt-1 flex flex-wrap items-center"
    :class="{ 'border-orange-500': state.isFocused }"
  >
    SearchInputKeywords
  </div>
</template>
