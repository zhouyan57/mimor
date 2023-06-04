<script setup lang="ts">
import List from '../../components/utils/List.vue'
import Popup from '../../components/utils/Popup.vue'
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
        <div class="text-2xl font-bold">Popup</div>

        <Popup class="relative">
          <template #toggle>
            <div class="max-w-fit border border-black p-3 text-xl">
              Click to toggle Popup
            </div>
          </template>

          <template #panel="{ popup }">
            <Transition
              enterActiveClass="transition duration-300 ease-out"
              enterFromClass="transform scale-95 opacity-0"
              enterToClass="transform scale-100 opacity-100"
              leaveActiveClass="transition duration-300 ease-out"
              leaveFromClass="transform scale-100 opacity-100"
              leaveToClass="transform scale-95 opacity-0"
            >
              <div
                v-show="popup.open"
                class="absolute top-[4rem] z-10 flex flex-col space-y-3 border border-black bg-white p-3 text-xl"
              >
                <div>Hello from Popup</div>

                <button
                  @click="popup.open = false"
                  class="max-w-fit border border-black px-2 py-1"
                >
                  OK
                </button>
              </div>
            </Transition>
          </template>
        </Popup>
      </div>

      <div class="flex flex-col space-y-3">
        <div class="text-2xl font-bold">Popup of List</div>

        <Scope :scope="{ tag: 'en' }" v-slot="{ scope }">
          <Popup class="relative">
            <template #toggle>
              <div class="max-w-fit border border-black p-3 text-xl">
                <span v-if="scope.tag === 'en'">Lang</span>
                <span v-if="scope.tag === 'zh'">语言</span>
              </div>
            </template>

            <template #panel="{ popup }">
              <List
                v-show="popup.open"
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
                        popup.open = false
                      }
                    "
                  >
                    {{ entry.text }}
                  </button>
                </template>
              </List>
            </template>
          </Popup>
        </Scope>
      </div>
    </div>
  </PageLayout>
</template>
