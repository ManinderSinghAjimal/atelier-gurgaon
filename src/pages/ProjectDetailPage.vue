<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Reveal from '../components/Reveal.vue'
import ProjectCard from '../components/ProjectCard.vue'
import FinalCta from '../components/FinalCta.vue'
import { getProject, getRelated } from '../data/projects'

const route = useRoute()
const project = computed(() => getProject(route.params.slug))
const related = computed(() => (project.value ? getRelated(project.value) : []))

const info = computed(() => {
  if (!project.value) return []
  return [
    { label: 'Location', value: project.value.location },
    { label: 'Type', value: project.value.type },
    { label: 'Year', value: project.value.year },
    { label: 'Area', value: project.value.area },
  ]
})
</script>

<template>
  <div v-if="project">
    <!-- hero -->
    <section class="relative h-[75vh] min-h-[480px] overflow-hidden grain">
      <img :src="project.image" :alt="project.name" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70"></div>
      <div class="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
        <Reveal>
          <RouterLink to="/projects" class="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.28em] uppercase text-bone/80 hover:text-bone transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
            All Projects
          </RouterLink>
          <p class="mt-6 text-[0.65rem] tracking-[0.32em] uppercase text-bronze-light font-semibold">{{ project.type }} · {{ project.year }}</p>
          <h1 class="mt-4 font-display text-bone text-5xl md:text-7xl leading-[0.98] tracking-tight max-w-4xl">{{ project.name }}</h1>
          <p class="mt-5 text-bone/80 text-lg max-w-xl">{{ project.location }}</p>
        </Reveal>
      </div>
    </section>

    <!-- info + concept -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <Reveal>
            <dl class="space-y-6">
              <div v-for="item in info" :key="item.label" class="border-b border-line pb-5">
                <dt class="text-[0.6rem] tracking-[0.28em] uppercase text-muted">{{ item.label }}</dt>
                <dd class="mt-2 font-display text-xl text-ink">{{ item.value }}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
        <div class="lg:col-span-8">
          <Reveal :delay="150">
            <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">Design Concept</p>
            <h2 class="mt-5 font-display text-3xl md:text-4xl leading-[1.15] tracking-tight text-ink">{{ project.concept }}</h2>
            <p class="mt-6 text-muted text-lg leading-relaxed">{{ project.narrative }}</p>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- materials -->
    <section class="bg-bone-dark py-20 md:py-28">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">Materials</p>
          <h2 class="mt-4 font-display text-3xl md:text-4xl tracking-tight text-ink">Selected with care.</h2>
        </Reveal>
        <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-sm overflow-hidden">
          <Reveal v-for="(m, i) in project.materials" :key="m" :delay="i * 80" class="bg-bone-dark">
            <div class="p-6 md:p-8 text-center">
              <p class="font-display text-lg md:text-xl text-ink">{{ m }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- gallery -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <Reveal>
        <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">Gallery</p>
        <h2 class="mt-4 font-display text-3xl md:text-4xl tracking-tight text-ink">A closer look.</h2>
      </Reveal>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        <Reveal class="md:col-span-7">
          <div class="img-zoom relative overflow-hidden rounded-sm aspect-[4/3]">
            <img :src="project.gallery[0]" :alt="project.name" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal class="md:col-span-5" :delay="120">
          <div class="img-zoom relative overflow-hidden rounded-sm aspect-[4/3] md:aspect-[3/4]">
            <img :src="project.gallery[1]" :alt="project.name" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal class="md:col-span-5" :delay="0">
          <div class="img-zoom relative overflow-hidden rounded-sm aspect-[4/3]">
            <img :src="project.gallery[2]" :alt="project.name" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal class="md:col-span-7" :delay="120">
          <div class="img-zoom relative overflow-hidden rounded-sm aspect-[4/3]">
            <img :src="project.gallery[3]" :alt="project.name" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>

    <!-- related -->
    <section v-if="related.length" class="bg-ink text-bone py-20 md:py-28 grain relative">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">Related</p>
          <h2 class="mt-4 font-display text-3xl md:text-4xl tracking-tight">More from the studio.</h2>
        </Reveal>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal v-for="(p, i) in related" :key="p.slug" :delay="i * 120">
            <ProjectCard :project="p" ratio="aspect-[16/10]" />
          </Reveal>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>

  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
    <p class="font-display text-3xl text-ink">Project not found.</p>
    <RouterLink to="/projects" class="mt-6 text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-bronze link-underline">
      Back to Projects
    </RouterLink>
  </div>
</template>
