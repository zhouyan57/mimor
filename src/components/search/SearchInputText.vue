<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="mx-3 mb-2 mt-1 flex items-center space-x-3 border-b border-black"
    :class="{ 'border-orange-500': state.isFocused }"
  >
    <input
      class="w-full py-px font-serif focus:outline-none"
      id="searchText"
      name="searchText"
      type="text"
      v-model="state.text"
      :placeholder="lang.isZh() ? '搜索' : 'Search'"
    />

    <label for="searchText">
      <MagnifyingGlassIcon class="h-5 w-5" />
    </label>
  </div>
</template>
