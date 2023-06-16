<script setup lang="ts">
import { createFocusTrap, FocusTrap } from 'focus-trap'
import { nextTick, onMounted, reactive, ref, watch } from 'vue'

/*

   Always show the button, click the button to show the panel.

   - Close on click outside.

   - Close on escape.

   - After opened, trap focus inside the `Modal`,
     and the initial focus is the `panelElement`.

*/

const state = reactive({
  open: false,
})

const buttonElement = ref<HTMLButtonElement | undefined>()
const panelElement = ref<HTMLDivElement | undefined>()
const modalElement = ref<HTMLDivElement | undefined>()

const focusTrap = ref<FocusTrap | undefined>()

onMounted(() => {
  if (modalElement.value) {
    focusTrap.value = createFocusTrap(modalElement.value)
  }
})

watch(
  () => state.open,
  async (value) => {
    if (!focusTrap.value) return

    if (value) {
      await nextTick()
      focusTrap.value.activate()
    } else {
      await nextTick()
      focusTrap.value.deactivate()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div @keydown.escape.prevent.stop="state.open = false">
    <button ref="buttonElement" type="button" @click="state.open = true">
      <slot name="button" :modal="state"></slot>
    </button>

    <div
      v-show="state.open"
      ref="modalElement"
      class="h-screen-dynamic fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-black bg-opacity-50"></div>

      <div
        ref="panelElement"
        tabindex="0"
        class="h-screen-dynamic relative flex flex-col items-center justify-center overflow-y-auto"
        @click="state.open = false"
      >
        <div
          @click.stop
          class="flex h-fit flex-col items-center justify-center overflow-y-auto"
        >
          <slot name="panel" :modal="state"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
