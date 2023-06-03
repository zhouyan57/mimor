<script setup lang="ts">
import { ArrowsUpDownIcon, CheckIcon } from '@heroicons/vue/24/outline'
import Dropdown from '../../components/dropdown/Dropdown.vue'
import Lang from '../../components/lang/Lang.vue'
import { langTagName, useGlobalLang } from '../../components/lang/useGlobalLang'
import List from '../../components/list/List.vue'

const lang = useGlobalLang()
</script>

<template>
  <Dropdown class="relative flex">
    <template #toggle>
      <div class="flex items-center">
        <Lang>
          <template #zh>语言</template>
          <template #en>Lang</template>
        </Lang>

        <ArrowsUpDownIcon class="h-4 w-4" />
      </div>
    </template>

    <template #panel="{ dropdown }">
      <Transition
        enterActiveClass="transition duration-100 ease-out"
        enterFromClass="transform scale-95 opacity-0"
        enterToClass="transform scale-100 opacity-100"
        leaveActiveClass="transition duration-75 ease-out"
        leaveFromClass="transform scale-100 opacity-100"
        leaveToClass="transform scale-95 opacity-0"
      >
        <List
          v-show="dropdown.open"
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
                  dropdown.open = false
                }
              "
            >
              <span>{{ entry.name }}</span>
              <CheckIcon v-if="lang.tag === entry.tag" class="ml-2 h-5 w-5" />
            </button>
          </template>
        </List>
      </Transition>
    </template>
  </Dropdown>
</template>
