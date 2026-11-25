<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import Reveal from '../components/Reveal.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'
import FinalCta from '../components/FinalCta.vue'
import { projects } from '../data/projects'
import { journal } from '../data/journal'
import { testimonials } from '../data/testimonials'

const heroY = ref(0)
const heroRef = ref(null)

function onScroll() {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  if (rect.bottom > 0) {
    heroY.value = Math.max(0, -rect.top * 0.35)
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const featured = projects.slice(0, 6)

const principles = [
  { n: '01', title: 'Material', text: 'Thoughtful materials selected for texture, longevity and character.' },
  { n: '02', title: 'Light', text: 'Natural and architectural light used to shape atmosphere.' },
  { n: '03', title: 'Proportion', text: 'Spaces designed around balance, scale and movement.' },
  { n: '04', title: 'Craft', text: 'Details designed to remain beautiful long after the first impression.' },
]

const services = [
  'Residential Interiors',
  'Luxury Villas',
  'Penthouse Design',
  'Corporate Interiors',
  'Hospitality',
  'Interior Architecture',
  'Custom Furniture',
  'Turnkey Execution',
]

const process = [
  { n: '01', title: 'Discovery', text: 'We listen — understanding how you live, work and gather.' },
  { n: '02', title: 'Concept', text: 'A clear direction — mood, material and spatial intent.' },
  { n: '03', title: 'Design Development', text: 'Plans, elevations and details refined to the millimetre.' },
  { n: '04', title: 'Material & Detailing', text: 'Stone, wood, metal and fabric selected and specified.' },
  { n: '05', title: 'Execution', text: 'Craftsmen and trades managed with precision and care.' },
  { n: '06', title: 'Handover', text: 'A space ready to live in — and to be remembered.' },
]

const activeStep = ref(0)
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section ref="heroRef" class="relative h-screen min-h-[640px] overflow-hidden grain">
      <div class="absolute inset-0 hero-parallax" :style="{ '--hero-y': heroY + 'px' }">
        <img src="/images/hero.jpg" alt="Luxury interior in Gurugram" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70"></div>
      </div>

      <div class="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-28">
        <p class="hero-fade hero-fade-1 text-[0.65rem] tracking-[0.32em] uppercase text-bone/80 font-semibold">
          Luxury Interior Design · Gurugram
        </p>
        <h1 class="hero-fade hero-fade-2 mt-6 font-display text-bone text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight max-w-5xl">
          Spaces That Feel<br /><span class="italic text-bronze-light">Like They Belong</span><br />to You.
        </h1>
        <p class="hero-fade hero-fade-3 mt-7 text-bone/80 text-base md:text-lg max-w-xl leading-relaxed">
          Luxury interiors crafted in Gurugram, where architecture, material and everyday living come together.
        </p>
        <div class="hero-fade hero-fade-4 mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <RouterLink
            to="/projects"
            class="inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 rounded-full text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-bronze hover:text-bone transition-colors"
          >
            Explore Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-3 border border-bone/40 text-bone px-7 py-4 rounded-full text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-bone hover:text-ink transition-colors"
          >
            Start a Project
          </RouterLink>
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span class="text-[0.6rem] tracking-[0.3em] uppercase text-bone/60">Scroll</span>
        <span class="scroll-cue-line block w-px h-10 bg-bone/60"></span>
      </div>
    </section>

    <!-- ============ INTRO ============ -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div class="lg:col-span-7">
          <Reveal>
            <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">The Studio</p>
            <h2 class="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              We design spaces with <span class="italic text-bronze">restraint</span>, character and purpose.
            </h2>
            <p class="mt-7 text-muted text-lg leading-relaxed max-w-xl">
              Balancing architectural clarity with the warmth of everyday life — from a single room to a full residence, we shape spaces that feel both considered and deeply personal.
            </p>
            <div class="mt-10 flex items-center gap-6">
              <RouterLink to="/about" class="link-underline text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-ink">
                Our Philosophy
              </RouterLink>
              <span class="rule-line flex-1 max-w-[120px]"></span>
            </div>
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

    <!-- ============ FEATURED PROJECTS ============ -->
    <section class="bg-ink text-bone py-24 md:py-32 grain relative">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">Selected Work</p>
            <h2 class="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">Featured Projects</h2>
          </Reveal>
          <Reveal :delay="150">
            <RouterLink to="/projects" class="link-underline text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-bone/80 hover:text-bone">
              View All Projects
            </RouterLink>
          </Reveal>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal class="md:col-span-7" :delay="0">
            <ProjectCard :project="featured[0]" ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal class="md:col-span-5" :delay="120">
            <ProjectCard :project="featured[1]" ratio="aspect-[3/4]" />
          </Reveal>
          <Reveal class="md:col-span-5" :delay="0">
            <ProjectCard :project="featured[2]" ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal class="md:col-span-7" :delay="120">
            <ProjectCard :project="featured[3]" ratio="aspect-[16/11]" />
          </Reveal>
          <Reveal class="md:col-span-6" :delay="0">
            <ProjectCard :project="featured[4]" ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal class="md:col-span-6" :delay="120">
            <ProjectCard :project="featured[5]" ratio="aspect-[4/5]" />
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ============ PHILOSOPHY ============ -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <Reveal>
        <SectionHeading eyebrow="Design Philosophy" title="Four principles, one standard." />
      </Reveal>
      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-sm overflow-hidden">
        <Reveal v-for="(p, i) in principles" :key="p.n" :delay="i * 100" class="bg-bone">
          <div class="p-8 md:p-10 h-full">
            <p class="font-display italic text-bronze text-lg">{{ p.n }}</p>
            <h3 class="mt-4 font-display text-2xl md:text-3xl text-ink">{{ p.title }}</h3>
            <p class="mt-4 text-muted leading-relaxed text-sm">{{ p.text }}</p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ============ SERVICES ============ -->
    <section class="bg-bone-dark py-24 md:py-32">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-4">
            <Reveal>
              <SectionHeading eyebrow="Services" title="What we do." />
              <p class="mt-6 text-muted leading-relaxed">
                From a single room to a full residence, we design and execute spaces with the same standard of care.
              </p>
              <RouterLink to="/contact" class="mt-8 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-ink link-underline">
                Discuss Your Project
              </RouterLink>
            </Reveal>
          </div>
          <div class="lg:col-span-8">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line rounded-sm overflow-hidden">
              <li v-for="(s, i) in services" :key="s" class="bg-bone-dark">
                <Reveal :delay="i * 60">
                  <div class="flex items-center justify-between p-6 md:p-7 group hover:bg-bone transition-colors">
                    <span class="font-display text-xl md:text-2xl text-ink">{{ s }}</span>
                    <span class="text-bronze text-xl transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </Reveal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROCESS ============ -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <Reveal>
        <SectionHeading eyebrow="Process" title="Six steps to a finished space." />
      </Reveal>
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-5">
          <ol class="flex flex-col">
            <li v-for="(step, i) in process" :key="step.n">
              <button
                @click="activeStep = i"
                :class="[
                  'w-full text-left flex items-baseline gap-5 py-5 border-b border-line transition-colors',
                  activeStep === i ? 'text-bronze' : 'text-ink hover:text-bronze',
                ]"
              >
                <span class="font-display italic text-sm">{{ step.n }}</span>
                <span class="font-display text-2xl md:text-3xl">{{ step.title }}</span>
              </button>
            </li>
          </ol>
        </div>
        <div class="lg:col-span-7">
          <Reveal :key="activeStep">
            <div class="bg-ink text-bone rounded-sm p-10 md:p-14 min-h-[320px] flex flex-col justify-center grain relative">
              <p class="font-display italic text-bronze-light text-lg">{{ process[activeStep].n }}</p>
              <h3 class="mt-4 font-display text-3xl md:text-4xl leading-tight">{{ process[activeStep].title }}</h3>
              <p class="mt-5 text-bone/70 text-lg leading-relaxed max-w-md">{{ process[activeStep].text }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ============ LOCATION ============ -->
    <section class="bg-bone-dark py-24 md:py-32">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7">
            <Reveal>
              <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">Gurugram · Delhi NCR</p>
              <h2 class="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
                A Gurugram studio,<br /><span class="italic text-bronze">serving the region.</span>
              </h2>
              <p class="mt-7 text-muted text-lg leading-relaxed max-w-xl">
                We are based in Golf Course Road, Gurugram — and we work across Gurugram, Delhi, Noida, Faridabad and the wider NCR.
              </p>
              <div class="mt-10 flex flex-wrap gap-3">
                <span v-for="city in ['Gurugram', 'Delhi', 'Noida', 'Faridabad', 'NCR']" :key="city" class="text-[0.7rem] tracking-[0.22em] uppercase font-semibold border border-line px-5 py-2.5 rounded-full text-ink/80">
                  {{ city }}
                </span>
              </div>
            </Reveal>
          </div>
          <div class="lg:col-span-5">
            <Reveal :delay="150">
              <div class="img-zoom relative overflow-hidden rounded-sm aspect-[4/5]">
                <img src="/images/about.jpg" alt="Studio" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <Reveal>
        <SectionHeading eyebrow="Clients" title="In their words." align="center" />
      </Reveal>
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal v-for="(t, i) in testimonials" :key="t.name" :delay="i * 120">
          <figure class="h-full bg-bone-dark rounded-sm p-8 md:p-10 flex flex-col justify-between">
            <blockquote class="font-display text-xl md:text-2xl leading-snug text-ink">
              “{{ t.quote }}”
            </blockquote>
            <figcaption class="mt-8 pt-6 border-t border-line">
              <p class="text-sm font-semibold text-ink">{{ t.name }}</p>
              <p class="mt-1 text-xs tracking-[0.18em] uppercase text-muted">{{ t.role }}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>

    <!-- ============ JOURNAL ============ -->
    <section class="bg-ink text-bone py-24 md:py-32 grain relative">
      <div class="max-w-[1400px] mx-auto px-6 md:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">Journal</p>
            <h2 class="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">Notes on design.</h2>
          </Reveal>
          <Reveal :delay="150">
            <p class="text-bone/60 max-w-sm text-sm leading-relaxed">Essays on materials, light and proportion — written from the studio.</p>
          </Reveal>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal v-for="(j, i) in journal" :key="j.slug" :delay="i * 100">
            <article class="group cursor-pointer">
              <div class="img-zoom relative overflow-hidden rounded-sm aspect-[4/3]">
                <img :src="j.image" :alt="j.title" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div class="mt-5">
                <p class="text-[0.6rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">{{ j.category }} · {{ j.date }}</p>
                <h3 class="mt-2 font-display text-xl leading-snug group-hover:text-bronze-light transition-colors">{{ j.title }}</h3>
                <p class="mt-2 text-bone/50 text-xs tracking-[0.18em] uppercase">{{ j.readTime }}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <FinalCta />
  </div>
</template>
