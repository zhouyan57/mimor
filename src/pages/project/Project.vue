<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import ProjectNormal from './ProjectNormal.vue'
import ProjectRecall from './ProjectRecall.vue'
import ProjectConfig from './ProjectConfig.vue'
import { ProjectState as State } from './ProjectState'

const route = useRoute()

const state = reactive(
  new State({
    username: route.params.username as string,
    name: route.params.name as string,
  }),
)
</script>

<template>
  <ProjectRecall v-if="$route.query.recall !== undefined" :state="state" />
  <ProjectConfig v-else-if="$route.query.config !== undefined" :state="state" />
  <ProjectNormal v-else :state="state" />
</template>
