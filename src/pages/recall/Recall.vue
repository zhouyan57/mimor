<script setup lang="ts">
import { useRoute } from 'vue-router'
import RecallLoaded from './RecallLoaded.vue'
import RecallLoading from './RecallLoading.vue'
import { State } from './State'
import { loadState } from './loadState'
import { reactive, onMounted, ref, watch } from 'vue'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'

const route = useRoute()

const state = ref<State | undefined>(undefined)

const options = reactive({
  //
})

onMounted(async () => {
  await loginByTokenIfNotAlready()
  state.value = await loadState(options)
})
</script>

<template>
  <RecallLoaded v-if="state" :state="state" />
  <RecallLoading v-else :options="options" />
</template>
