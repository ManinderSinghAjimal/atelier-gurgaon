<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

function close() { open.value = false }
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-bone/90 backdrop-blur-md border-b border-line/60 py-3' : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
      <RouterLink to="/" class="flex items-baseline gap-2 group" @click="close">
        <span class="font-display text-xl md:text-2xl tracking-tight text-ink group-hover:text-bronze transition-colors">Atelier</span>
        <span class="font-display italic text-xl md:text-2xl text-bronze">Gurgaon</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="link-underline text-[0.7rem] tracking-[0.22em] uppercase font-medium transition-colors"
          :class="route.path === link.to ? 'text-bronze' : 'text-ink/80 hover:text-ink'"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="text-[0.7rem] tracking-[0.22em] uppercase font-semibold bg-ink text-bone px-5 py-2.5 rounded-full hover:bg-bronze transition-colors"
        >
          Start a Project
        </RouterLink>
      </nav>

      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span :class="['block w-6 h-[1.5px] bg-ink transition-transform duration-300', open ? 'translate-y-2 rotate-45' : '']"></span>
        <span :class="['block w-6 h-[1.5px] bg-ink transition-opacity duration-300', open ? 'opacity-0' : '']"></span>
        <span :class="['block w-6 h-[1.5px] bg-ink transition-transform duration-300', open ? '-translate-y-2 -rotate-45' : '']"></span>
      </button>
    </div>

    <!-- mobile menu -->
    <div
      :class="[
        'md:hidden overflow-hidden transition-all duration-500 ease-out',
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <nav class="bg-bone border-t border-line/60 px-6 py-6 flex flex-col gap-5">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-display text-2xl text-ink hover:text-bronze transition-colors"
          @click="close"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="mt-2 text-center text-[0.7rem] tracking-[0.22em] uppercase font-semibold bg-ink text-bone px-5 py-3 rounded-full"
          @click="close"
        >
          Start a Project
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
