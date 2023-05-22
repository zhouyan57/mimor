<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import AuthorOther from './AuthorOther.vue'
import AuthorSelf from './AuthorSelf.vue'

const route = useRoute()
const auth = useGlobalAuth()

const isSelf = computed(() => route.params.username === auth.username)
</script>

<template>
  <AuthorSelf v-if="isSelf" />
  <AuthorOther v-else />
</template>
