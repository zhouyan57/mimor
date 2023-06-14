<script setup lang="ts">
import { deleteDB } from 'idb'
import Lang from '../../components/lang/Lang.vue'
import Scope from '../../components/utils/Scope.vue'
import { knownIDBDatabases } from './knownIDBDatabases'

async function clearCache() {
  for (const name of knownIDBDatabases()) {
    await deleteDB(name)
  }
}
</script>

<template>
  <Scope :scope="{ disabled: false }" v-slot="{ scope }">
    <button
      :disabled="scope.disabled"
      class="font-sans rounded-sm border border-black py-3 font-bold disabled:opacity-50"
      :class="[!scope.disabled && `hover:bg-stone-100`]"
      @click.prevent.stop="clearCache().then(() => (scope.disabled = true))"
    >
      <Lang>
        <template #zh>清除缓存</template>
        <template #en>Clear Cache</template>
      </Lang>
    </button>
  </Scope>
</template>
