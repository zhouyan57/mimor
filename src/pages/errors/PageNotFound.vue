<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'

function formatSlugs(slugs: string | Array<string>): string {
  return typeof slugs === 'string' ? slugs : slugs.join('/')
}
</script>

<template>
  <div class="py-20 mx-auto flex h-full max-w-md flex-col">
    <Head>
      <title v-if="$app.lang.zh">404 | 谜墨</title>
      <title v-else>404 | Mimor</title>
    </Head>

    <div class="flex flex-col space-y-2">
      <div class="text-3xl font-bold">404</div>
      <div class="text-xl">
        <Lang>
          <template #zh>没有这个页面</template>
          <template #en>Page Not Found</template>
        </Lang>
      </div>
      <div class="text-lg">
        <Lang>
          <template #zh>路径：/{{ formatSlugs($route.params.slugs) }}</template>
          <template #en>Path: /{{ formatSlugs($route.params.slugs) }}</template>
        </Lang>
      </div>
    </div>
  </div>
</template>
