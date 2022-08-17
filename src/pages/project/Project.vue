<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: () => {
        if (!$app.auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <template #title>
      <div>{{ $route.params.name }}</div>
    </template>

    <div>
      Project
    </div>
  </PageLayout>
</template>
