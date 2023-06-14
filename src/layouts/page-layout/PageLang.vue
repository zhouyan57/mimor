<script setup lang="ts">
import { ArrowsUpDownIcon, CheckIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { langTagName, useGlobalLang } from '../../components/lang/useGlobalLang'
import TransitionPop from '../../components/transitions/TransitionPop.vue'
import ListFocusKeyboardUpAndDown from '../../components/utils/ListFocusKeyboardUpAndDown.vue'
import Popup from '../../components/utils/Popup.vue'

const lang = useGlobalLang()
</script>

<template>
  <Popup class="relative flex">
    <template #toggle>
      <div class="flex items-center">
        <Lang>
          <template #zh>语言</template>
          <template #en>Lang</template>
        </Lang>

        <ArrowsUpDownIcon class="h-4 w-4" />
      </div>
    </template>

    <template #panel="{ popup }">
      <TransitionPop>
        <ListFocusKeyboardUpAndDown
          v-show="popup.open"
          class="absolute left-0 top-9 min-w-max border bg-white"
          :entries="
            lang.knownTags.map((tag) => ({ tag, name: langTagName(tag) }))
          "
        >
          <template #entry="{ entry }">
            <button
              class="flex w-full min-w-max items-center px-2 py-1"
              @click="
                () => {
                  lang.tag = entry.tag
                  popup.open = false
                }
              "
            >
              <span>{{ entry.name }}</span>
              <CheckIcon v-if="lang.tag === entry.tag" class="ml-2 h-5 w-5" />
            </button>
          </template>
        </ListFocusKeyboardUpAndDown>
      </TransitionPop>
    </template>
  </Popup>
</template>
