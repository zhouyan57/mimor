<script setup lang="ts">
import { reactive } from "vue"
import BinaryLayout from "./layouts/BinaryLayout.vue"
import MimorNode from "./MimorNode.vue"
import type { MimorOptions } from "./MimorState"
import { MimorState as State } from "./MimorState"

const { options } = defineProps<{ options: MimorOptions }>()
const state = reactive(new State(options))
</script>

<template>
  <div class="border" :class="[`bg-${state.theme.name}-300`]">
    <BinaryLayout :mimor="state">
      <MimorNode :mimor="state" :node="state.current" />
    </BinaryLayout>
  </div>
</template>
