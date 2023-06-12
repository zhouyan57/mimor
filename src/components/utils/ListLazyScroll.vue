<script setup lang="ts">
import { reactive } from 'vue'
import ListLazyScrollBottom from './ListLazyScrollBottom.vue'

/*

   List of entries lazy load when scroll to the bottom.

*/

defineProps<{
  entries: Array<any>
}>()

const state = reactive({
  isBottomVisible: false,
})
</script>

<template>
  <ul>
    <li v-for="(entry, index) of entries" :key="index">
      <slot name="entry" :entry="entry" />
    </li>

    <li>
      <ListLazyScrollBottom :state="state" />
    </li>
  </ul>
</template>
