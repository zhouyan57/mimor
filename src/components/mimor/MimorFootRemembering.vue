<script setup lang="ts">
import { CheckIcon, EyeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Program } from './Program'
import { Remembering } from './Remembering'
import { State } from './State'
import { programForgotten } from './programForgotten'
import { programRemembered } from './programRemembered'

defineProps<{
  state: State
  program: Program
  remembering: Remembering
}>()
</script>

<template>
  <div class="w-full pb-1.5 text-xl font-bold">
    <button
      v-if="!remembering.revealed"
      class="flex w-full flex-col items-start border-y p-3"
      :class="[
        state.theme.bg(400),
        state.theme.name === 'white' ? 'border-black' : state.theme.border(400),
      ]"
      @click="remembering.revealed = true"
    >
      <EyeIcon
        class="h-6 w-6"
        :class="[
          state.theme.name === 'yellow' ? 'text-purple-400' : 'text-yellow-400',
        ]"
      />
      <Lang :class="[state.theme.name !== 'white' && 'text-white']">
        <template #zh>揭示</template>
        <template #en>Reveal</template>
      </Lang>
    </button>

    <div v-else class="flex w-full justify-between space-x-1">
      <button
        @click="programForgotten(program)"
        class="flex w-full flex-col items-start border-y border-r p-3"
        :class="[
          state.theme.bg(400),
          state.theme.name === 'white'
            ? 'border-black'
            : state.theme.border(400),
        ]"
      >
        <XMarkIcon
          class="h-6 w-6"
          :class="[
            state.theme.name === 'yellow'
              ? 'text-purple-400'
              : 'text-yellow-400',
          ]"
        />
        <Lang :class="[state.theme.name !== 'white' && 'text-white']">
          <template #zh>忘了</template>
          <template #en>Forgotten</template>
        </Lang>
      </button>

      <button
        @click="programRemembered(program)"
        class="flex w-full flex-col items-start border-y border-l p-3"
        :class="[
          state.theme.bg(400),
          state.theme.name === 'white'
            ? 'border-black'
            : state.theme.border(400),
        ]"
      >
        <CheckIcon
          class="h-6 w-6"
          :class="[
            state.theme.name === 'yellow'
              ? 'text-purple-400'
              : 'text-yellow-400',
          ]"
        />
        <Lang :class="[state.theme.name !== 'white' && 'text-white']">
          <template #zh>记得</template>
          <template #en>Remembered</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
