<script setup lang="ts">
import { ref } from 'vue'
import PageLayoutMenu from './PageLayoutMenu.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()

const menuButtonElement = ref<HTMLElement | null>(null)

function clickMenu() {
  if (menuButtonElement.value) {
    if (menuButtonElement.value.click instanceof Function) {
      menuButtonElement.value.click()
    }
  }
}
</script>

<template>
  <button
    class="rounded-full bg-white border border-stone-300 p-3 shadow-md"
    @click="clickMenu()"
  >
    <PageLayoutMenu ref="menuButtonElement" :state="state" />
  </button>
</template>
