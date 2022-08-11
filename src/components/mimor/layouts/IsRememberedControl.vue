<script setup lang="ts">
import { CheckIcon, EyeIcon, XIcon } from "@heroicons/vue/outline"
import Lang from "../../../components/Lang.vue"
import { MimorState } from "../MimorState"

defineProps<{ mimor: MimorState }>()
</script>

<template>
  <div class="w-full pb-1.5 text-xl font-bold">
    <button
      v-if="!mimor.revealed"
      @click="mimor.revealed = true"
      class="p-3 border w-full flex flex-col items-start"
      :class="[mimor.theme.bg(400), mimor.theme.border(400)]"
    >
      <EyeIcon
        class="w-6 h-6"
        :class="[
          mimor.theme.name === 'yellow' ? 'text-purple-400' : 'text-yellow-400',
        ]"
      />
      <Lang :class="[mimor.theme.notWhite && 'text-white']">
        <template #zh>揭示</template>
        <template #en>Reveal</template>
      </Lang>
    </button>

    <div v-else class="flex w-full justify-between space-x-1">
      <button
        @click="mimor.forgotten()"
        class="p-3 border w-full flex flex-col items-start"
        :class="[mimor.theme.bg(400), mimor.theme.border(400)]"
      >
        <XIcon
          class="w-6 h-6"
          :class="[
            mimor.theme.name === 'yellow'
              ? 'text-purple-400'
              : 'text-yellow-400',
          ]"
        />
        <Lang :class="[mimor.theme.notWhite && 'text-white']">
          <template #zh>忘了</template>
          <template #en>Forgotten</template>
        </Lang>
      </button>

      <button
        @click="mimor.remembered()"
        class="p-3 border w-full flex flex-col items-start"
        :class="[mimor.theme.bg(400), mimor.theme.border(400)]"
      >
        <CheckIcon
          class="w-6 h-6"
          :class="[
            mimor.theme.name === 'yellow'
              ? 'text-purple-400'
              : 'text-yellow-400',
          ]"
        />
        <Lang :class="[mimor.theme.notWhite && 'text-white']">
          <template #zh>记得</template>
          <template #en>Remembered</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
