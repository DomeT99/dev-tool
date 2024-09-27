<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="mt-6 columns">
      <div class="column is-12">
        <slot />
      </div>
    </div>
  </NuxtLayout>
</template>
