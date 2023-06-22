<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { onVisible } from '../../utils/browser/onVisible'
import { onNotVisible } from '../../utils/browser/onNotVisible'

const props = defineProps<{ state: State }>()

const containerElement = ref<HTMLElement | undefined>(undefined)

async function maybeScrollIntoView(): Promise<void> {
  if (containerElement.value) {
    await nextTick()
    containerElement.value.scrollIntoView()
  }
}

watch(() => props.state.scrollToTopTick, maybeScrollIntoView)

onMounted(() => {
  if (containerElement.value) {
    onVisible(containerElement.value, () => {
      props.state.isAtTheTop = true
    })

    onNotVisible(containerElement.value, () => {
      props.state.isAtTheTop = false
    })
  }
})
</script>

<template>
  <div ref="containerElement"></div>
</template>
