<script setup lang="ts">
import Dropdown from '../../components/dropdown/Dropdown.vue'
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useWindow } from '../../reactives/useWindow'

const window = useWindow()
</script>

<template>
  <PageLayout>
    <div class="flex flex-col space-y-3 p-3">
      <div class="flex flex-col space-y-3">
        <div class="text-2xl font-bold">Modal</div>

        <Scope
          :scope="{ dialog: window.document.getElementById('dialog') }"
          v-slot="{ scope }"
        >
          <button
            class="max-w-fit border border-black p-3 text-xl"
            @click="scope.dialog.showModal()"
          >
            Click to open dialog
          </button>

          <dialog id="dialog" class="border border-black text-xl">
            <form method="dialog" class="flex flex-col space-y-3">
              <div>Hello from HTML dialog.</div>

              <button class="max-w-fit border border-black px-2 py-1">
                OK
              </button>
            </form>
          </dialog>
        </Scope>
      </div>

      <div class="flex flex-col space-y-3">
        <div class="text-2xl font-bold">Dropdown</div>

        <Dropdown class="relative">
          <template #dropdown-toggle>
            <div class="max-w-fit border border-black p-3 text-xl">
              Click to toggle dropdown
            </div>
          </template>

          <template #dropdown-panel="dropdown">
            <div
              class="absolute top-[4rem] w-[30rem] border border-black bg-white p-3 text-xl"
            >
              <div class="flex max-w-fit flex-col space-y-3">
                <div>Hello from dropdown.</div>

                <button
                  @click="dropdown.state.open = false"
                  class="max-w-fit border border-black px-2 py-1"
                >
                  OK
                </button>
              </div>
            </div>
          </template>
        </Dropdown>

        <div class="mt-6 flex space-x-2 text-xl">
          <button type="button" class="border border-black p-3">
            <span>Other Button</span>
          </button>

          <button type="button" class="border border-black p-3">
            <span>Another Button</span>
          </button>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
