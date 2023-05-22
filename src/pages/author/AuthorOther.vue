<script setup lang="ts">
import AuthorOhterLoaded from './AuthorOhterLoaded.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <AuthorOhterLoaded :state="state" />
</template>
