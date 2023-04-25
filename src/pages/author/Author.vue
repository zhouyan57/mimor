<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalAuth } from '../../reactives/useGlobalAuth'
import AuthorOther from './AuthorOther.vue'
import AuthorSelf from './AuthorSelf.vue'

const route = useRoute()
const lang = useGlobalLang()
const auth = useGlobalAuth()

function isSelf(): boolean {
  return route.params.username === auth.username
}

const username = computed(() => String(route.params.username))
</script>

<template>
  <div>
    <AuthorSelf v-if="isSelf()" :username="username" />
    <AuthorOther v-else :username="username" />
  </div>
</template>
