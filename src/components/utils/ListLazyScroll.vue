<script setup lang="ts">
import { reactive, watch } from 'vue'
import ListLazyScrollBottom from './ListLazyScrollBottom.vue'

/*

   List of entries lazy load when scroll to the bottom.

*/

const props = defineProps<{
  entries: Array<any>
  chunkSize: number
}>()

const state = reactive({
  isBottomVisible: false,
})

const shownEntries = reactive(props.entries.slice(0, props.chunkSize))

watch(
  () => state.isBottomVisible,
  (value) => {
    if (!value) return
    if (shownEntries.length === props.entries.length) return

    const newEntries = props.entries.slice(
      shownEntries.length,
      shownEntries.length + props.chunkSize,
    )

    shownEntries.push(...newEntries)
  },
)
</script>

<template>
  <ul>
    <li v-for="(entry, index) of shownEntries" :key="index">
      <slot name="entry" :entry="entry" />
    </li>

    <li>
      <ListLazyScrollBottom :state="state" />
    </li>
  </ul>
</template>
