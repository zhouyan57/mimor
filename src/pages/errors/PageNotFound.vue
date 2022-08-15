<script setup lang="ts">
import { Head } from "@vueuse/head"
import { useRoute } from "vue-router"
import Lang from "../../components/Lang.vue"

const route = useRoute()
const { slugs } = route.params
const path = typeof slugs === "string" ? slugs : slugs.join("/")
</script>

<template>
  <div
    class="py-20 mx-auto flex h-full max-w-md flex-col justify-center text-center"
  >
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
          <template #zh>路径：/{{ path }}</template>
          <template #en>Path: /{{ path }}</template>
        </Lang>
      </div>
    </div>
  </div>
</template>
