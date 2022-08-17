<script setup lang="ts">
import PageLayoutLogo from './PageLayoutLogo.vue'
import PageLayoutMenu from './PageLayoutMenu.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full items-center">
    <PageLayoutMenu class="block pr-1 md:hidden" :state="state" />

    <div
      class="w-full overflow-x-auto overflow-y-hidden font-logo text-2xl font-bold"
    >
      <slot name="title">
        <div class="block md:hidden">
          <PageLayoutLogo :state="state" />
        </div>
      </slot>
    </div>
  </div>
</template>
