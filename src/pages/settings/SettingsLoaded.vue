<script setup lang="ts">
import { reactive } from 'vue'
import SettingsGuest from './SettingsGuest.vue'
import SettingsUser from './SettingsUser.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
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
