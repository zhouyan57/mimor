<script setup lang="ts">
import { useRoute } from 'vue-router'
import RecallAddMimorLoaded from './RecallAddMimorLoaded.vue'
import RecallAddMimorLoading from './RecallAddMimorLoading.vue'
import { State } from './State'
import { loadState } from './loadState'
import { reactive, onMounted, ref, watch } from 'vue'
import { loginByTokenIfNotAlready } from '../../models/auth/loginByTokenIfNotAlready'

const route = useRoute()

const state = ref<State | undefined>(undefined)

const options = reactive({
  src: String(route.params.src),
})

onMounted(async () => {
  await loginByTokenIfNotAlready()
})

watch(
  () => route.params.src,
  async () => {
    state.value = await loadState(options)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <RecallAddMimorLoaded v-if="state" :state="state" />
  <RecallAddMimorLoading v-else :options="options" />
</template>
