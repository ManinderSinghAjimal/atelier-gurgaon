<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watch, onMounted } from 'vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()

watch(() => route.fullPath, () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

onMounted(() => {
  document.documentElement.classList.add('js-ready')
})
</script>

<template>
  <div class="min-h-screen bg-bone text-ink font-sans">
    <AppNav />
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>
