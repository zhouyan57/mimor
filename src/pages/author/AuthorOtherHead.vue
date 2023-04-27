<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="text-2xl font-bold">{{ state.username }}</div>
</template>
