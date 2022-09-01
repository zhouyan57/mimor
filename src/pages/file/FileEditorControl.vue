<script setup lang="ts">
import Link from '../../components/Link.vue'
import Lang from '../../components/Lang.vue'
import { PlayIcon } from '@heroicons/vue/24/outline'
import { FileState as State } from './FileState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full justify-end border-t border-stone-500 pt-2">
    <div class="flex space-x-3 self-end text-xl">
      <button
        v-if="$app.auth.user?.username === $route.params.username"
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
        :href="`/authors/${$route.params.username}/projects/${state.project.name}/files/${state.path}?recall`"
      >
        <div class="flex items-center space-x-0.5 hover:underline">
          <Lang>
            <template #zh>回顾</template>
            <template #en>Recall</template>
          </Lang>

          <PlayIcon class="h-6 w-6 stroke-1" />
        </div>
      </Link>
    </div>
  </div>
</template>
