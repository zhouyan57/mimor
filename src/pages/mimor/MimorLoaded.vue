<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <Mimor
    class="h-screen w-screen"
    :options="{
      src: state.src,
      withMetaThemeColor: true,
    }"
  />
</template>
