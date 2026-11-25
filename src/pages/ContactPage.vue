<script setup>
import { ref, reactive } from 'vue'
import Reveal from '../components/Reveal.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  propertyType: '',
  area: '',
  budget: '',
  timeline: '',
  message: '',
})

const submitted = ref(false)
const errors = ref({})

const propertyTypes = ['Residential', 'Villa', 'Apartment', 'Penthouse', 'Commercial', 'Hospitality']
const budgets = ['Under ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹2Cr', '₹2Cr – ₹5Cr', '₹5Cr+']
const timelines = ['Within 3 months', '3–6 months', '6–12 months', '12+ months']

function validate() {
  const e = {}
  if (!form.name.trim()) e.name = 'Please enter your name'
  if (!form.email.trim()) e.email = 'Please enter your email'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
  if (!form.message.trim()) e.message = 'Please tell us about your project'
  errors.value = e
  return Object.keys(e).length === 0
}

function onSubmit() {
  if (!validate()) return
  submitted.value = true
}

function reset() {
  Object.keys(form).forEach((k) => (form[k] = ''))
  errors.value = {}
  submitted.value = false
}
</script>

<template>
  <div>
    <!-- hero -->
    <section class="relative h-[55vh] min-h-[400px] overflow-hidden grain">
      <img src="/images/cta.jpg" alt="Contact" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70"></div>
      <div class="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-14">
        <Reveal>
          <p class="text-[0.65rem] tracking-[0.32em] uppercase text-bone/80 font-semibold">Contact</p>
          <h1 class="mt-5 font-display text-bone text-5xl md:text-7xl leading-[0.98] tracking-tight max-w-4xl">
            Begin a <span class="italic text-bronze-light">conversation.</span>
          </h1>
        </Reveal>
      </div>
    </section>

    <!-- form + info -->
    <section class="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-14">
        <!-- info -->
        <div class="lg:col-span-4">
          <Reveal>
            <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">Studio</p>
            <h2 class="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-ink">
              Golf Course Road,<br />Gurugram.
            </h2>
            <p class="mt-6 text-muted leading-relaxed">
              We design and execute residential, commercial and hospitality spaces across Gurugram, Delhi, Noida, Faridabad and the wider NCR.
            </p>
            <div class="mt-10 space-y-6">
              <div>
                <p class="text-[0.6rem] tracking-[0.28em] uppercase text-muted">Email</p>
                <a href="mailto:hello@ateliergurgaon.com" class="mt-2 block font-display text-xl text-ink hover:text-bronze transition-colors">hello@ateliergurgaon.com</a>
              </div>
              <div>
                <p class="text-[0.6rem] tracking-[0.28em] uppercase text-muted">Phone</p>
                <a href="tel:+91124567890" class="mt-2 block font-display text-xl text-ink hover:text-bronze transition-colors">+91 124 567 890</a>
              </div>
              <div>
                <p class="text-[0.6rem] tracking-[0.28em] uppercase text-muted">Studio</p>
                <p class="mt-2 font-display text-xl text-ink leading-snug">Golf Course Road,<br />Gurugram, Haryana 122002</p>
              </div>
              <div>
                <p class="text-[0.6rem] tracking-[0.28em] uppercase text-muted">Hours</p>
                <p class="mt-2 font-display text-xl text-ink">Mon – Sat, 10am – 7pm</p>
              </div>
            </div>
          </Reveal>
        </div>

        <!-- form -->
        <div class="lg:col-span-8">
          <Reveal :delay="150">
            <div v-if="submitted" class="bg-bone-dark rounded-sm p-10 md:p-14 text-center">
              <p class="font-display italic text-bronze text-lg">Thank you.</p>
              <h3 class="mt-4 font-display text-3xl md:text-4xl text-ink">We'll be in touch within two working days.</h3>
              <p class="mt-5 text-muted max-w-md mx-auto leading-relaxed">
                Your enquiry has been received. A member of the studio will reach out shortly.
              </p>
              <button
                @click="reset"
                class="mt-8 text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-ink link-underline"
              >
                Send another enquiry
              </button>
            </div>

            <form v-else @submit.prevent="onSubmit" novalidate>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label for="name" class="field-label">Name *</label>
                  <input id="name" v-model="form.name" type="text" class="field" placeholder="Your full name" autocomplete="name" />
                  <p v-if="errors.name" class="mt-2 text-xs text-red-700">{{ errors.name }}</p>
                </div>
                <div>
                  <label for="email" class="field-label">Email *</label>
                  <input id="email" v-model="form.email" type="email" class="field" placeholder="you@example.com" autocomplete="email" />
                  <p v-if="errors.email" class="mt-2 text-xs text-red-700">{{ errors.email }}</p>
                </div>
                <div>
                  <label for="phone" class="field-label">Phone</label>
                  <input id="phone" v-model="form.phone" type="tel" class="field" placeholder="+91 ..." autocomplete="tel" />
                </div>
                <div>
                  <label for="location" class="field-label">Project Location</label>
                  <input id="location" v-model="form.location" type="text" class="field" placeholder="e.g. Golf Course Road, Gurugram" />
                </div>
                <div>
                  <label for="propertyType" class="field-label">Property Type</label>
                  <select id="propertyType" v-model="form.propertyType" class="field">
                    <option value="">Select…</option>
                    <option v-for="t in propertyTypes" :key="t" :value="t">{{ t }}</option>
                  </select>
                </div>
                <div>
                  <label for="area" class="field-label">Approximate Area</label>
                  <input id="area" v-model="form.area" type="text" class="field" placeholder="e.g. 4,800 sq ft" />
                </div>
                <div>
                  <label for="budget" class="field-label">Budget Range</label>
                  <select id="budget" v-model="form.budget" class="field">
                    <option value="">Select…</option>
                    <option v-for="b in budgets" :key="b" :value="b">{{ b }}</option>
                  </select>
                </div>
                <div>
                  <label for="timeline" class="field-label">Project Timeline</label>
                  <select id="timeline" v-model="form.timeline" class="field">
                    <option value="">Select…</option>
                    <option v-for="t in timelines" :key="t" :value="t">{{ t }}</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="field-label">Message *</label>
                  <textarea id="message" v-model="form.message" rows="5" class="field resize-none" placeholder="Tell us about your project — the space, the feeling you want, the timeline…"></textarea>
                  <p v-if="errors.message" class="mt-2 text-xs text-red-700">{{ errors.message }}</p>
                </div>
              </div>

              <button
                type="submit"
                class="mt-10 inline-flex items-center gap-3 bg-ink text-bone px-8 py-4 rounded-full text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-bronze transition-colors"
              >
                Send Enquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>
              <p class="mt-5 text-xs text-muted leading-relaxed">
                We respond within two working days. Your details are never shared.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
</template>
