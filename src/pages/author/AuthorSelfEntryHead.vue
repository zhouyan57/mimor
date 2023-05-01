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
import { formatDateTime } from '../../utils/formatDate'
import { Entry } from './Entry'
import { State } from './State'
import { pathParse } from './pathParse'
import { stateToggleEntryVisibility } from './stateToggleEntryVisibility'

const props = defineProps<{
  state: State
  entry: Entry
}>()

const lang = useGlobalLang()

function toggleVisibility() {
  const message = lang.isZh()
    ? toggleVisibilityMessageZh()
    : toggleVisibilityMessageEn()

  if (window.confirm(message)) {
    stateToggleEntryVisibility(props.state, props.entry)
  }
}

function toggleVisibilityMessageZh(): string {
  if (props.entry.isPublic) {
    return `确定要将公开 mimor 变成私有吗？\n${props.entry.path}`
  } else {
    return `确定要将私有 mimor 变成公开吗？\n${props.entry.path}`
  }
}

function toggleVisibilityMessageEn(): string {
  if (props.entry.isPublic) {
    return `Are you sure to change this public mimor to private?\n${props.entry.path}`
  } else {
    return `Are you sure to change this private mimor to public?\n${props.entry.path}`
  }
}
</script>

<template>
  <div class="flex flex-col space-y-1 py-1 text-base">
    <button
      class="flex max-w-fit items-center space-x-1"
      @click="toggleVisibility()"
    >
      <template v-if="entry.isPublic">
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
        {{ formatDateTime(entry.updatedAt) }}
      </div>
    </div>

    <div class="flex items-center space-x-1">
      <PaperAirplaneIcon class="h-5 w-5" />
      <div class="overflow-x-auto whitespace-pre">
        {{ formatDateTime(entry.createdAt) }}
      </div>
    </div>

    <div class="flex items-center space-x-1">
      <DocumentTextIcon class="h-5 w-5" />
      <div class="overflow-x-auto whitespace-pre">
        {{ pathParse(entry.path).file }}
      </div>
    </div>
  </div>
</template>
