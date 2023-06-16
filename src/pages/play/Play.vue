<script setup lang="ts">
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import ListFocusKeyboardUpAndDown from '../../components/utils/ListFocusKeyboardUpAndDown.vue'
import Modal from '../../components/utils/Modal.vue'
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
        <div class="text-2xl font-bold">Popup</div>

        <Popup class="relative">
          <template #button>
            <div class="max-w-fit border border-black p-3 text-xl">
              Click to toggle Popup
            </div>
          </template>

          <template #panel="{ popup }">
            <TransitionPop>
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
            </TransitionPop>
          </template>
        </Popup>
      </div>

      <div class="flex flex-col space-y-3">
        <div class="text-2xl font-bold">Popup of List</div>

        <Scope :scope="{ tag: 'en' }" v-slot="{ scope }">
          <Popup class="relative">
            <template #button>
              <div class="max-w-fit border border-black p-3 text-xl">
                <span v-if="scope.tag === 'en'">Lang</span>
                <span v-if="scope.tag === 'zh'">语言</span>
              </div>
            </template>

            <template #panel="{ popup }">
              <TransitionPop>
                <ListFocusKeyboardUpAndDown
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
                </ListFocusKeyboardUpAndDown>
              </TransitionPop>
            </template>
          </Popup>
        </Scope>
      </div>

      <div class="flex flex-col space-y-3">
        <div class="text-2xl font-bold">Modal</div>

        <Modal>
          <template #button>
            <div class="w-fit border border-black bg-white p-3 text-xl">
              Open Modal
            </div>
          </template>

          <template #panel>
            <div
              class="m-3 overflow-y-auto border border-black bg-white p-6 md:p-10"
            >
              <h2 class="text-3xl font-bold">
                Launch nuclear ballistic missile
              </h2>

              <p class="mt-2 text-stone-600">
                Are you sure you want to do this?
              </p>

              <div class="mt-8 flex space-x-2">
                <button type="button" class="border border-black p-3">
                  Confirm
                </button>

                <button type="button" class="border border-black p-3">
                  Cancel
                </button>
              </div>
            </div>
          </template>
        </Modal>
      </div>
    </div>
  </PageLayout>
</template>
