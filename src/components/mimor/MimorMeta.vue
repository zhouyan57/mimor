<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

watch(
  () => props.state.program?.pointer,
  () => {
    props.state.themeColor = props.state.withMetaThemeColor
      ? props.state.theme.colors[300]
      : '#ffffff'
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <Head>
    <meta name="theme-color" :content="state.themeColor" />
  </Head>
</template>
