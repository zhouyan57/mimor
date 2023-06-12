<script setup lang="ts">
import SettingsGuest from './SettingsGuest.vue'
import SettingsUser from './SettingsUser.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <SettingsUser
    v-if="state.username && state.user"
    :state="state"
    :username="state.username"
    :user="state.user"
  />
  <SettingsGuest v-else :state="state" />
</template>
