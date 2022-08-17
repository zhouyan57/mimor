<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/Lang.vue'

function formatSlugs(slugs: string | Array<string>): string {
  return typeof slugs === 'string' ? slugs : slugs.join('/')
}
</script>

<template>
  <div class="py-20 mx-auto px-3 w-full flex h-full max-w-md flex-col">
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
      <div>
        <Lang>
          <template #zh>路径：</template>
          <template #en>Path: </template>
        </Lang>
        <div class="px-3 font-bold text-sm">
          /{{ formatSlugs($route.params.slugs) }}
        </div>
      </div>
    </div>
  </div>
</template>
