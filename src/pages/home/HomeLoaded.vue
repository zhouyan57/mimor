<script setup lang="ts">
import { reactive } from 'vue'
import Mimor from '../../components/mimor/Mimor.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <PageLayout>
    <div class="flex flex-col space-y-3 overflow-y-auto p-3">
      <Mimor
        class="h-[34rem] max-w-[47rem] shrink-0"
        v-for="(src, index) of state.list"
        :key="index"
        :src="src"
      />
    </div>
  </PageLayout>
</template>
