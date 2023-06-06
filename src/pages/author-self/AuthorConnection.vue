<script setup lang="ts">
import AuthorConnectionDirectory from './AuthorConnectionDirectory.vue'
import AuthorConnectionIllustration from './AuthorConnectionIllustration.vue'
import { Connection } from './Connection'
import { State } from './State'

defineProps<{
  state: State
  connection: Connection
}>()
</script>

<template>
  <div class="flex flex-col space-y-3 border border-black bg-white p-3">
    <AuthorConnectionIllustration :state="state" :connection="connection" />
    <AuthorConnectionDirectory :state="state" :connection="connection" />
  </div>
</template>
