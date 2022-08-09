<script setup lang="ts">
import Lang from "../../../components/Lang.vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState }>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div class="font-bold text-stone-500">
      <Lang>
        <template #zh>进展：{{ mimor.progress }}</template>
        <template #en>Progress: {{ mimor.progress }}</template>
      </Lang>
    </div>
    <div class="font-logo font-light">
      <Lang>
        <template #zh>谜墨</template>
        <template #en>Mimor</template>
      </Lang>
    </div>
  </div>
</template>
