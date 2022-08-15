<script setup lang="ts">
import { useLang } from "../hooks/useLang"

const lang = useLang()
</script>

<template>
  <div>
    <div v-if="lang.zh">
      <slot name="zh"></slot>
    </div>

    <div v-if="lang.en">
      <slot name="en"></slot>
    </div>
  </div>
</template>
