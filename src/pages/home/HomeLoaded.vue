<script setup lang="ts">
import { reactive } from 'vue'
import Mimor from '../../components/mimor/Mimor.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <div class="flex flex-col space-y-4">
    <Mimor
      class="h-[34rem] max-w-[47rem] rounded border border-stone-500"
      v-for="(url, index) of state.list"
      :key="index"
      :options="{ url }"
    />
  </div>
</template>
