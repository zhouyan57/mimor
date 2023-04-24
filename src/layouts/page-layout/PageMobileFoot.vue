<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import PageMobileMenu from './PageMobileMenu.vue'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="flex w-full justify-between bg-white px-4 py-1">
    <div></div>
    <PageMobileMenu class="rounded border border-stone-300 p-2" />
    <div></div>
  </div>
</template>
