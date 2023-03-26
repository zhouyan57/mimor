<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'
</script>

<template>
  <div class="flex w-full justify-between p-3 text-xl">
    <div></div>

    <div class="flex items-center space-x-2">
      <a :href="useCurrentOrigin()" target="_blank" class="hover:underline">
        <Lang class="font-logo font-light">
          <template #zh>谜墨</template>
          <template #en>Mimor</template>
        </Lang>
      </a>
    </div>
  </div>
</template>
