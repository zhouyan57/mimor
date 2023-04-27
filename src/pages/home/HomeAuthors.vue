<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-3 overflow-y-auto">
    <div v-for="username of state.usernames" class="">{{ username }}</div>
  </div>
</template>
