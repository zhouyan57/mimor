<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { wait } from '../../utils/wait'
import RecallEntryMimor from './RecallEntryMimor.vue'
import RecallEntryInfo from './RecallEntryInfo.vue'
import { State } from './State'
import { Entry } from './Entry'

const props = defineProps<{
  state: State
  entry: Entry
}>()

const containerElement = ref<HTMLElement | undefined>(undefined)

async function maybeScrollIntoView(): Promise<void> {
  if (props.state.focusedPath === props.entry.path) {
    if (containerElement.value) {
      await nextTick()
      await wait(200)
      containerElement.value.scrollIntoView()
    }
  }
}

onMounted(maybeScrollIntoView)

watch(() => props.state.focusedPath, maybeScrollIntoView)
</script>

<template>
  <div ref="containerElement" class="flex flex-col">
    <div class="flex flex-col space-y-1 py-2">
      <RecallEntryInfo :state="state" :entry="entry" />
    </div>

    <RecallEntryMimor :state="state" :entry="entry" />
  </div>
</template>
