<script setup lang="ts">
import Scope from '../../components/utils/Scope.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useWindow } from '../../reactives/useWindow'

const window = useWindow()
</script>

<template>
  <PageLayout>
    <div class="flex flex-col p-3">
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

            <button class="max-w-fit border border-black px-2 py-1">OK</button>
          </form>
        </dialog>
      </Scope>

      <hr class="my-3 max-w-xl border-t border-black" />

      <Scope
        :scope="{
          popover: window.document.getElementById('popover'),
          open: false,
        }"
        v-slot="{ scope }"
      >
        <button
          class="relative max-w-fit border border-black p-3 text-xl"
          @click="scope.open = !scope.open"
        >
          Click to toggle popover

          <dialog
            id="popover"
            :open="scope.open"
            class="absolute left-3 top-3 w-[30rem] border border-black text-xl"
            @click.stop=""
          >
            <div class="flex max-w-fit flex-col space-y-3">
              <div>Hello from popover implemented by HTML dialog.</div>

              <button
                @click="scope.open = false"
                class="max-w-fit border border-black px-2 py-1"
              >
                OK
              </button>
            </div>
          </dialog>
        </button>
      </Scope>
    </div>
  </PageLayout>
</template>
