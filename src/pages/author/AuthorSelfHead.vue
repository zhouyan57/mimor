<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/outline'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <LinkIcon class="h-5 w-5" />
  </div>
</template>
