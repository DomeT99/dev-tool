<script setup lang="ts">
const date = computed(() => new Date().getFullYear());
</script>
<template>
  <footer class="bg-primary text-surface py-4 mt-12 shadow-minimal min-h-[8vh]">
    <div class="container mx-auto text-center text-sm">
      © {{ date }}
      <a
        href="https://linktr.ee/domenicotenace"
        target="_blank"
        rel="noopener"
        class="underline hover:text-accent"
        >Domenico Tenace</a
      >. All rights reserved.
    </div>
  </footer>
</template>
