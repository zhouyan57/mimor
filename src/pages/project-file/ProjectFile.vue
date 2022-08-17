<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout
    :options="{
      onInitialized: async () => {
        if (!$app.auth.user) {
          $router.replace('/explore')
        }
      },
    }"
  >
    <Head>
      <title v-if="$app.lang.zh">{{ $route.params.pathParts.join('/') }} | 谜墨</title>
      <title v-else>{{ $route.params.pathParts.join('/') }} | Mimor</title>
    </Head>

    <template #title>
      <div class="font-sans">{{ $route.params.pathParts.join('/') }}</div>
    </template>

    <div>
      <div>ProjectFile</div>
      <div>{{ $route.params.name }}</div>
      <div>{{ $route.params.pathParts.join('/') }}</div>
    </div>
  </PageLayout>
</template>
