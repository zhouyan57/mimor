<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onNotVisible } from '../../utils/browser/onNotVisible'
import { onVisible } from '../../utils/browser/onVisible'

const props = defineProps<{
  state: {
    isBottomVisible: boolean
  }
}>()

const element = ref<HTMLElement | undefined>(undefined)

onMounted(() => {
  if (element.value) {
    onVisible(element.value, () => {
      props.state.isBottomVisible = true
    })

    onNotVisible(element.value, () => {
      props.state.isBottomVisible = false
    })
  }
})
</script>

<template>
  <div ref="element" class="py-px"></div>
</template>
