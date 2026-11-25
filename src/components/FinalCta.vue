<script setup>
import { RouterLink } from 'vue-router'
import Reveal from './Reveal.vue'
</script>

<template>
  <section class="relative overflow-hidden grain">
    <div class="absolute inset-0">
      <img src="/images/cta.jpg" alt="" loading="lazy" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-ink/70"></div>
    </div>
    <div class="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
      <Reveal>
        <p class="text-[0.65rem] tracking-[0.3em] uppercase text-bronze-light font-semibold">Begin a Conversation</p>
        <h2 class="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
          Your Space.<br /><span class="italic text-bronze-light">Our Craft.</span>
        </h2>
        <p class="mt-8 text-bone/70 text-lg max-w-xl mx-auto leading-relaxed">
          Tell us about your project. We'll respond within two working days.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 rounded-full text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-bronze hover:text-bone transition-colors"
          >
            Begin a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </RouterLink>
          <a
            href="mailto:hello@ateliergurgaon.com"
            class="text-bone/80 text-[0.7rem] tracking-[0.22em] uppercase font-medium hover:text-bone transition-colors"
          >
            hello@ateliergurgaon.com
          </a>
        </div>
        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-bone/50 text-xs tracking-[0.18em] uppercase">
          <span>Golf Course Road, Gurugram</span>
          <span class="hidden sm:inline text-bronze-light">·</span>
          <a href="tel:+91124567890" class="hover:text-bone transition-colors">+91 124 567 890</a>
        </div>
      </Reveal>
    </div>
  </section>
</template>
