<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="$app.lang.zh">作者 | 谜墨</title>
      <title v-else>Authors | Mimor</title>
    </Head>

    <template #title>
      <div class="flex items-center space-x-2">
        <Lang>
          <template #zh>作者</template>
          <template #en>Authors</template>
        </Lang>
      </div>
    </template>

    TODO
  </PageLayout>
</template>
