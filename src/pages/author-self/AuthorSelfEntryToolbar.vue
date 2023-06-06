<script setup lang="ts">
import {
  LockClosedIcon,
  LockOpenIcon,
  PaperAirplaneIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { Entry } from './Entry'
import { State } from './State'
import { entryToggleVisibilityAfterConfirming } from './entryToggleVisibilityAfterConfirming'
import { stateEntryDeleteAfterConfirming } from './stateEntryDeleteAfterConfirming'
import { stateEntrySave } from './stateEntrySave'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <div class="flex space-x-3 text-base">
    <button
      class="flex max-w-fit space-x-1 disabled:text-stone-500"
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
      class="flex max-w-fit space-x-1 disabled:text-stone-500"
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
      v-if="entry.isModified"
      class="flex max-w-fit space-x-1 disabled:text-stone-500"
      :disabled="entry.isSaving"
      @click="stateEntrySave(state, entry)"
    >
      <PaperAirplaneIcon
        class="h-5 w-5"
        :class="{
          'animate-shake': entry.isSaving,
        }"
      />

      <Lang>
        <template #zh>保存</template>
        <template #en>Save</template>
      </Lang>
    </button>
  </div>
</template>
