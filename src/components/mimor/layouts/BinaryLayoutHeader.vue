<script setup lang="ts">
import Lang from "../../../components/Lang.vue"
import { BinaryLayoutState as State } from "./BinaryLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div class="font-bold text-stone-500">
      <Lang>
        <template #zh>进展：{{ state.progress }}</template>
        <template #en>Progress: {{ state.progress }}</template>
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
