<script setup lang="ts">
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
import { stateKeywordFurtherResults } from './stateKeywordFurtherResults'
import { stateKnownKeywords } from './stateKnownKeywords'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="mx-3 flex flex-wrap py-2">
    <button
      v-for="keyword of stateKnownKeywords(state)"
      :key="keyword"
      :disabled="
        Object.keys(stateKeywordFurtherResults(state, keyword)).length === 0
      "
      class="my-1 mr-3 px-1 disabled:border-stone-400 disabled:text-stone-400"
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
      <span class="font-sans text-lg font-bold">{{ keyword }}</span>
      <span
        class="font-sans pl-1 text-lg text-stone-500"
        v-if="
          !state.keywords[keyword] &&
          Object.keys(stateKeywordFurtherResults(state, keyword)).length !== 0
        "
        >({{
          Object.keys(stateKeywordFurtherResults(state, keyword)).length
        }})</span
      >
    </button>
  </div>
</template>
