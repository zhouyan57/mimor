<script setup lang="ts">
import { Head } from '@vueuse/head'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <Head>
    <meta name="theme-color" :content="state.themeColor" />
  </Head>
</template>
