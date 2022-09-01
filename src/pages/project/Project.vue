<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectNormal from './ProjectNormal.vue'
import ProjectRecall from './ProjectRecall.vue'
import { ProjectState as State } from './ProjectState'

const route = useRoute()

const state = reactive(
  new State({
    username: route.params.username as string,
    name: route.params.name as string,
  })
)
</script>

<template>
  <ProjectRecall v-if="$route.query.recall !== undefined" :state="state" />
  <ProjectNormal v-else :state="state" />
</template>
