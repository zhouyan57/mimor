<script setup lang="ts">
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  LockOpenIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { asyncRun } from '../../utils/asyncRun'
import { Entry } from './Entry'
import { State } from './State'
import { entryIsModifiedByUpload } from './entryIsModifiedByUpload'
import { entryToggleVisibilityAfterConfirming } from './entryToggleVisibilityAfterConfirming'
import { stateCacheSet } from './stateCacheSet'
import { stateEntryDeleteAfterConfirming } from './stateEntryDeleteAfterConfirming'
import { stateEntrySaveUploadedText } from './stateEntrySaveUploadedText'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex flex-wrap text-base">
    <button
      class="flex max-w-fit space-x-1 whitespace-pre pr-3 disabled:text-stone-500"
      :disabled="entry.isDeleting"
      @click="stateEntryDeleteAfterConfirming(state, entry)"
    >
      <TrashIcon
        class="h-5 w-5"
        :class="{
          'animate-shake': entry.isDeleting,
        }"
      />

      <Lang>
        <template #zh>删除</template>
        <template #en>Delete</template>
      </Lang>
    </button>

    <button
      class="flex max-w-fit space-x-1 whitespace-pre pr-3 disabled:text-stone-500"
      :disabled="entry.isTogglingVisibility"
      @click="entryToggleVisibilityAfterConfirming(entry)"
    >
      <template v-if="entry.isPublic">
        <LockOpenIcon
          class="h-5 w-5"
          :class="{
            'animate-shake': entry.isTogglingVisibility,
          }"
        />

        <Lang>
          <template #zh>公开</template>
          <template #en>Public</template>
        </Lang>
      </template>

      <template v-else>
        <LockClosedIcon
          class="h-5 w-5"
          :class="{
            'animate-shake': entry.isTogglingVisibility,
          }"
        />

        <Lang>
          <template #zh>私人</template>
          <template #en>Private</template>
        </Lang>
      </template>
    </button>

    <button
      v-if="entryIsModifiedByUpload(entry)"
      class="flex max-w-fit space-x-1 whitespace-pre pr-3 disabled:text-stone-500"
      :disabled="entry.isSaving"
      @click="
        asyncRun(async () => {
          await stateEntrySaveUploadedText(state, entry)
          await stateCacheSet(state)
        })
      "
    >
      <CloudArrowUpIcon
        class="h-5 w-5"
        :class="{
          'animate-shake': entry.isSaving,
        }"
      />

      <Lang>
        <template #zh>保存新内容</template>
        <template #en>Save New Content</template>
      </Lang>
    </button>
  </div>
</template>
