<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Scope from '../../components/utils/Scope.vue'
import { hasServiceWorker } from '../../utils/pwa/hasServiceWorker'
import { removeServiceWorker } from '../../utils/pwa/removeServiceWorker'
</script>

<template>
  <Scope :scope="{ disabled: false }" v-slot="{ scope }">
    <button
      :disabled="scope.disabled"
      class="rounded-sm border border-black py-3 font-sans font-bold disabled:opacity-50"
      :class="[!scope.disabled && `hover:bg-stone-100`]"
      v-mounted="
        async () => {
          scope.disabled = !(await hasServiceWorker())
        }
      "
      @click="
        () => {
          removeServiceWorker()
          scope.disabled = true
        }
      "
    >
      <Lang>
        <template #zh>清除 Service Worker</template>
        <template #en>Remove Service Worker</template>
      </Lang>
    </button>
  </Scope>
</template>
