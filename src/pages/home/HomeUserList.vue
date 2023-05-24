<script setup lang="ts">
import { Base64 } from 'js-base64'
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { username } from '../../models/user/username'
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

    <div class="flex flex-col space-y-3 overflow-y-auto py-3 text-xl">
      <div v-for="user of state.users" :key="user['@path']" class="max-w-max">
        <Hyperlink :href="`/authors/${username(user)}`">
          <div class="flex space-x-2">
            <img
              v-if="user.avatar"
              class="h-[3.7rem] w-[3.7rem]"
              :alt="`Avatar of ${user.name}`"
              :src="`data:text/markdown;base64,${Base64.fromUint8Array(
                user.avatar,
              )}`"
            />

            <div class="flex flex-col">
              <div class="text-2xl font-bold">{{ user.name }}</div>
              <div class="text-xl">{{ username(user) }}</div>
            </div>
          </div></Hyperlink
        >
      </div>
    </div>
  </div>
</template>
