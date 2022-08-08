<script setup lang="ts">
import Lang from "../../../components/Lang.vue"
import { MimorState } from "../MimorState"
import { BinaryLayoutState as State } from "./BinaryLayoutState"

defineProps<{ mimor: MimorState; state: State }>()
</script>

<template>
  <div class="flex w-full justify-between">
    <div></div>
    <div class="font-logo font-bold">
      <Lang>
        <template #zh>迷墨</template>
        <template #en>Mimor</template>
      </Lang>
    </div>
  </div>
</template>
