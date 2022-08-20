<script setup lang="ts">
import Lang from './Lang.vue'
</script>

<template>
  <div class="flex flex-col items-start text-xl text-stone-500">
    <slot>
      <Lang>
        <template #zh>加载中……</template>
        <template #en>Loading...</template>
      </Lang>
    </slot>
  </div>
</template>
