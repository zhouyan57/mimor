<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="font-logo text-2xl font-bold">
      <Lang>
        <template #zh> 用户列表 </template>
        <template #en> User List </template>
      </Lang>
    </div>

    <ul
      class="flex list-outside list-square flex-col space-y-1 overflow-y-auto py-3 pl-4 text-xl"
    >
      <li v-for="username of state.usernames">
        <Hyperlink
          class="font-bold text-sky-700 decoration-sky-700 visited:text-purple-700 visited:decoration-purple-700 hover:underline"
          :key="username"
          :href="`/authors/${username}`"
          >{{ username }}</Hyperlink
        >
      </li>
    </ul>
  </div>
</template>
