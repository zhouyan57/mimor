<script setup lang="ts">
import { User } from '../../models/User'
import PageMobileMenuUser from './PageMobileMenuUser.vue'

defineProps<{ user: User }>()
</script>

<template>
  <div class="flex w-full justify-between bg-white px-4 py-1 opacity-90">
    <div></div>
    <PageMobileMenuUser class="border border-stone-300 p-2" :user="user" />
    <div></div>
  </div>
</template>
