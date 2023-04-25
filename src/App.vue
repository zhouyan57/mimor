<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted } from 'vue'
import { useGlobalLang } from './components/lang/useGlobalLang'
import { loginByTokenIfNotAlready } from './reactives/loginByTokenIfNotAlready'

const lang = useGlobalLang()

onMounted(() => loginByTokenIfNotAlready())
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">谜墨</title>
    <title v-else>Mimor</title>
  </Head>

  <RouterView />
</template>
