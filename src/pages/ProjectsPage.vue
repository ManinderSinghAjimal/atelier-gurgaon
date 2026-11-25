<script setup>
import { ref, computed } from 'vue'
import Reveal from '../components/Reveal.vue'
import ProjectCard from '../components/ProjectCard.vue'
import FinalCta from '../components/FinalCta.vue'
import { projects, categories } from '../data/projects'

const active = ref('all')

const filtered = computed(() => {
  if (active.value === 'all') return projects
  return projects.filter((p) => p.category === active.value)
})
</script>

<template>
  <div>
    <!-- hero -->
    <section class="relative h-[60vh] min-h-[420px] overflow-hidden grain">
      <img src="/images/hero.jpg" alt="Projects" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70"></div>
      <div class="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-14">
        <Reveal>
          <p class="text-[0.65rem] tracking-[0.32em] uppercase text-bone/80 font-semibold">Selected Work</p>
          <h1 class="mt-5 font-display text-bone text-5xl md:text-7xl leading-[0.98] tracking-tight max-w-4xl">
            Projects across <span class="italic text-bronze-light">Gurugram</span>.
          </h1>
        </Reveal>
      </div>
    </section>

    <!-- filters -->
    <section class="sticky top-[64px] z-30 bg-bone/95 backdrop-blur-md border-b border-line/60">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="active = cat.id"
          :class="[
            'whitespace-nowrap text-[0.65rem] tracking-[0.22em] uppercase font-semibold px-4 py-2 rounded-full border transition-colors',
            active === cat.id ? 'bg-ink text-bone border-ink' : 'border-line text-ink/70 hover:border-bronze hover:text-bronze',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>
    </section>

    <!-- grid -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div v-if="filtered.length" class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <Reveal
          v-for="(p, i) in filtered"
          :key="p.slug"
          :class="i % 3 === 0 ? 'md:col-span-7' : i % 3 === 1 ? 'md:col-span-5' : 'md:col-span-6'"
          :delay="(i % 3) * 100"
        >
          <ProjectCard :project="p" :ratio="i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'" />
        </Reveal>
      </div>
      <div v-else class="text-center py-24">
        <p class="font-display text-2xl text-muted">No projects in this category yet.</p>
      </div>
    </section>

    <FinalCta />
  </div>
</template>
