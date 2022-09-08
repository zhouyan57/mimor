<script setup lang="ts">
import { Head } from '@vueuse/head'
import { ProjectListState as State } from './ProjectListState'

defineProps<{ state: State }>()
</script>

<template>
  <Head>
    <title v-if="$app.lang.zh">项目 | 谜墨</title>
    <title v-else>Projects | Mimor</title>
  </Head>
</template>
