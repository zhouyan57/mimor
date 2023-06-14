<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Init from '../../components/utils/Init.vue'
import Scope from '../../components/utils/Scope.vue'
import { hasServiceWorker } from '../../utils/pwa/hasServiceWorker'
import { removeServiceWorker } from '../../utils/pwa/removeServiceWorker'
</script>

<template>
  <Scope :scope="{ disabled: false }" v-slot="{ scope }">
    <Init
      :action="
        async () => {
          scope.disabled = !(await hasServiceWorker())
        }
      "
    />

    <button
      :disabled="scope.disabled"
      class="font-sans rounded-sm border border-black py-3 font-bold disabled:opacity-50"
      :class="[!scope.disabled && `hover:bg-stone-100`]"
      @click.prevent.stop="
        removeServiceWorker().then(() => (scope.disabled = true))
      "
    >
      <Lang>
        <template #zh>清除 Service Worker</template>
        <template #en>Remove Service Worker</template>
      </Lang>
    </button>
  </Scope>
</template>
