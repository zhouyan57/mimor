<script setup lang="ts">
import Link from '../../components/Link.vue'
import Lang from '../../components/Lang.vue'
import { PlayIcon } from '@heroicons/vue/outline'
import { ProjectFileState as State } from './ProjectFileState'

defineProps<{ state: State }>()
</script>

<template>
  <div
    v-if="state.file"
    class="flex h-full w-full flex-col rounded-sm p-2 shadow-md focus-within:ring-1 focus-within:ring-stone-500"
  >
    <textarea
      class="h-full w-full resize-none pb-2 font-mono focus:outline-none"
      v-model="state.file.content"
    ></textarea>

    <div class="flex w-full justify-end border-t border-stone-500 pt-1">
      <div class="flex space-x-3 self-end text-lg">
        <button
          class="hover:underline"
          :class="[state.saving && 'text-yellow-500']"
          @click="state.save()"
        >
          <Lang>
            <template #zh>保存</template>
            <template #en>Save</template>
          </Lang>
        </button>

        <Link
          :href="`/projects/${state.project.name}/files/${state.path}?recall`"
        >
          <div class="flex items-center space-x-0.5 hover:underline">
            <Lang>
              <template #zh>回顾</template>
              <template #en>Recall</template>
            </Lang>

            <PlayIcon class="h-4 w-4" />
          </div>
        </Link>
      </div>
    </div>
  </div>
</template>
