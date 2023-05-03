<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const containerElement = ref<HTMLDivElement | undefined>(undefined)

const props = defineProps<{ element: HTMLElement }>()

onMounted(() => {
  if (!containerElement.value) return

  while (containerElement.value.lastChild) {
    containerElement.value.removeChild(containerElement.value.lastChild)
  }

  containerElement.value.appendChild(props.element)
})

watch(
  () => props.element,
  () => {
    if (!containerElement.value) return

    while (containerElement.value.lastChild) {
      containerElement.value.removeChild(containerElement.value.lastChild)
    }

    containerElement.value.appendChild(props.element)
  },
)
</script>

<template>
  <div ref="containerElement"></div>
</template>
