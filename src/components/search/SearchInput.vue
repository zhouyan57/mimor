<script setup lang="ts">
import SearchInputKeywords from './SearchInputKeywords.vue'
import SearchInputStatistics from './SearchInputStatistics.vue'
import SearchInputText from './SearchInputText.vue'
import { State } from './State'
import { stateWatch } from './stateWatch'

const props = defineProps<{ state: State }>()

stateWatch(props.state)
</script>

<template>
  <!--
       We need to use capture here,
       because focus and blur events do not bubble up.
  -->

  <div
    tabindex="-1"
    @click="state.isFocused = true"
    @focus.capture="state.isFocused = true"
    @blur.capture="state.isFocused = false"
    class="flex flex-col border border-black"
    :class="{
      'border-orange-500 ring-1 ring-orange-400': state.isFocused,
    }"
  >
    <SearchInputText :state="state" />
    <SearchInputKeywords :state="state" />
    <SearchInputStatistics :state="state" />
  </div>
</template>
