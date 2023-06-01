<script setup lang="ts">
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useWindow } from '../../reactives/useWindow'

const window = useWindow()
</script>

<template>
  <PageLayout>
    <div class="flex flex-col overflow-y-auto p-3">
      <Scope
        :scope="{ dialog: window.document.getElementById('dialog') }"
        v-slot="{ scope }"
      >
        <button
          class="max-w-fit border border-black p-3 text-xl"
          @click="scope.dialog.showModal()"
        >
          Open dialog
        </button>

        <dialog id="dialog" class="border border-black text-xl">
          <form method="dialog" class="flex flex-col space-y-3">
            <div>Hello from HTML dialog.</div>

            <button class="max-w-fit border border-black px-2 py-1">OK</button>
          </form>
        </dialog>
      </Scope>
    </div>
  </PageLayout>
</template>
