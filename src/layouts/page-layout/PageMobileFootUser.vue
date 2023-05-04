<script setup lang="ts">
import {
  BookOpenIcon,
  HomeIcon,
  LightBulbIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { User } from '../../models/user/User'
import { username } from '../../models/user/username'
import PageMobileMenuUser from './PageMobileMenuUser.vue'

defineProps<{ user: User }>()
</script>

<template>
  <div class="flex w-full justify-between bg-white py-1">
    <Hyperlink
      href="/"
      :class="{
        'animate-jump-sm text-orange-500': $route.path === '/',
      }"
      class="flex flex-col items-center space-y-1"
    >
      <HomeIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>首页</template>
        <template #en>Home</template>
      </Lang>
    </Hyperlink>

    <Hyperlink
      :href="`/authors/${username(user)}`"
      :class="{
        'animate-jump-sm text-orange-500':
          $route.path === `/authors/${username(user)}`,
      }"
      class="flex flex-col items-center space-y-1"
    >
      <PencilIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>创作</template>
        <template #en>Create</template>
      </Lang>
    </Hyperlink>

    <PageMobileMenuUser :user="user" />

    <Hyperlink
      href="/recall"
      :class="{
        'animate-jump-sm text-orange-500': $route.path === '/recall',
      }"
      class="flex flex-col items-center space-y-1"
    >
      <LightBulbIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>回顾</template>
        <template #en>Recall</template>
      </Lang>
    </Hyperlink>

    <Hyperlink
      href="/docs"
      :class="{
        'animate-jump-sm text-orange-500': $route.path === '/docs',
      }"
      class="flex flex-col items-center space-y-1"
    >
      <BookOpenIcon class="h-6 w-6" />
      <Lang class="text-xs">
        <template #zh>文档</template>
        <template #en>Docs</template>
      </Lang>
    </Hyperlink>
  </div>
</template>
