<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <div class="font-logo text-2xl font-bold text-stone-800">
      <Lang>
        <template #zh> 作者列表 </template>
        <template #en> Author List </template>
      </Lang>
    </div>

    <div class="flex flex-col space-y-1 overflow-y-auto py-3 text-xl">
      <Hyperlink
        class="font-bold hover:underline"
        v-for="username of state.usernames"
        :key="username"
        :href="`/authors/${username}`"
        >{{ username }}</Hyperlink
      >
    </div>
  </div>
</template>
