<script setup lang="ts">
defineProps<{ data: { title: string } }>();
</script>
<template>
  <form class="card container is-max-tablet p-6">
    <h1 class="title has-text-centered">{{ data.title }}</h1>
    <slot />
  </form>
</template>
