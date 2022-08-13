<script setup lang="ts">
import PageLayoutLang from "./PageLayoutLang.vue"
import PageLayoutLogo from "./PageLayoutLogo.vue"
import { PageLayoutState as State } from "./PageLayoutState"
import Link from "../../components/Link.vue"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <PageLayoutLogo :state="state" />
    <PageLayoutLang :state="state" />
    <div class="flex-col flex text-xl font-bold">
      <Link href="/register" class="hover:underline">Register</Link>
      <Link href="/login" class="hover:underline">Login</Link>
    </div>
  </div>
</template>
