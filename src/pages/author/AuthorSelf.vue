<script setup lang="ts">
import AuthorSelfLoaded from './AuthorSelfLoaded.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <AuthorSelfLoaded :state="state" />
</template>
