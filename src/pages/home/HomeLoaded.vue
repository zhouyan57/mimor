<script setup lang="ts">
import { reactive } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeAuthors from './HomeAuthors.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
</script>

<template>
  <PageLayout>
    <div class="flex flex-col overflow-y-auto p-3">
      <HomeAuthors :state="state" />
    </div>
  </PageLayout>
</template>
