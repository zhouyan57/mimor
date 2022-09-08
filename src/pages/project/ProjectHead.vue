<script setup lang="ts">
import { Head } from '@vueuse/head'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <Head>
    <title v-if="$app.lang.zh">
      {{ state.username }}/{{ state.name }} | 谜墨
    </title>
    <title v-else>{{ state.username }}/{{ state.name }} | Mimor</title>
  </Head>
</template>
