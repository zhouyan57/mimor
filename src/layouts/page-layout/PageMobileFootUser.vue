<script setup lang="ts">
import { BookOpenIcon, HomeIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/lang/Lang.vue'
import { User } from '../../models/User'
import PageMobileMenuUser from './PageMobileMenuUser.vue'

defineProps<{ user: User }>()
</script>

<template>
  <div class="flex h-full w-full justify-between bg-white py-1 opacity-95">
    <Hyperlink
      href="/"
      class="flex flex-col items-center space-y-1 text-stone-400"
    >
      <HomeIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </Hyperlink>

    <PageMobileMenuUser class="border border-stone-300 p-2" :user="user" />

    <Hyperlink
      href="/docs"
      class="flex flex-col items-center space-y-1 text-stone-400"
    >
      <BookOpenIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>文档</template>
        <template #en>Docs</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
