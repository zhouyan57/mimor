<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

type State = {
  open: boolean
}

const state: State = reactive({
  open: false,
})

const toggleElement = ref<HTMLButtonElement | undefined>()
const panelElement = ref<HTMLDivElement | undefined>()

onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement

    if (!panelElement.value) return
    if (!toggleElement.value) return

    if (!panelElement.value.contains(target)) {
      // console.log('outside of panel')
      if (!toggleElement.value.contains(target)) {
        // console.log('outside of toggle')
        state.open = false
      }
    }
  })
})
</script>

<template>
  <div @keydown.escape.prevent.stop="state.open = false">
    <button ref="toggleElement" @click="state.open = !state.open">
      <slot name="dropdown-toggle" :state="state" />
    </button>

    <div v-show="state.open" ref="panelElement">
      <slot name="dropdown-panel" :state="state" />
    </div>
  </div>
</template>
