<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import { User } from '../../models/User'
import PageLang from './PageLang.vue'

defineProps<{ user: User }>()
</script>

<template>
  <div class="flex h-full flex-col justify-between pr-4">
    <div class="flex flex-col items-start space-y-2 pb-2 text-2xl">
      <Hyperlink href="/" class="hover:underline">
        <Lang>
          <template #zh>首页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <Hyperlink href="/docs" class="hover:underline">
        <Lang>
          <template #zh>文档</template>
          <template #en>Docs</template>
        </Lang>
      </Hyperlink>

      <Hyperlink href="/about" class="hover:underline">
        <Lang>
          <template #zh>关于</template>
          <template #en>About</template>
        </Lang>
      </Hyperlink>

      <PageLang />
    </div>

    <div class="flex border-t border-stone-500 pt-2 text-2xl">
      <div class="font-bold">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>
