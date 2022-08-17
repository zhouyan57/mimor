<script setup lang="ts">
// We can not use <RouterLink> in headlessui:
// - https://github.com/tailwindlabs/headlessui/issues/143
</script>

<template>
  <span
    @click="
      () => {
        if (typeof $attrs.href === 'string') {
          if ($attrs.replace) {
            $router.replace($attrs.href)
          } else {
            $router.push($attrs.href)
          }
        }
      }
    "
    ><a><slot /></a
  ></span>
</template>
