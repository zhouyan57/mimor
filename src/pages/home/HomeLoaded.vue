<script setup lang="ts">
import { reactive } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <div class="flex h-full flex-col text-xl">
    <div v-for="(url, index) of state.list" :key="index">
      <Hyperlink
        :href="`/mimors/${url}`"
        class="font-mono text-sm hover:underline"
      >
        {{ url }}
      </Hyperlink>
    </div>
  </div>
</template>
