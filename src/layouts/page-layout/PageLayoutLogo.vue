<script setup lang="ts">
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <Hyperlink href="/" class="font-logo text-2xl font-bold hover:underline">
    <div>{{ $app.name }}</div>
  </Hyperlink>
</template>
