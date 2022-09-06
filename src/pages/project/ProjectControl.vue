<script setup lang="ts">
import Link from '../../components/Link.vue'
import Lang from '../../components/Lang.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full justify-end border-t border-stone-500 pt-2">
    <div class="flex space-x-3 self-end text-xl">
      <Link
        v-if="$app.auth.user?.username === $route.params.username"
        :href="`/authors/${$route.params.username}/projects/${state.name}/create-file`"
        class="hover:underline"
      >
        <div class="flex items-center space-x-0.5 hover:underline">
          <Lang>
            <template #zh>创建</template>
            <template #en>Create</template>
          </Lang>

          <PlusIcon class="h-6 w-6 stroke-1" />
        </div>
      </Link>
    </div>
  </div>
</template>
