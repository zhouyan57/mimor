<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalLang } from './components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谜墨</title>
    <title v-else>Mimor</title>
  </Head>

  <RouterView />
</template>
