<script setup lang="ts">
import { reactive } from 'vue'
import Mimor from '../../components/mimor/Mimor.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <Mimor
    class="h-screen-dynamic w-screen"
    :src="state.src"
    :withMetaThemeColor="true"
  />
</template>
