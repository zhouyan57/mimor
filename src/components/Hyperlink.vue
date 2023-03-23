<script setup lang="ts">
// We can not use <RouterHyperlink> in headlessui:
// - https://github.com/tailwindlabs/headlessui/issues/143
</script>

<template>
  <a
    @click.prevent="
      () => {
        if (typeof $attrs.href === 'string') {
          if ($attrs.mode === 'replace') {
            $router.replace($attrs.href)
          } else {
            $router.push($attrs.href)
          }
        }
      }
    "
    class="cursor-pointer"
    ><slot
  /></a>
</template>
