<script setup lang="ts">
import { reactive } from 'vue'
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout mode="auth">
    <Head>
      <title v-if="$app.lang.zh">配置 | 谜墨</title>
      <title v-else>Config | Mimor</title>
    </Head>

    <template #title>
      <Lang>
        <template #zh>配置</template>
        <template #en>Config</template>
      </Lang>
    </template>

    <div>TODO</div>
  </PageLayout>
</template>
