<script setup lang="ts">
import { onMounted } from 'vue'

type MaybePromise<T> = Promise<T> | T

const props = defineProps<{
  effect: () => MaybePromise<void>
}>()

onMounted(async () => {
  await props.effect()
})
</script>

<template></template>
