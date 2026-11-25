<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <div :class="align === 'center' ? 'text-center mx-auto' : ''" class="max-w-3xl">
    <p class="text-[0.65rem] tracking-[0.28em] uppercase text-bronze font-semibold">{{ eyebrow }}</p>
    <h2 class="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
      {{ title }}
    </h2>
  </div>
</template>
