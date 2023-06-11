<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Scope from '../../components/utils/Scope.vue'
</script>

<template>
  <Scope :scope="{ disabled: false }" v-slot="{ scope }">
    <button
      :disabled="scope.disabled"
      class="rounded-sm border border-black py-3 font-sans font-bold disabled:opacity-50"
      :class="[!scope.disabled && `hover:bg-stone-100`]"
      @click="
        () => {
          //
          scope.disabled = true
        }
      "
    >
      <Lang>
        <template #zh>清除缓存</template>
        <template #en>Clear Cache</template>
      </Lang>
    </button>
  </Scope>
</template>
