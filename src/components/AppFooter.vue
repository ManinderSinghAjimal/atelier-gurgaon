<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-ink text-bone">
    <div class="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-bone/10">
        <div class="md:col-span-5">
          <RouterLink to="/" class="flex items-baseline gap-2">
            <span class="font-display text-2xl tracking-tight">Atelier</span>
            <span class="font-display italic text-2xl text-bronze-light">Gurgaon</span>
          </RouterLink>
          <p class="mt-5 text-bone/60 text-sm leading-relaxed max-w-sm">
            Luxury interior design studio in Gurugram, Haryana. Residential interiors, villas, penthouses, corporate and hospitality spaces.
          </p>
        </div>

        <div class="md:col-span-2">
          <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">Studio</p>
          <ul class="mt-4 space-y-3 text-sm text-bone/70">
            <li><RouterLink to="/about" class="hover:text-bone transition-colors">About</RouterLink></li>
            <li><RouterLink to="/projects" class="hover:text-bone transition-colors">Projects</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-bone transition-colors">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">Services</p>
          <ul class="mt-4 space-y-3 text-sm text-bone/70">
            <li>Residential</li>
            <li>Villas</li>
            <li>Penthouses</li>
            <li>Corporate</li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze-light font-semibold">Studio</p>
          <address class="mt-4 not-italic text-sm text-bone/70 leading-relaxed">
            Golf Course Road,<br />
            Gurugram, Haryana 122002<br /><br />
            <a href="mailto:hello@ateliergurgaon.com" class="hover:text-bone transition-colors">hello@ateliergurgaon.com</a><br />
            <a href="tel:+91124567890" class="hover:text-bone transition-colors">+91 124 567 890</a>
          </address>
        </div>
      </div>

      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] tracking-[0.18em] uppercase text-bone/40">
        <p>© 2026 Atelier Gurgaon. All rights reserved.</p>
        <p>Gurugram · Delhi · Noida · Faridabad · NCR</p>
      </div>
    </div>
  </footer>
</template>
