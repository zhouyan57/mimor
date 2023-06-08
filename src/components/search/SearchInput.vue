<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'
import { stateWatch } from './stateWatch'

const props = defineProps<{ state: State }>()

const lang = useGlobalLang()

stateWatch(props.state)
</script>

<template>
  <!--
       We need to use capture here,
       because focus and blur events do not bubble up.
  -->

  <div
    tabindex="-1"
    @click="state.isSearching = true"
    @focus.capture="state.isSearching = true"
    @blur.capture="state.isSearching = false"
    class="flex flex-col border border-black"
    :class="{
      'border-orange-500 ring-1 ring-orange-400': state.isSearching,
    }"
  >
    <div
      class="mx-3 mb-2 mt-1 flex items-center space-x-3 border-b border-black"
      :class="{ 'border-orange-500': state.isSearching }"
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
  </div>
</template>
