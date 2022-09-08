<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { reactive, watch } from 'vue'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectListItem from './ProjectListItem.vue'
import ProjectListCreateTheFirstProject from './ProjectListCreateTheFirstProject.vue'
import { ProjectListState as State } from './ProjectListState'
import ProjectListControl from './ProjectListControl.vue'

defineProps<{ state: State }>()
</script>

<template>
  <Head>
    <title v-if="$app.lang.zh">项目 | 谜墨</title>
    <title v-else>Projects | Mimor</title>
  </Head>
</template>
