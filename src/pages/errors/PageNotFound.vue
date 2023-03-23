<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'

const route = useRoute()
</script>

<template>
  <div class="mx-auto flex h-full w-full max-w-md flex-col py-20 px-3">
    <Head>
      <title v-if="$app.lang.zh">404 | 谜墨</title>
      <title v-else>404 | Mimor</title>
    </Head>

    <div class="flex flex-col space-y-2">
      <div class="text-3xl font-bold">404</div>

      <div class="text-xl font-bold">
        <Lang>
          <template #zh>没有这个页面</template>
          <template #en>Page Not Found</template>
        </Lang>
      </div>

      <div class="overflow-x-auto font-mono text-sm">{{ route.fullPath }}</div>
    </div>
  </div>
</template>
