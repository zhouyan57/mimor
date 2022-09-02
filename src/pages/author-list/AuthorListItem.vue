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
  <div class="flex h-full flex-col">
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
      class="text-xl text-stone-600 hover:underline"
    >
      {{ author.username }}
    </Link>
  </div>
</template>
