<script setup lang="ts">
import AuthorConnectionIllustration from './AuthorConnectionIllustration.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="border border-black bg-white p-3">
    <AuthorConnectionIllustration :state="state" />
  </div>
</template>
