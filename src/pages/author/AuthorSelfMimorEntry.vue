<script setup lang="ts">
import { LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Mimor from '../../components/mimor/Mimor.vue'
import { MimorEntry } from './MimorEntry'
import { State } from './State'

defineProps<{
  state: State
  mimorEntry: MimorEntry
}>()
</script>

<template>
  <div>
    <div class="flex flex-col py-1">
      <button v-if="mimorEntry.isPublic" class="flex space-x-1" @click="">
        <LockOpenIcon class="h-5 w-5" />
        <Lang>
          <template #zh>公开</template>
          <template #en>Public</template>
        </Lang>
      </button>

      <button v-else class="flex space-x-1" @click="">
        <LockClosedIcon class="h-5 w-5" />
        <Lang>
          <template #zh>私人</template>
          <template #en>Private</template>
        </Lang>
      </button>
    </div>

    <Mimor
      class="h-[34rem] max-w-[47rem] shrink-0"
      :key="mimorEntry.path"
      :src="`~/${mimorEntry.path}`"
    />
  </div>
</template>
