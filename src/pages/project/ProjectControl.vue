<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex w-full justify-between border-t border-stone-500 pt-2">
    <div class="flex space-x-3 text-xl">
      <Hyperlink
        v-if="$app.auth.user?.username === $route.params.username"
        :href="`/authors/${$route.params.username}/projects/${state.name}?config`"
      >
        <div class="flex items-center space-x-0.5 hover:underline">
          <Lang>
            <template #zh>配置</template>
            <template #en>Config</template>
          </Lang>
        </div>
      </Hyperlink>
    </div>

    <div class="flex space-x-3 text-xl">
      <Hyperlink
        v-if="$app.auth.user?.username === $route.params.username"
        :href="`/authors/${$route.params.username}/projects/${state.name}/file-create`"
        class="hover:underline"
      >
        <div class="flex items-center space-x-0.5 hover:underline">
          <Lang>
            <template #zh>创建</template>
            <template #en>Create</template>
          </Lang>

          <PlusIcon class="h-6 w-6 stroke-1" />
        </div>
      </Hyperlink>
    </div>
  </div>
</template>
