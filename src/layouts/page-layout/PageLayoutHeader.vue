<script setup lang="ts">
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutMenu from './PageLayoutMenu.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="w-full h-10 overflow-x-auto flex items-center">
    <PageLayoutMenu class="block md:hidden pr-1" :state="state" />

    <div class="w-full overflow-x-auto text-2xl font-bold font-logo">
      <slot name="title">
        <div class="md:hidden block">
          <PageLayoutLogo :state="state" />
        </div>
      </slot>
    </div>
  </div>
</template>
