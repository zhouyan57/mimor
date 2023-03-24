<script setup lang="ts">
import { watch } from 'vue'

type MaybePromise<T> = Promise<T> | T

const props = defineProps<{
  value: any
  effect: (value: any) => MaybePromise<void>
  immediate?: boolean
  deep?: boolean
}>()

watch(
  () => props.value,
  async (value) => {
    await props.effect(value)
  },
  {
    immediate: props.immediate,
    deep: props.deep,
  },
)
</script>

<template></template>
