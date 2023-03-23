<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import PageLayoutLang from './PageLayoutLang.vue'
import { PageLayoutState as State } from './PageLayoutState'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col justify-between pr-4">
    <div
      class="flex flex-col items-start space-y-2 border-t border-stone-500 py-2 text-2xl"
    >
      <Hyperlink href="/" class="hover:underline">
        <Lang>
          <template #zh>首页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <Hyperlink
        v-if="$app.auth.user"
        :href="`/authors/${$app.auth.user.username}/projects`"
        class="hover:underline"
      >
        <Lang>
          <template #zh>项目</template>
          <template #en>Projects</template>
        </Lang>
      </Hyperlink>

      <Hyperlink v-if="$app.auth.user" href="/config" class="hover:underline">
        <Lang>
          <template #zh>配置</template>
          <template #en>Config</template>
        </Lang>
      </Hyperlink>

      <PageLayoutLang :state="state" />
    </div>

    <div class="border-t border-stone-500 pt-2">
      <div
        v-if="$app.auth.user"
        class="flex min-w-max items-end justify-between"
      >
        <div>
          <Lang class="font-logo text-2xl font-bold">
            <template #zh>
              <div>
                {{ $app.auth.config?.name_zh || $app.auth.user.name }}
              </div>
            </template>
            <template #en>
              <div>
                {{ $app.auth.config?.name_en || $app.auth.user.name }}
              </div>
            </template>
          </Lang>

          <Hyperlink
            :href="`/authors/${$app.auth.user.username}`"
            class="overflow-x-auto whitespace-pre text-xl hover:underline"
          >
            {{ $app.auth.user.username }}
          </Hyperlink>
        </div>

        <button
          class="min-w-max text-xl text-stone-600 hover:underline"
          @click="
            () => {
              $app.auth.logout()
              $router.replace('/')
            }
          "
        >
          <Lang>
            <template #zh>退出</template>
            <template #en>Logout</template>
          </Lang>
        </button>
      </div>

      <div v-if="!$app.auth.user" class="flex text-2xl">
        <Hyperlink href="/login" class="hover:underline">
          <Lang>
            <template #zh>登录</template>
            <template #en>Login</template>
          </Lang>
        </Hyperlink>

        <div class="px-2 font-bold">/</div>

        <Hyperlink href="/register" class="hover:underline">
          <Lang>
            <template #zh>注册</template>
            <template #en>Register</template>
          </Lang>
        </Hyperlink>
      </div>
    </div>
  </div>
</template>
