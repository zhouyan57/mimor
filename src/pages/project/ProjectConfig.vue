<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <PageLayout>
    <div>ProjectEdit</div>
  </PageLayout>
</template>
