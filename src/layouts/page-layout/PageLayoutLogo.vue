<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <Hyperlink href="/" class="font-logo text-2xl font-bold hover:underline">
    <div>{{ lang.isZh() ? '迷墨' : 'Mimor' }}</div>
  </Hyperlink>
</template>
