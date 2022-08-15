<script setup lang="ts">
import { useLang } from "../hooks/useLang"

const lang = useLang()
</script>

<template>
  <div>
    <slot v-if="lang.zh" name="zh"></slot>
    <slot v-if="lang.en" name="en"></slot>
  </div>
</template>
