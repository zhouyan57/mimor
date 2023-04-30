<script setup lang="ts">
import {
  DocumentTextIcon,
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Mimor from '../../components/mimor/Mimor.vue'
import { formatDateTime } from '../../utils/formatDate'
import { MimorEntry } from './MimorEntry'
import { State } from './State'
import { mimorPathParse } from './mimorPathParse'
import { stateToggleMimorEntryVisibility } from './stateToggleMimorEntryVisibility'

const props = defineProps<{
  state: State
  mimorEntry: MimorEntry
}>()

const lang = useGlobalLang()

function toggleVisibility() {
  const message = lang.isZh()
    ? toggleVisibilityMessageZh()
    : toggleVisibilityMessageEn()

  if (window.confirm(message)) {
    stateToggleMimorEntryVisibility(props.state, props.mimorEntry)
  }
}

function toggleVisibilityMessageZh(): string {
  if (props.mimorEntry.isPublic) {
    return `确定要将公开 mimor 变成私有吗？\n${props.mimorEntry.path}`
  } else {
    return `确定要将私有 mimor 变成公开吗？\n${props.mimorEntry.path}`
  }
}

function toggleVisibilityMessageEn(): string {
  if (props.mimorEntry.isPublic) {
    return `Are you sure to change this public mimor to private?\n${props.mimorEntry.path}`
  } else {
    return `Are you sure to change this private mimor to public?\n${props.mimorEntry.path}`
  }
}
</script>

<template>
  <div>
    <div class="flex flex-col space-y-1 py-1 text-base">
      <button
        class="flex max-w-fit items-center space-x-1"
        @click="toggleVisibility()"
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

      <div class="flex items-center space-x-1">
        <PencilIcon class="h-5 w-5" />
        <div class="overflow-x-auto whitespace-pre">
          {{ formatDateTime(mimorEntry.updatedAt) }}
        </div>
      </div>

      <div class="flex items-center space-x-1">
        <PaperAirplaneIcon class="h-5 w-5" />
        <div class="overflow-x-auto whitespace-pre">
          {{ formatDateTime(mimorEntry.createdAt) }}
        </div>
      </div>

      <div class="flex items-center space-x-1">
        <DocumentTextIcon class="h-5 w-5" />
        <div class="overflow-x-auto whitespace-pre">
          {{ mimorPathParse(mimorEntry.path).file }}
        </div>
      </div>
    </div>

    <Mimor
      class="h-[34rem] max-w-[47rem] shrink-0"
      :key="mimorEntry.path"
      :src="`~/${mimorEntry.path}`"
    />
  </div>
</template>
