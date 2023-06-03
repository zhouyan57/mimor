<script setup lang="ts">
import Dropdown from '../../components/dropdown/Dropdown.vue'
import List from '../../components/list/List.vue'
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
          <template #toggle>
            <div class="max-w-fit border border-black p-3 text-xl">
              Click to toggle Dropdown
            </div>
          </template>

          <template #panel="{ dropdown }">
            <Transition
              enterActiveClass="transition duration-100 ease-out"
              enterFromClass="transform scale-95 opacity-0"
              enterToClass="transform scale-100 opacity-100"
              leaveActiveClass="transition duration-100 ease-out"
              leaveFromClass="transform scale-100 opacity-100"
              leaveToClass="transform scale-95 opacity-0"
            >
              <div
                v-show="dropdown.open"
                class="absolute top-[4rem] z-10 flex flex-col space-y-3 border border-black bg-white p-3 text-xl"
              >
                <div>Hello from Dropdown</div>

                <button
                  @click="dropdown.open = false"
                  class="max-w-fit border border-black px-2 py-1"
                >
                  OK
                </button>
              </div>
            </Transition>
          </template>
        </Dropdown>
      </div>

      <div class="flex flex-col space-y-3">
        <div class="text-2xl font-bold">Dropdown of List</div>

        <Scope :scope="{ tag: 'en' }" v-slot="{ scope }">
          <Dropdown class="relative">
            <template #toggle>
              <div class="max-w-fit border border-black p-3 text-xl">
                <span v-if="scope.tag === 'en'">Lang</span>
                <span v-if="scope.tag === 'zh'">语言</span>
              </div>
            </template>

            <template #panel="{ dropdown }">
              <List
                class="absolute top-[4rem] z-10 flex flex-col border border-black bg-white text-xl"
                :entries="[
                  { tag: 'zh', text: '中文' },
                  { tag: 'en', text: 'English' },
                ]"
              >
                <template #entry="{ entry }">
                  <button
                    class="flex w-full p-3"
                    @click="
                      () => {
                        scope.tag = entry.tag
                        dropdown.open = false
                      }
                    "
                  >
                    {{ entry.text }}
                  </button>
                </template>
              </List>
            </template>
          </Dropdown>
        </Scope>
      </div>
    </div>
  </PageLayout>
</template>
