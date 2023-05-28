<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex">
    <button :title="``" @click="" class="flex items-center space-x-1">
      <LinkIcon class="h-5 w-5" />

      <Lang>
        <template #zh>连接</template>
        <template #en>Connect</template>
      </Lang>
    </button>
  </div>
</template>
