<script setup lang="ts">
import { Head } from '@vueuse/head'
import { FileState as State } from './FileState'

defineProps<{ state: State }>()
</script>

<template>
  <Head v-if="state.path">
    <title v-if="$app.lang.zh">{{ state.path }} | 谜墨</title>
    <title v-else>{{ state.path }} | Mimor</title>
  </Head>
</template>
