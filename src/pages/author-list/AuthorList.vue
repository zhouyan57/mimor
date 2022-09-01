<script setup lang="ts">
import { reactive } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <template #title>
      <Lang class="font-logo">
        <template #zh>作者</template>
        <template #en>Authors</template>
      </Lang>
    </template>

    <div class="flex h-full flex-col text-xl">TODO</div>
  </PageLayout>
</template>
