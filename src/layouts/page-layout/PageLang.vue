<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/outline'
import { langTagName, useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <select class="relative flex bg-white" v-model="lang.tag">
    <option v-for="tag of lang.knownTags" :key="tag" :value="tag">
      <div class="flex min-w-max items-center px-2 py-1">
        {{ langTagName(tag) }}
        <CheckIcon class="ml-2 h-5 w-5" />
      </div>
    </option>
  </select>
</template>
