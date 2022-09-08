<script setup lang="ts">
import { Head } from '@vueuse/head'
import { PlayIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import Link from '../../components/Link.vue'
import Loading from '../../components/Loading.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import ProjectFileList from './ProjectFileList.vue'
import ProjectControl from './ProjectControl.vue'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State }>()
</script>

<template>
  <PageLayout>
    <div>ProjectEdit</div>
  </PageLayout>
</template>
