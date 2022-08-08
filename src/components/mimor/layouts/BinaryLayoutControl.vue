<script setup lang="ts">
import Lang from "../../../components/Lang.vue"
import { BinaryLayoutState as State } from "./BinaryLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <button v-if="!state.revealed" @click="state.revealed = true">
      <Lang>
        <template #zh>揭示</template>
        <template #en>Reveal</template>
      </Lang>
    </button>

    <div v-else class="flex w-full justify-between">
      <button @click="state.next()">
        <Lang>
          <template #zh>忘了</template>
          <template #en>Forgotten</template>
        </Lang>
      </button>
      <button @click="state.next()">
        <Lang>
          <template #zh>记得</template>
          <template #en>Remembered</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
