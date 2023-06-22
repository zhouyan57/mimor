<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

const props = defineProps<{ state: State }>()

const containerElement = ref<HTMLElement | undefined>(undefined)

async function maybeScrollIntoView(): Promise<void> {
  if (containerElement.value) {
    await nextTick()
    containerElement.value.scrollIntoView()
  }
}

watch(() => props.state.scrollToTopTick, maybeScrollIntoView)
</script>

<template>
  <div ref="containerElement"></div>
</template>
