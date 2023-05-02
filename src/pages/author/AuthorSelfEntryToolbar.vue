<script setup lang="ts">
import {
  LockClosedIcon,
  LockOpenIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { Entry } from './Entry'
import { State } from './State'
import { stateToggleEntryVisibility } from './stateToggleEntryVisibility'

const props = defineProps<{
  state: State
  entry: Entry
}>()

const lang = useGlobalLang()

async function toggleVisibility() {
  const message = lang.isZh()
    ? toggleVisibilityMessageZh()
    : toggleVisibilityMessageEn()

  if (window.confirm(message)) {
    props.entry.isTogglingVisibility = true
    await stateToggleEntryVisibility(props.state, props.entry)
    props.entry.isTogglingVisibility = false
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
  <div class="flex space-x-4 text-base">
    <button class="flex max-w-fit space-x-1" @click="toggleVisibility()">
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

    <button class="flex max-w-fit space-x-1" @click="">
      <TrashIcon
        class="h-5 w-5"
        :class="{
          'animate-shake': false,
        }"
      />
      <Lang>
        <template #zh>删除</template>
        <template #en>Delete</template>
      </Lang>
    </button>
  </div>
</template>
