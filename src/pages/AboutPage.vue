<script setup>
import { RouterLink } from 'vue-router'
import Reveal from '../components/Reveal.vue'
import SectionHeading from '../components/SectionHeading.vue'
import FinalCta from '../components/FinalCta.vue'

const team = [
  { name: 'Meera Kapoor', role: 'Founder & Creative Director', bio: 'Architect and interior designer with 15 years of experience across Gurugram and Delhi NCR.' },
  { name: 'Rohan Mehta', role: 'Design Lead', bio: 'Leads residential and commercial design across the region.' },
  { name: 'Anika Sharma', role: 'Materials & Detailing', bio: 'Oversees material selection, specification and detailing.' },
  { name: 'Vikram Iyer', role: 'Project Manager', bio: 'Manages execution from concept to handover.' },
]

const values = [
  { n: '01', title: 'Restraint', text: 'We design with restraint — letting architecture and material speak.' },
  { n: '02', title: 'Craft', text: 'Every detail is considered — from the joint to the finish.' },
  { n: '03', title: 'Warmth', text: 'Spaces that feel personal and lived-in, not just beautiful.' },
  { n: '04', title: 'Precision', text: 'Measured, considered, and executed to the millimetre.' },
]
</script>

<template>
  <div>
    <!-- hero -->
    <section class="relative h-[70vh] min-h-[480px] overflow-hidden grain">
      <img src="/images/about.jpg" alt="Atelier Gurgaon studio" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70"></div>
      <div class="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
        <Reveal>
          <p class="text-[0.65rem] tracking-[0.32em] uppercase text-bone/80 font-semibold">About the Studio</p>
          <h1 class="mt-5 font-display text-bone text-5xl md:text-7xl leading-[0.98] tracking-tight max-w-4xl">
            A studio built on <span class="italic text-bronze-light">restraint</span> and craft.
          </h1>
        </Reveal>
      </div>
    </section>

    <!-- philosophy -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <Reveal>
            <SectionHeading eyebrow="Philosophy" title="We design spaces with restraint, character and purpose." />
            <p class="mt-7 text-muted text-lg leading-relaxed max-w-xl">
              Atelier Gurgaon is a luxury interior design studio based in Golf Course Road, Gurugram. We design residential interiors, villas, penthouses, corporate and hospitality spaces — with the same standard of care across every project.
            </p>
            <p class="mt-5 text-muted text-lg leading-relaxed max-w-xl">
              Our approach is simple: let architecture and material speak. We design with restraint, character and purpose — balancing architectural clarity with the warmth of everyday life.
            </p>
          </Reveal>
        </div>
        <div class="lg:col-span-5">
          <Reveal :delay="150">
            <div class="img-zoom relative overflow-hidden rounded-sm aspect-[3/4]">
              <img src="/images/intro.jpg" alt="Studio interior" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- values -->
    <section class="bg-bone-dark py-24 md:py-32">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="Values" title="What we stand for." />
        </Reveal>
        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-sm overflow-hidden">
          <Reveal v-for="(v, i) in values" :key="v.n" :delay="i * 100" class="bg-bone-dark">
            <div class="p-8 md:p-10 h-full">
              <p class="font-display italic text-bronze text-lg">{{ v.n }}</p>
              <h3 class="mt-4 font-display text-2xl text-ink">{{ v.title }}</h3>
              <p class="mt-4 text-muted leading-relaxed text-sm">{{ v.text }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- founder -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5">
          <Reveal>
            <div class="img-zoom relative overflow-hidden rounded-sm aspect-[3/4]">
              <img src="/images/about.jpg" alt="Meera Kapoor" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
        <div class="lg:col-span-7">
          <Reveal :delay="150">
            <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">Founder & Creative Director</p>
            <h2 class="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">Meera Kapoor</h2>
            <p class="mt-6 text-muted text-lg leading-relaxed max-w-xl">
              Meera is an architect and interior designer with 15 years of experience across Gurugram and Delhi NCR. She founded Atelier Gurgaon in 2018 with a simple belief: that luxury is not about excess, but about restraint, craft and care.
            </p>
            <p class="mt-5 text-muted text-lg leading-relaxed max-w-xl">
              Her work has been recognised for its warm minimalism and architectural clarity — from a single room to a full residence.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- team -->
    <section class="bg-ink text-bone py-24 md:py-32 grain relative">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="Team" title="The people behind the work." />
        </Reveal>
        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 rounded-sm overflow-hidden">
          <Reveal v-for="(m, i) in team" :key="m.name" :delay="i * 100" class="bg-ink">
            <div class="p-8 md:p-10 h-full">
              <p class="font-display italic text-bronze-light text-lg">{{ m.name }}</p>
              <p class="mt-3 text-[0.65rem] tracking-[0.22em] uppercase text-bone/60">{{ m.role }}</p>
              <p class="mt-4 text-bone/70 text-sm leading-relaxed">{{ m.bio }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- expertise -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-5">
          <Reveal>
            <SectionHeading eyebrow="Expertise" title="Residential and commercial." />
          </Reveal>
        </div>
        <div class="lg:col-span-7">
          <Reveal :delay="150">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line rounded-sm overflow-hidden">
              <li v-for="(s, i) in ['Residential Interiors', 'Luxury Villas', 'Penthouse Design', 'Corporate Interiors', 'Hospitality', 'Interior Architecture', 'Custom Furniture', 'Turnkey Execution']" :key="s" class="bg-bone">
                <div class="p-6 md:p-7 flex items-center justify-between group hover:bg-bone-dark transition-colors">
                  <span class="font-display text-xl text-ink">{{ s }}</span>
                  <span class="text-bronze text-xl transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>
