<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import { AuthorListState as State } from './AuthorListState'
import { AuthorJson } from '../../jsons/AuthorJson'

defineProps<{
  state: State
  author: AuthorJson
}>()
</script>

<template>
  <div
    class="flex h-full flex-col space-y-1 rounded-sm border border-stone-500 p-3"
  >
    <Lang class="font-logo text-2xl font-bold">
      <template #zh>
        <div>
          {{ author.config?.name_zh || author.name }}
        </div>
      </template>
      <template #en>
        <div>
          {{ author.config?.name_en || author.name }}
        </div>
      </template>
    </Lang>

    <Link
      :href="`/authors/${author.username}`"
      class="overflow-x-auto whitespace-pre text-xl hover:underline"
    >
      {{ author.username }}
    </Link>
  </div>
</template>
