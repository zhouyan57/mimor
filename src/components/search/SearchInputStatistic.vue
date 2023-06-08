<script setup lang="ts">
// import { } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="mx-3 flex items-center">
    <div>SearchInputStatistic</div>
  </div>
</template>
