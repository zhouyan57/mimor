<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { formatDateTime } from '../../utils/formatDate'

defineProps<{ lastRefreshedAt?: number }>()
</script>

<template>
  <div class="flex flex-col space-y-2 border border-black bg-white p-3">
    <div>
      <Lang class="font-sans whitespace-pre text-xl font-bold">
        <template #zh>目录</template>
        <template #en>Contents</template>
      </Lang>
    </div>

    <div v-if="lastRefreshedAt" class="whitespace-pre">
      <Lang>
        <template #zh>
          <span>上次刷新于：</span>
          <span>{{ formatDateTime(lastRefreshedAt) }}</span>
        </template>
        <template #en>
          <span>Last refreshed at: </span>
          <span>{{ formatDateTime(lastRefreshedAt) }}</span>
        </template>
      </Lang>
    </div>
  </div>
</template>
