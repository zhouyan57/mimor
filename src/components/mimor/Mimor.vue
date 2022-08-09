<script setup lang="ts">
import { reactive } from "vue"
import BinaryLayout from "./layouts/BinaryLayout.vue"
import type { MimorOptions } from "./MimorState"
import { MimorState as State } from "./MimorState"
import MimorStmt from "./MimorStmt.vue"

const { options } = defineProps<{ options: MimorOptions }>()
const state = reactive(new State(options))
</script>

<template>
  <div class="border overflow-hidden" :class="[state.theme.bg(300)]">
    <BinaryLayout :mimor="state">
      <MimorStmt :mimor="state" :node="state.current" />
    </BinaryLayout>
  </div>
</template>
