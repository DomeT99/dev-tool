<template>
  <nav class="bg-primary text-surface shadow-minimal">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <div class="text-lg font-heading font-bold tracking-wide flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
        DevTool
      </div>
      <ul class="flex gap-8">
        <li>
          <NuxtLink to="/" class="flex items-center gap-1 hover:text-accent transition-colors">
            <HomeIcon class="w-5 h-5" /> Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/stats" class="flex items-center gap-1 hover:text-accent transition-colors">
            <ChartBarIcon class="w-5 h-5" /> Stats
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { HomeIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
// Nessuna logica necessaria per ora
</script>
