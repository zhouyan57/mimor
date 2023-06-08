<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="border border-black px-3 py-2">
    <div>SearchInput</div>

    <MagnifyingGlassIcon class="h-5 w-5" />
  </div>
</template>
