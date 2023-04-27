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
        <template #zh> 作者列表 </template>
        <template #en> Author List </template>
      </Lang>
    </div>

    <ul
      class="flex list-outside list-square flex-col space-y-1 overflow-y-auto py-3 pl-4 text-xl"
    >
      <li v-for="username of state.usernames">
        <Hyperlink
          class="font-bold hover:underline"
          :key="username"
          :href="`/authors/${username}`"
          >{{ username }}</Hyperlink
        >
      </li>
    </ul>
  </div>
</template>
