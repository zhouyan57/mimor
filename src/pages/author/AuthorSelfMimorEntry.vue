<script setup lang="ts">
import {
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import Mimor from '../../components/mimor/Mimor.vue'
import { formatDateTime } from '../../utils/formatDate'
import { MimorEntry } from './MimorEntry'
import { State } from './State'
import { stateToggleMimorEntryVisibility } from './stateToggleMimorEntryVisibility'

defineProps<{
  state: State
  mimorEntry: MimorEntry
}>()
</script>

<template>
  <div>
    <div class="flex flex-col space-y-1 py-1">
      <div class="flex space-x-1">
        <PencilIcon class="h-5 w-5" />
        <span>{{ formatDateTime(mimorEntry.updatedAt) }}</span>
      </div>

      <div class="flex space-x-1">
        <PaperAirplaneIcon class="h-5 w-5" />
        <span>{{ formatDateTime(mimorEntry.createdAt) }}</span>
      </div>

      <button
        class="flex space-x-1"
        @click="stateToggleMimorEntryVisibility(state, mimorEntry)"
      >
        <template v-if="mimorEntry.isPublic">
          <LockOpenIcon class="h-5 w-5" />
          <Lang>
            <template #zh>公开</template>
            <template #en>Public</template>
          </Lang>
        </template>

        <template v-else>
          <LockClosedIcon class="h-5 w-5" />
          <Lang>
            <template #zh>私人</template>
            <template #en>Private</template>
          </Lang>
        </template>
      </button>
    </div>

    <Mimor
      class="h-[34rem] max-w-[47rem] shrink-0"
      :key="mimorEntry.path"
      :src="`~/${mimorEntry.path}`"
    />
  </div>
</template>
