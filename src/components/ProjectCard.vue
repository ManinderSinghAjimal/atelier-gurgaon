<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: { type: Object, required: true },
  ratio: { type: String, default: 'aspect-[4/5]' },
})
</script>

<template>
  <RouterLink :to="`/projects/${project.slug}`" class="group block">
    <div :class="['img-zoom relative overflow-hidden rounded-sm', ratio]">
      <img
        :src="project.image"
        :alt="project.name"
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p class="text-[0.6rem] tracking-[0.28em] uppercase text-bone/80">{{ project.type }} · {{ project.year }}</p>
        <h3 class="mt-2 font-display text-2xl md:text-3xl text-bone leading-tight">{{ project.name }}</h3>
        <p class="mt-1 text-bone/70 text-sm">{{ project.location }}</p>
      </div>
    </div>
  </RouterLink>
</template>
