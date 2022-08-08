<script setup lang="ts">
import { CheckIcon, EyeIcon, XIcon } from "@heroicons/vue/outline"
import Lang from "../../../components/Lang.vue"
import { BinaryLayoutState as State } from "./BinaryLayoutState"

defineProps<{ state: State }>()
</script>

<template>
  <div class="w-full pb-1.5 text-xl font-bold">
    <button
      v-if="!state.revealed"
      @click="state.revealed = true"
      class="p-3 border w-full flex flex-col items-start"
    >
      <EyeIcon class="w-6 h-6 text-yellow-500" />
      <Lang>
        <template #zh>揭示</template>
        <template #en>Reveal</template>
      </Lang>
    </button>

    <div v-else class="flex w-full justify-between space-x-1">
      <button
        @click="state.next()"
        class="p-3 border w-full flex flex-col items-start"
      >
        <XIcon class="w-6 h-6 text-yellow-500" />
        <Lang>
          <template #zh>忘了</template>
          <template #en>Forgotten</template>
        </Lang>
      </button>

      <button
        @click="state.next()"
        class="p-3 border w-full flex flex-col items-start"
      >
        <CheckIcon class="w-6 h-6 text-yellow-500" />
        <Lang>
          <template #zh>记得</template>
          <template #en>Remembered</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
