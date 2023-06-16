<script setup lang="ts">
import { createFocusTrap, FocusTrap } from 'focus-trap'
import { nextTick, onMounted, reactive, ref, watch } from 'vue'

/*

   Always show the button, click the button to show the panel.

   - Close on click outside.

   - Close on escape.

*/

const state = reactive({
  open: false,
})

const buttonElement = ref<HTMLButtonElement | undefined>()
const panelElement = ref<HTMLDivElement | undefined>()
const focusTrap = ref<FocusTrap | undefined>()

onMounted(() => {
  if (panelElement.value) {
    focusTrap.value = createFocusTrap(panelElement.value)
  }
})

watch(
  () => state.open,
  async (value) => {
    if (value && focusTrap.value) {
      await nextTick()
      focusTrap.value.activate()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div @keydown.escape.prevent.stop="state.open = false">
    <button ref="buttonElement" type="button" @click="state.open = true">
      <slot name="button"></slot>
    </button>

    <div
      v-show="state.open"
      class="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-black bg-opacity-50"></div>

      <div
        ref="panelElement"
        class="relative flex min-h-screen items-center justify-center"
        @click="state.open = false"
      >
        <div @click.stop>
          <slot name="panel"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
