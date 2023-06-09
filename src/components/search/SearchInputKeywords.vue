<script setup lang="ts">
// import { } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
import { stateKnownKeywords } from './stateKnownKeywords'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="mx-3 flex flex-wrap py-2">
    <div
      v-for="keyword of stateKnownKeywords(state)"
      :key="keyword"
      class="my-1 mr-3 px-1 font-sans text-lg font-bold"
      :class="{
        'border border-dashed border-black': !state.keywords[keyword],
        'border border-orange-500 text-orange-500': state.keywords[keyword],
      }"
      @click="
        state.keywords[keyword]
          ? delete state.keywords[keyword]
          : (state.keywords[keyword] = true)
      "
    >
      {{ keyword }}
    </div>
  </div>
</template>
