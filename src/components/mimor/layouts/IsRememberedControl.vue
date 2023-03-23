<script setup lang="ts">
import { CheckIcon, EyeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../../components/Lang.vue'
import { State } from '../State'
import { Program } from '../models/Program'

defineProps<{
  mimor: State
  program: Program
}>()
</script>

<template>
  <div class="w-full pb-1.5 text-xl font-bold">
    <button
      v-if="!program.revealed"
      @click="program.revealed = true"
      class="flex w-full flex-col items-start border p-3"
      :class="[
        mimor.theme.bg(400),
        mimor.theme.isWhite ? 'border-stone-500' : mimor.theme.border(400),
      ]"
    >
      <EyeIcon
        class="h-6 w-6"
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
        @click="program.forgotten()"
        class="flex w-full flex-col items-start border p-3"
        :class="[
          mimor.theme.bg(400),
          mimor.theme.isWhite ? 'border-stone-500' : mimor.theme.border(400),
        ]"
      >
        <XMarkIcon
          class="h-6 w-6"
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
        @click="program.remembered()"
        class="flex w-full flex-col items-start border p-3"
        :class="[
          mimor.theme.bg(400),
          mimor.theme.isWhite ? 'border-stone-500' : mimor.theme.border(400),
        ]"
      >
        <CheckIcon
          class="h-6 w-6"
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
