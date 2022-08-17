<script setup lang="ts">
import PageLayoutMenu from './PageLayoutMenu.vue'
import PageLayoutLogo from './PageLayoutLogo.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex items-center pb-2">
    <PageLayoutMenu class="block md:hidden pr-1" :state="state" />

    <div class="text-2xl font-bold font-logo">
      <slot name="title">
        <div class="md:hidden block">
          <PageLayoutLogo :state="state" />
        </div>
      </slot>
    </div>
  </div>
</template>
