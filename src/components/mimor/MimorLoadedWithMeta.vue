<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import MimorLoaded from './MimorLoaded.vue'
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
  <div>
    <Head>
      <meta name="theme-color" :content="state.themeColor" />
    </Head>

    <MimorLoaded class="h-full" :state="state" />
  </div>
</template>
