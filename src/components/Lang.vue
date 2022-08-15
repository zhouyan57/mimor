<script setup lang="ts">
import { useLang } from "../hooks/useLang"

const lang = useLang()
</script>

<template>
  <slot v-if="lang.zh" name="zh"></slot>
  <slot v-if="lang.en" name="en"></slot>
</template>
