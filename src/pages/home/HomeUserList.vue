<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { userAvatarURL } from '../../models/user/userAvatarURL'
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

    <div class="flex flex-col space-y-1 overflow-y-auto py-3 text-xl">
      <div v-for="user of state.users" :key="user['@path']">
        <Hyperlink :href="`/authors/${username(user)}`">
          <div class="flex space-x-2">
            <img
              class="h-[4.6rem] w-[4.6rem]"
              :alt="`Avatar of ${user.name}`"
              :src="userAvatarURL(user).href"
              onerror="this.onerror=null; this.src='/contents/assets/images/user-icon.svg'"
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
