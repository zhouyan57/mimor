<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { isVisible } from '../../utils/browser/isVisible'
import { onVisible } from '../../utils/browser/onVisible'

/*

   List of entries, load more when scroll to the bottom.

*/

const props = defineProps<{
  entries: Array<any>
  chunkSize: number
  eagerLoadAll?: boolean
}>()

const bottomElement = ref<HTMLElement | undefined>(undefined)

const shownEntries: Array<any> = reactive([])

function showMoreEntries() {
  shownEntries.push(
    ...props.entries.slice(
      shownEntries.length,
      shownEntries.length + props.chunkSize,
    ),
  )
}

watch(
  () => props.entries,
  () => {
    if (props.eagerLoadAll) {
      console.log({
        who: 'ListLazyScroll',
        message: 'eagerLoadAll on props.entries change',
      })

      while (shownEntries.length < props.entries.length) {
        showMoreEntries()
      }
    } else {
      while (shownEntries.pop()) {}

      shownEntries.push(...props.entries.slice(0, props.chunkSize))
    }
  },
  { immediate: true },
)

watch(
  () => props.eagerLoadAll,
  (value) => {
    if (value) {
      console.log({
        who: 'ListLazyScroll',
        message: 'eagerLoadAll on props.eagerLoadAll change',
      })

      while (shownEntries.length < props.entries.length) {
        showMoreEntries()
      }
    }
  },
)

onMounted(() => {
  if (bottomElement.value) {
    if (isVisible(bottomElement.value)) showMoreEntries()
    onVisible(bottomElement.value, () => showMoreEntries())
  }
})
</script>

<template>
  <ul>
    <li v-for="(entry, index) of shownEntries" :key="index">
      <slot name="entry" :entry="entry" />
    </li>

    <li ref="bottomElement">
      <slot name="bottom" :isFinished="entries.length === shownEntries.length">
        <div class="py-px"></div>
      </slot>
    </li>
  </ul>
</template>
